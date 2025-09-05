import React from 'react';
import DashboardIcon from '../components/icons/DashboardIcon';
import SellerApprovalIcon from '../components/icons/SellerApprovalIcon';
import ShopApprovalIcon from '../components/icons/ShopApprovalIcon';
import ProductApprovalIcon from '../components/icons/ProductApprovalIcon';
import AnalyticsIcon from '../components/icons/AnalyticsIcon';
import PaymentManagementIcon from '../components/icons/PaymentManagementIcon';
import SellerManagementIcon from '../components/icons/SellerManagementIcon';
import UserReportsIcon from '../components/icons/UserReportsIcon';
import LogoutIcon from '../components/icons/LogoutIcon';

// This is a comment to explain the purpose of this component.
// The Sidebar component displays the navigation links for the admin panel.
const Sidebar = ({ navigateTo, activePage }) => {
  const navItems = [
    { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
    { id: 'seller-approval', icon: <SellerApprovalIcon />, label: 'Seller Approval' },
    { id: 'shop-approval', icon: <ShopApprovalIcon />, label: 'Shop Approval' },
    { id: 'product-approval', icon: <ProductApprovalIcon />, label: 'Product Approval' },
    { id: 'analytics', icon: <AnalyticsIcon />, label: 'Analytics' },
    { id: 'payment-management', icon: <PaymentManagementIcon />, label: 'Payments' },
    { id: 'seller-management', icon: <SellerManagementIcon />, label: 'Seller Management' },
    { id: 'user-reports', icon: <UserReportsIcon />, label: 'User Reports' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-gray-300 flex-col hidden md:flex">
      <div className="h-20 flex items-center justify-center text-2xl font-bold text-white border-b border-gray-700">Admin Panel</div>
      <nav className="flex-1 px-4 py-6">
        {navItems.map(item => (
          <a key={item.id} href="#" onClick={(e) => { e.preventDefault(); navigateTo(item.id); }} className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors duration-200 ${activePage === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 hover:text-white'}`}>
            <span className="w-6 h-6 mr-4">{item.icon}</span><span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-gray-700">
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('logout'); }} className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white">
          <span className="w-6 h-6 mr-4"><LogoutIcon /></span><span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
