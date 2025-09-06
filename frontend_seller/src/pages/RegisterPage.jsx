import React, { useState } from 'react';
import { UploadCloudIcon } from '../components/icons';

const RegisterPage = ({ onRegister, showLogin }) => {
  const [fileName, setFileName] = useState('');
  const handleFileChange = (e) => setFileName(e.target.files.length > 0 ? e.target.files[0].name : '');

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-12 animate-fade-in">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Become a Seller</h1>
        <form onSubmit={(e) => { e.preventDefault(); onRegister(); }} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-gray-400 mb-1">Full Name</label><input type="text" className="w-full bg-gray-700 rounded p-2" required /></div>
            <div><label className="block text-gray-400 mb-1">Email Address</label><input type="email" className="w-full bg-gray-700 rounded p-2" required /></div>
            <div><label className="block text-gray-400 mb-1">Password</label><input type="password" className="w-full bg-gray-700 rounded p-2" required /></div>
            <div><label className="block text-gray-400 mb-1">Shop Name</label><input type="text" className="w-full bg-gray-700 rounded p-2" required /></div>
          </div>
          <div><label className="block text-gray-400 mb-1">Business Description</label><textarea rows="3" className="w-full bg-gray-700 rounded p-2" required></textarea></div>
          <div><label className="block text-gray-400 mb-1">Business License / ID</label>
            <label htmlFor="file-upload" className="cursor-pointer bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-600 hover:border-blue-500">
              <UploadCloudIcon className="w-10 h-10 text-gray-500" />
              <p className="mt-2 text-sm text-gray-400">{fileName || "Click to upload a PDF"}</p>
            </label>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-6">Submit Application</button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">Already have an account? <button onClick={showLogin} className="text-blue-400 hover:underline">Login here</button></p>
      </div>
    </div>
  );
};

export default RegisterPage;
