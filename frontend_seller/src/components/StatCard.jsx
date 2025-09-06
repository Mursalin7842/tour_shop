import React from 'react';

const StatCard = ({ icon, title, value, growth, onClick }) => (
  <div onClick={onClick} className={`bg-gray-800 p-6 rounded-lg flex items-center transition-all transform hover:-translate-y-1 ${onClick ? 'cursor-pointer hover:bg-gray-700' : ''}`}>
    <div className="p-3 rounded-lg mr-4 bg-gray-700">{icon}</div>
    <div>
      <p className="text-gray-400 text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      {growth && <p className={`text-sm font-medium ${growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{growth}</p>}
    </div>
  </div>
);

export default StatCard;
