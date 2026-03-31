import React from 'react';

export default function TradeJournal({ api }) {
  return (
    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-green-500">Trade Journal</h2>
      <p className="text-gray-400 text-sm">Connected to: {api || 'Local Mode'}</p>
      <div className="mt-4 p-4 border border-dashed border-gray-700 text-center text-gray-600">
        No trades logged yet.
      </div>
    </div>
  );
}
