import React from 'react';

const LoginPage = ({ onLogin, showRegister }) => (
  <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center animate-fade-in">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-6 text-center">Seller Login</h1>
      <form onSubmit={(e) => { e.preventDefault(); onLogin({ name: 'John Doe', email: 'john.doe@example.com', shopName: 'JD Electronics' }); }}>
        <input type="text" placeholder="Username" required className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" placeholder="Password" required className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Login</button>
      </form>
      <p className="text-center text-sm text-gray-400 mt-6">Don't have an account? <button onClick={showRegister} className="text-blue-400 hover:underline">Register here</button></p>
    </div>
  </div>
);

export default LoginPage;
