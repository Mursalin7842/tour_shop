import React from 'react';

const SettingsPage = ({ userInfo }) => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <div><h2 className="text-2xl font-bold">Profile Settings</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><label className="block text-gray-400">Full Name</label><input type="text" defaultValue={userInfo.name} className="w-full bg-gray-700 rounded p-2" /></div>
        <div><label className="block text-gray-400">Email Address</label><input type="email" defaultValue={userInfo.email} className="w-full bg-gray-700 rounded p-2" /></div>
      </div>
      <div className="pt-4 flex justify-end"><button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button></div>
    </div>
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <div><h2 className="text-2xl font-bold">Payout Settings</h2></div>
      <p className="text-gray-400">Payouts are made to your connected bank account.</p>
      <p className="mt-4 font-semibold">Bank of America **** 4242</p>
      <div className="pt-4 flex justify-end"><button className="text-blue-400 hover:underline mt-2 text-sm">Update Bank Account</button></div>
    </div>
  </div>
);

export default SettingsPage;
