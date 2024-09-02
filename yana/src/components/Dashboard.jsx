// src/components/Dashboard.jsx
import React from 'react';
import SideBar from "./SideBar";
import Table from './Table';
import SearchBar from './SearchBar';
import Tiles from './Tiles';

function Dashboard({ onLogout }) {
  const handleLogout = async () => {
    try {
      // Get the refresh token from local storage
      const refreshToken = localStorage.getItem('refreshToken');
  
      if (!refreshToken) {
        throw new Error('No refresh token found. Please log in.');
      }
  
      // Make an API request to invalidate the refresh token
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successfully invalidated the refresh token
        console.log('Refresh token invalidated:', data.message);
  
        // Clear tokens from local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        
      } else {
        console.error('Error invalidating refresh token:', data.message);
      }
    } catch (error) {
      console.error('Error handling logout:', error);
    }
    onLogout();
  };

  return (
    <div className="flex bg-gray-100 w-screen h-screen">
      <SideBar className="w-64 h-screen" />
      <div className="flex-grow p-4 relative">
        {/* Adjusted search bar size and button alignment */}
        <div className="flex items-center mb-4 space-x-4">
          <SearchBar className="w-1/2" />
          <button
            onClick={handleLogout}
            className="py-1 px-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center justify-center focus:outline-none"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-4 gap-16 mb-4 mt-10">
          <Tiles src="./src/assets/SideBar SVGs/active users.svg" tag="Current Active Customers" num="75"/>
          <Tiles src="./src/assets/SideBar SVGs/Delivered.svg" tag="Total Orders Delivered" num="324"/>
          <Tiles src="./src/assets/SideBar SVGs/order cancel.svg" tag="Total Orders Canceled" num="35"/>
          <Tiles src="./src/assets/SideBar SVGs/revenue.svg" tag="Total Revenue" num="$400,000"/>
        </div>
        <div className="h-[calc(79vh-4rem)] overflow-y-auto overflow-x-hidden">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
