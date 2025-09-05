import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../pages/Dashboard';
import SellerApproval from '../pages/SellerApproval';
import ShopApproval from '../pages/ShopApproval';
import ProductApproval from '../pages/ProductApproval';
import AnalyticsAndReporting from '../pages/AnalyticsAndReporting';
import PaymentManagement from '../pages/PaymentManagement';
import SellerManagement from '../pages/SellerManagement';
import UserReports from '../pages/UserReports';

// This is a comment to explain the purpose of this component.
// The AdminLayout component is the main layout for the admin panel.
// It includes the sidebar, header, and the main content area.
// It also handles the navigation between pages.
const AdminLayout = ({ userInfo, onLogout }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [pageState, setPageState] = useState({});

  const pages = {
    'dashboard': { component: <Dashboard navigateTo={navigateTo} />, title: 'Dashboard' },
    'seller-approval': { component: <SellerApproval />, title: 'Seller Approval' },
    'shop-approval': { component: <ShopApproval />, title: 'Shop Approval' },
    'product-approval': { component: <ProductApproval />, title: 'Product Approval' },
    'analytics': { component: <AnalyticsAndReporting />, title: 'Analytics & Reporting' },
    'payment-management': { component: <PaymentManagement />, title: 'Payment Management' },
    'seller-management': { component: <SellerManagement />, title: 'Seller Management' },
    'user-reports': { component: <UserReports />, title: 'User Reports' },
  };

  // This is a comment to explain the purpose of this function.
  // The navigateTo function is used to switch between pages in the admin panel.
  function navigateTo(page, state = {}) {
    if (page === 'logout') {
      onLogout();
      return;
    }
    setActivePage(page);
    setPageState(state);
  }

  const ActiveComponent = React.cloneElement(pages[activePage].component, pageState);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar navigateTo={navigateTo} activePage={activePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={pages[activePage].title} userInfo={userInfo} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-8">
          {ActiveComponent}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
