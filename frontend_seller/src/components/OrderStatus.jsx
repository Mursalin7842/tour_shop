import React from 'react';

const OrderStatus = ({ status }) => {
  switch (status) {
    case 'approved': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">Approved</span>;
    case 'pending': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300">Pending Admin</span>;
    case 'modification': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-900 text-yellow-300">Mod Request</span>;
    case 'rejected': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-900 text-red-300">Rejected</span>;
    default: return null;
  }
};

export default OrderStatus;
