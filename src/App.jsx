import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Calculator, TrendingUp, BookOpen, Zap } from 'lucide-react';
import PositionSizeCalculator from './components/PositionSizeCalculator';
import TPSLCalculator from './components/TPSLCalculator';
import TradeJournal from './components/TradeJournal';

// Vite uses import.meta.env instead of process.env
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';
const API = `${BACKEND_URL}/api`;

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="border-b border-gray-800 pb-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-green-500" strokeWidth={2.5} />
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  CRYPTO TOOLS HUB
                </h1>
                <p className="text-xs uppercase tracking-wider text-gray-400 mt-0.5">
                  Position Sizing & Trade Management
                </p>
              </div>
            </div>
            <button
              className="px-6 py-2 border border-green-500 text-green-500 hover:bg-green-500/10 font-bold uppercase tracking-wider text-sm transition-colors"
            >
              UPGRADE PRO
            </button>
          </div>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="position" className="w-full">
          <TabsList className="w-full bg-black border-b border-gray-800 rounded-none p-0 h-auto">
            <TabsTrigger
              value="position"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-green-500 data-[state=active]:text-white text-gray-400 py-3 px-4 uppercase text-xs tracking-wider font-semibold"
            >
              <Calculator className="w-4 h-4 mr-2 inline" />
              Position Size
            </TabsTrigger>
            <TabsTrigger
              value="tpsl"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-green-500 data-[state=active]:text-white text-gray-400 py-3 px-4 uppercase text-xs tracking-wider font-semibold"
            >
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              TP/SL Levels
            </TabsTrigger>
            <TabsTrigger
              value="journal"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-green-500 data-[state=active]:text-white text-gray-400 py-3 px-4 uppercase text-xs tracking-wider font-semibold"
            >
              <BookOpen className="w-4 h-4 mr-2 inline" />
              Trade Journal
            </TabsTrigger>
          </TabsList>

          <TabsContent value="position" className="mt-6">
            <PositionSizeCalculator />
          </TabsContent>

          <TabsContent value="tpsl" className="mt-6">
            <TPSLCalculator />
          </TabsContent>

          <TabsContent value="journal" className="mt-6">
            <TradeJournal api={API} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
