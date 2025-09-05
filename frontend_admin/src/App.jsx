import React, { useState } from 'react';
import AdminLayout from './layouts/AdminLayout';
import LoginPage from './pages/LoginPage';

// This is a comment to explain the purpose of this component.
// The App component is the root component of the application.
// It handles the authentication flow and renders the AdminLayout or LoginPage.
function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const handleLogin = (username) => {
        setUserInfo({ preferred_username: username });
        setAuthenticated(true);
    };

    const handleLogout = () => {
        setUserInfo(null);
        setAuthenticated(false);
    };

    return authenticated ? <AdminLayout userInfo={userInfo} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />;
}

export default App;
