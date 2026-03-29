# Crypto Tools Hub

A professional crypto trading toolkit with terminal-style dark UI and real-time calculations.

## Features

### 1. Position Size Calculator
- Real-time risk-based position sizing
- Inputs: Account balance, risk percentage, entry price, stop loss
- Output: Calculated position size
- Risk validation warnings (5% warning, 10% error)
- Default 1% risk for safer trading

### 2. TP/SL Calculator
- Automatic take-profit level generation
- Support for 2, 3, or 4 TP levels
- Distribution percentages:
  - 2 TPs: 50% / 50%
  - 3 TPs: 40% / 30% / 30%
  - 4 TPs: 30% / 30% / 30% / 10%
- Shows risk-reward ratios and position type (LONG/SHORT)

### 3. Trade Journal
- MongoDB-backed trade logging
- Track: Entry, Stop Loss, Take Profit, Result (Win/Loss)
- Automatic timestamps
- Persistent storage across sessions

## Tech Stack

**Frontend:**
- React 19
- Tailwind CSS
- Shadcn UI components
- Axios for API calls
- React Router for navigation

**Backend:**
- FastAPI (Python)
- Motor (AsyncIO MongoDB driver)
- Pydantic for data validation
- CORS middleware

**Database:**
- MongoDB

## Prerequisites

- Node.js (v16 or higher)
- Python 3.9+
- MongoDB (local or remote)
- Yarn package manager

## Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd crypto-tools-hub
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
# Edit backend/.env file:
# - MONGO_URL: Your MongoDB connection string
# - DB_NAME: Database name (default: test_database)
# - CORS_ORIGINS: Allowed origins (default: *)
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
yarn install

# Configure environment variables
# Edit frontend/.env file:
# - REACT_APP_BACKEND_URL: Backend API URL (default: http://localhost:8001)
```

### 4. Database Setup

Ensure MongoDB is running:

```bash
# Local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGO_URL in backend/.env with your connection string
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # If using virtual environment
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001
- API Documentation: http://localhost:8001/docs

## Project Structure

```
crypto-tools-hub/
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment variables
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/
│   │   │   ├── PositionSizeCalculator.js
│   │   │   ├── TPSLCalculator.js
│   │   │   ├── TradeJournal.js
│   │   │   └── ui/            # Shadcn UI components
│   │   ├── App.js             # Main application component
│   │   ├── App.css            # Application styles
│   │   ├── index.js           # Entry point
│   │   └── index.css          # Global styles
│   ├── package.json           # Node dependencies
│   ├── tailwind.config.js     # Tailwind configuration
│   └── .env                   # Environment variables
└── README.md                  # This file
```

## API Endpoints

### Health Check
- `GET /api/` - API status check

### Trade Journal
- `POST /api/trades` - Create a new trade
  ```json
  {
    "entry_price": 50000.0,
    "stop_loss": 48000.0,
    "take_profit": "52000",
    "result": "win"
  }
  ```

- `GET /api/trades` - Get all trades (sorted by timestamp, descending)

## Environment Variables

### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
```

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

## Design System

The application uses a minimalist terminal aesthetic:
- **Color Palette:**
  - Background: #0A0A0B (deep black)
  - Surface: #121214 (dark gray)
  - Accent: #00FF41 (neon green)
  - Danger: #FF3366 (red)
  - Warning: #FFB800 (yellow)

- **Typography:**
  - Headings/Body: IBM Plex Sans
  - Numbers/Data: JetBrains Mono (monospace)

- **Components:**
  - Sharp, border-based design (no rounded corners)
  - Real-time calculation updates with micro-animations
  - Terminal-style tab navigation

## Key Features

- ✅ Real-time calculations as you type
- ✅ MongoDB persistence for trade history
- ✅ Risk validation warnings
- ✅ Responsive mobile design
- ✅ Professional trader aesthetic
- ✅ Fast, clean, minimal UI

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod --version`
- Check MONGO_URL in backend/.env
- For MongoDB Atlas, whitelist your IP address

### Port Already in Use
```bash
# Kill process on port 8001 (backend)
lsof -ti:8001 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issues
```bash
# Backend
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall

# Frontend
rm -rf node_modules yarn.lock
yarn install
```

## Production Deployment

### Backend
```bash
# Use production ASGI server
pip install gunicorn
gunicorn server:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8001
```

### Frontend
```bash
# Build for production
yarn build

# Serve with static file server (e.g., serve, nginx)
npx serve -s build
```

### Environment Variables for Production
- Update REACT_APP_BACKEND_URL to your production API URL
- Update CORS_ORIGINS in backend to restrict allowed origins
- Use environment-specific MongoDB connection strings

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions:
- Open an issue on GitHub
- Contact: [your-email@example.com]

## Roadmap

Future enhancements:
- Trade analytics (win rate, P&L)
- Real-time crypto price feeds
- Export trade history (CSV/PDF)
- Multiple portfolio support
- Mobile app version

---

Built with ❤️ for crypto traders
