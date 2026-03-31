import React, { useState } from 'react';

export default function PositionSizeCalculator() {
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(1);
  const [stop, setStop] = useState(2);

  const size = (balance * (risk / 100)) / (stop / 100);

  return (
    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-green-500">Position Size Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-xs uppercase text-gray-500 mb-1">Account Balance ($)</label>
          <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} className="w-full bg-black border border-gray-700 p-2 text-white" />
        </div>
        <div>
          <label className="block text-xs uppercase text-gray-500 mb-1">Risk (%)</label>
          <input type="number" value={risk} onChange={(e) => setRisk(e.target.value)} className="w-full bg-black border border-gray-700 p-2 text-white" />
        </div>
        <div className="p-4 bg-green-500/10 border border-green-500/20 text-center">
          <p className="text-gray-400 text-sm">Recommended Position Size</p>
          <p className="text-2xl font-bold text-green-500">${size.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
