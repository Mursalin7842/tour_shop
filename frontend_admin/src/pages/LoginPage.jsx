import React, { useState } from 'react';

// This is a comment to explain the purpose of this component.
// The LoginPage component displays a login form for the admin.
const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username);
        } else {
            // A non-blocking notification would be better in a real app
            console.error('Please enter a username.');
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username (any will work)" className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Password" className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
