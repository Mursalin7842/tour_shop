import React from 'react';

const MyShopPage = () => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in space-y-6">
    <div><h2 className="text-2xl font-bold">My Shop</h2><p className="text-gray-400">Manage your public shop information.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4"><label className="block text-gray-400">Shop Name</label><input type="text" defaultValue="JD Electronics" className="w-full bg-gray-700 rounded p-2" /></div>
      <div className="space-y-4"><label className="block text-gray-400">Shop Category</label><input type="text" defaultValue="Electronics" className="w-full bg-gray-700 rounded p-2" /></div>
    </div>
    <div><label className="block text-gray-400">Shop Description</label><textarea rows="4" defaultValue="High-quality, futuristic electronic gadgets and accessories. Focused on cutting-edge technology and design." className="w-full bg-gray-700 rounded p-2"></textarea></div>
    <div className="pt-4 flex justify-end"><button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Changes</button></div>
  </div>
);

export default MyShopPage;
