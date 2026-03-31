import React, { useState } from 'react';

export const Tabs = ({ children, defaultValue }) => {
  const [active, setActive] = useState(defaultValue);
  return (<div>{React.Children.map(children, child => React.cloneElement(child, { active, setActive }))}</div>);
};

export const TabsList = ({ children, active, setActive }) => (
  <div className="flex border-b border-gray-800 mb-4">{React.Children.map(children, child => React.cloneElement(child, { active, setActive }))}</div>
);

export const TabsTrigger = ({ value, children, active, setActive }) => (
  <button onClick={() => setActive(value)} className={`px-4 py-2 text-sm font-bold uppercase transition-all ${active === value ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}>{children}</button>
);

export const TabsContent = ({ value, active, children }) => (active === value ? <div>{children}</div> : null);
