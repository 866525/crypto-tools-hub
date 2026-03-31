import React from 'react';
import './App.css';
import axios from 'axios';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Calculator, TrendingUp, BookOpen, Zap } from 'lucide-react';
import PositionSizeCalculator from './components/PositionSizeCalculator';
import TPSLCalculator from './components/TPSLCalculator';
import TradeJournal from './components/TradeJournal';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';
const API = `${BACKEND_URL}/api`;

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <header className="border-b border-gray-800 pb-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-green-500" />
            <h1 className="text-2xl font-bold">CRYPTO TOOLS HUB</h1>
          </div>
        </header>

        <Tabs defaultValue="position" className="w-full">
          <TabsList className="flex bg-gray-900 border-b border-gray-800">
            <TabsTrigger value="position" className="flex-1 py-3 px-4"><Calculator className="inline mr-2" />Size</TabsTrigger>
            <TabsTrigger value="tpsl" className="flex-1 py-3 px-4"><TrendingUp className="inline mr-2" />TP/SL</TabsTrigger>
            <TabsTrigger value="journal" className="flex-1 py-3 px-4"><BookOpen className="inline mr-2" />Journal</TabsTrigger>
          </TabsList>
          <TabsContent value="position" className="mt-6"><PositionSizeCalculator /></TabsContent>
          <TabsContent value="tpsl" className="mt-6"><TPSLCalculator /></TabsContent>
          <TabsContent value="journal" className="mt-6"><TradeJournal api={API} /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
