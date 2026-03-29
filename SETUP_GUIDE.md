# 🚀 Crypto Tools Hub - Quick Start Guide

## What's Included in the ZIP

```
crypto-tools-hub/
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   └── .env.example          # Environment template
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── PositionSizeCalculator.js
│   │   │   ├── TPSLCalculator.js
│   │   │   ├── TradeJournal.js
│   │   │   └── ui/          # Shadcn UI components (40+ components)
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── craco.config.js
│   └── .env.example
├── README.md                  # Full documentation
└── .gitignore                # Git ignore rules
```

## 📋 Prerequisites

Before you begin, install:
- **Node.js** v16+ ([Download](https://nodejs.org/))
- **Python** 3.9+ ([Download](https://www.python.org/))
- **MongoDB** ([Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Yarn** package manager: `npm install -g yarn`

## ⚡ Quick Setup (5 minutes)

### Step 1: Extract the ZIP
```bash
unzip crypto-tools-hub.zip
cd crypto-tools-hub
```

### Step 2: Setup Backend
```bash
cd backend

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# On Mac/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment
cp .env.example .env

# Edit .env file and update MongoDB URL if needed
# Default: MONGO_URL=mongodb://localhost:27017
```

### Step 3: Setup Frontend
```bash
cd ../frontend

# Install dependencies (this may take 2-3 minutes)
yarn install

# Setup environment
cp .env.example .env

# The default settings work for local development
# REACT_APP_BACKEND_URL=http://localhost:8001
```

### Step 4: Start MongoDB
```bash
# Option A: Local MongoDB
mongod

# Option B: MongoDB Atlas (Cloud)
# 1. Create free account at https://www.mongodb.com/cloud/atlas
# 2. Create a cluster
# 3. Get connection string
# 4. Update MONGO_URL in backend/.env
```

### Step 5: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8001
INFO:     Application startup complete.
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

Your browser should automatically open to `http://localhost:3000`

## 🎯 Verify Everything Works

1. **Check Backend API:** Open http://localhost:8001/docs
   - You should see FastAPI interactive documentation

2. **Check Frontend:** http://localhost:3000
   - You should see "CRYPTO TOOLS HUB" with three tabs

3. **Test Position Calculator:**
   - Enter: Account Balance = 10000
   - Risk = 1% (default)
   - Entry Price = 50000
   - Stop Loss = 49000
   - Should show: Position Size = $0.10

4. **Test Trade Journal:**
   - Go to "Trade Journal" tab
   - Fill in a sample trade
   - Click "LOG TRADE"
   - Trade should appear in the table

## 🔧 Troubleshooting

### "Port 8001 already in use"
```bash
# Mac/Linux
lsof -ti:8001 | xargs kill -9

# Windows
netstat -ano | findstr :8001
taskkill /PID <PID> /F
```

### "Port 3000 already in use"
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### MongoDB Connection Error
- Make sure MongoDB is running: `mongod --version`
- Check MONGO_URL in `backend/.env`
- For MongoDB Atlas, whitelist your IP: 0.0.0.0/0 (for testing)

### "Module not found" Errors (Frontend)
```bash
cd frontend
rm -rf node_modules yarn.lock
yarn install
```

### Python Dependencies Issues
```bash
cd backend
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

## 📱 Production Deployment

### Frontend (React)
```bash
cd frontend
yarn build

# Deploy the 'build' folder to:
# - Vercel (recommended)
# - Netlify
# - AWS S3 + CloudFront
# - Any static hosting service
```

### Backend (FastAPI)
```bash
cd backend

# Install production server
pip install gunicorn

# Run with Gunicorn
gunicorn server:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8001

# Deploy to:
# - Railway.app (recommended)
# - Heroku
# - AWS Elastic Beanstalk
# - DigitalOcean App Platform
```

**Important for Production:**
1. Update `REACT_APP_BACKEND_URL` in frontend/.env to your production API URL
2. Update `CORS_ORIGINS` in backend/.env to restrict allowed origins
3. Use MongoDB Atlas for production database
4. Enable HTTPS for both frontend and backend

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  terminal: {
    green: '#00FF41',  // Change accent color
    danger: '#FF3366', // Change error color
    // etc.
  }
}
```

### Add New Calculator
1. Create component in `frontend/src/components/`
2. Add tab in `frontend/src/App.js`
3. Style with terminal theme

### Modify Risk Thresholds
Edit `frontend/src/components/PositionSizeCalculator.js`:
```javascript
if (risk > 10) {  // Change threshold
  setRiskWarning({ type: 'error', message: 'Your message' });
}
```

## 📚 Learn More

- **FastAPI Docs:** https://fastapi.tiangolo.com/
- **React Docs:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **MongoDB:** https://www.mongodb.com/docs/

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- FastAPI interactive docs: http://localhost:8001/docs
- Open an issue on GitHub

## ✅ Next Steps

1. ✅ Get the app running locally
2. ✅ Test all three calculators
3. ✅ Customize colors to your preference
4. ✅ Deploy to production
5. ✅ Add your own features

---

**Built with terminal aesthetics for crypto traders** 💚
