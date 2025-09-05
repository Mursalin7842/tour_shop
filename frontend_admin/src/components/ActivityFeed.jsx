import React from 'react';
import SellerApprovalIcon from './icons/SellerApprovalIcon';
import PaymentManagementIcon from './icons/PaymentManagementIcon';
import ProductApprovalIcon from './icons/ProductApprovalIcon';

// This is a comment to explain the purpose of this component.
// The ActivityFeed component displays a list of recent activities in the admin panel.
const ActivityFeed = () => (
    <div className="bg-gray-800 p-6 rounded-lg h-full">
        <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
        <ul>
            {[
                { id: 1, type: 'seller', text: 'New seller application from JD Electronics.', time: '2 mins ago' },
                { id: 2, type: 'payment', text: 'Payout of $875.00 approved for Smith\'s Wares.', time: '15 mins ago' },
                { id: 3, type: 'product', text: 'Product "Cyber-Knit Jacket" was flagged for review.', time: '1 hour ago' },
                { id: 4, type: 'seller', text: 'New seller application from Green Gardens.', time: '3 hours ago' },
            ].map(activity => (
                <li key={activity.id} className="flex items-center space-x-4 py-3 border-b border-gray-700 last:border-b-0">
                    <div className="bg-gray-700 p-2 rounded-full">
                        {activity.type === 'seller' && <SellerApprovalIcon />}
                        {activity.type === 'payment' && <PaymentManagementIcon />}
                        {activity.type === 'product' && <ProductApprovalIcon />}
                    </div>
                    <div>
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default ActivityFeed;
