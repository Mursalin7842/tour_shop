import React from 'react';

const OrdersPage = ({ orders }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg animate-fade-in">
    <div className="p-6 border-b border-gray-700"><h2 className="text-2xl font-bold">Order History</h2></div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead><tr className="bg-gray-700/50"><th className="p-4">Order ID</th><th className="p-4">Customer</th><th className="p-4">Date</th><th className="p-4">Status</th><th className="p-4 text-right">Total</th></tr></thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b border-gray-700 hover:bg-gray-700/50">
              <td className="p-4 font-mono">{order.id}</td><td className="p-4">{order.customer}</td><td className="p-4">{order.date}</td>
              <td className="p-4"><span className={`px-2 py-1 text-xs font-medium rounded-full ${order.status === 'Completed' ? 'bg-green-900 text-green-300' : order.status === 'Shipped' ? 'bg-blue-900 text-blue-300' : 'bg-yellow-900 text-yellow-300'}`}>{order.status}</span></td>
              <td className="p-4 text-right font-mono">${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default OrdersPage;
