import React from 'react';
import BellIcon from '../components/icons/BellIcon';
import UserIcon from '../components/icons/UserIcon';

// This is a comment to explain the purpose of this component.
// The Header component displays the title of the current page and the user information.
const Header = ({ title, userInfo }) => (
  <header className="h-20 bg-gray-900 flex items-center justify-between px-8 border-b border-gray-700">
    <h1 className="text-2xl font-bold">{title}</h1>
    <div className="flex items-center space-x-4">
      <button className="p-2 rounded-full hover:bg-gray-700"><BellIcon /></button>
      <button className="p-2 rounded-full hover:bg-gray-700"><UserIcon /></button>
      <div className="text-right hidden sm:block">
        <p className="font-semibold">{userInfo.preferred_username || 'Admin'}</p>
        <p className="text-xs text-gray-400">Administrator</p>
      </div>
    </div>
  </header>
);

export default Header;
