import React from 'react';

const NotificationItem = ({ icon, text, details, time }) => (
  <div className="flex items-start p-4 bg-gray-800/50 rounded-lg mb-4">
    <div className="mr-4 text-blue-400">{icon}</div>
    <div className="flex-1">
      <p className="font-semibold">{text}</p>
      {details && <p className="text-sm text-gray-400 mt-1">{details}</p>}
      <p className="text-xs text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

export default NotificationItem;
