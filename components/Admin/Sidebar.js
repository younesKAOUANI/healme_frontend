import React from 'react';
import { logOut } from '@/utils/logOut';
const Sidebar = ({ onMenuItemClick }) => {

  const menuItems = [
    { name: 'Profile', key: 'profile' },
    { name: 'Dashboard', key: 'dashboard' },
    { name: 'Users', key: 'users' },
    { name: 'Doctors', key: 'doctors' },
    { name: 'Issue Reports', key: 'reports' },
  ];

  return (
    <div className={`fixed z-20 bg-gray-800 text-white w-[250px] transition-width duration-300 h-screen flex flex-col`}>
      <div className="flex items-center justify-between mx-auto  border-b border-gray-500 p-4">
        <span className="text-2xl text-center uppercase font-bold py-2">Admin Dashboard</span>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onMenuItemClick(item.key)}
            className="hover:text-secondaryLight block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 w-full text-center text-xl uppercase"
          >
            {item.name}
          </button>
        ))}
      </nav>
      <button
        className="absolute bottom-5 right-[8px] left-0 w-[200px] mx-auto text-white bg-red-400 hover:bg-red-600 hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center"
        onClick={logOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default Sidebar;
