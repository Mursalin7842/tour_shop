import React from 'react';

const SupportPage = () => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in space-y-6">
    <div><h2 className="text-2xl font-bold">Contact Admin</h2><p className="text-gray-400">Have an issue? Send a message to the support team.</p></div>
    <form className="space-y-4">
      <div><label className="block text-gray-400">Subject</label><input type="text" className="w-full bg-gray-700 rounded p-2" placeholder="e.g., Payout Issue" /></div>
      <div><label className="block text-gray-400">Message</label><textarea rows="6" className="w-full bg-gray-700 rounded p-2" placeholder="Describe your issue in detail..."></textarea></div>
      <div className="pt-4 flex justify-end"><button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button></div>
    </form>
  </div>
);

export default SupportPage;
