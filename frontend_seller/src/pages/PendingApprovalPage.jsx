import React from 'react';
import { ClockIcon } from '../components/icons';

const PendingApprovalPage = ({ onLogout }) => (
  <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-4 animate-fade-in">
    <ClockIcon className="w-16 h-16 text-blue-500 mb-4" />
    <h1 className="text-3xl font-bold">Application Submitted</h1>
    <p className="text-gray-400 mt-2 max-w-md">Your application is currently under review by our admin team. This usually takes 24-48 hours. We'll notify you via email once it's approved.</p>
    <button onClick={onLogout} className="mt-8 bg-gray-600 hover:bg-gray-500 font-bold py-2 px-6 rounded-lg">Logout</button>
  </div>
);

export default PendingApprovalPage;
