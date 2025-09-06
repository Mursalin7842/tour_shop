import React from 'react';
import { BellIcon } from './icons';

const SellerHeader = ({ title, userInfo }) => (
  <header className="h-20 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between px-8 border-b border-gray-800">
    <h1 className="text-2xl font-bold">{title}</h1>
    <div className="flex items-center space-x-4">
      <button className="p-2 rounded-full hover:bg-gray-700 relative"><BellIcon /><span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 animate-pulse"></span></button>
      <div><p className="font-semibold text-right">{userInfo.name}</p><p className="text-xs text-gray-400 text-right">{userInfo.shopName}</p></div>
    </div>
  </header>
);

export default SellerHeader;
