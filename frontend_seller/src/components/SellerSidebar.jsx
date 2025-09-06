import React from 'react';
import {
  DashboardIcon,
  PackageIcon,
  ShoppingCartIcon,
  DollarSignIcon,
  SettingsIcon,
  LogoutIcon,
  StarIcon,
  StoreIcon,
  LifeBuoyIcon,
} from './icons';

const SellerSidebar = ({ navigateTo, activePage }) => {
  const navItems = [
    { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
    { id: 'products', icon: <PackageIcon />, label: 'Products' },
    { id: 'orders', icon: <ShoppingCartIcon />, label: 'Orders' },
    { id: 'shop', icon: <StoreIcon />, label: 'My Shop' },
    { id: 'reviews', icon: <StarIcon width={24} height={24} />, label: 'Reviews & Reports' },
    { id: 'payouts', icon: <DollarSignIcon />, label: 'Payouts' },
    { id: 'support', icon: <LifeBuoyIcon />, label: 'Support' },
  ];
  return (
    <aside className="w-64 bg-gray-900 text-gray-300 flex-col hidden md:flex border-r border-gray-800">
      <div className="h-20 flex items-center justify-center text-2xl font-bold text-white border-b border-gray-800">Seller Panel</div>
      <nav className="flex-1 px-4 py-6">
        {navItems.map(item => (
          <a key={item.id} href="#" onClick={(e) => { e.preventDefault(); navigateTo(item.id); }} className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors duration-200 ${activePage === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 hover:text-white'}`}>
            <span className="w-6 h-6 mr-4">{item.icon}</span><span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-gray-800">
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('settings'); }} className="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-700 hover:text-white"><SettingsIcon className="w-6 h-6 mr-4" /><span>Settings</span></a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('logout'); }} className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white"><LogoutIcon className="w-6 h-6 mr-4" /><span>Logout</span></a>
      </div>
    </aside>
  );
};

export default SellerSidebar;
