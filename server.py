from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class TradeCreate(BaseModel):
    entry_price: float
    stop_loss: float
    take_profit: str
    result: str


class Trade(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    entry_price: float
    stop_loss: float
    take_profit: str
    result: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Crypto Tools Hub API"}


@api_router.post("/trades", response_model=Trade)
async def create_trade(input: TradeCreate):
    trade_dict = input.model_dump()
    trade_obj = Trade(**trade_dict)
    
    doc = trade_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.trades.insert_one(doc)
    return trade_obj


@api_router.get("/trades", response_model=List[Trade])
async def get_trades():
    trades = await db.trades.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
    
    for trade in trades:
        if isinstance(trade['timestamp'], str):
            trade['timestamp'] = datetime.fromisoformat(trade['timestamp'])
    
    return trades


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()