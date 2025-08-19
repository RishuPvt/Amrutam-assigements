// src/components/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; 
import Sidebar from './Sidebar';

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar component on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header component at the top */}
        <Header />

        {/* The primary content for each page will be rendered here */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-8">
          {/* Outlet is a placeholder from react-router-dom for page content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
