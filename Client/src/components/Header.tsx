// src/components/Header.tsx
import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-end h-16 px-8 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-6">
        {/* User Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://placehold.co/40x40/E2E8F0/4A5568?text=LM"
            alt="User avatar"
          />
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">Liam Michael</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <ChevronDown className="h-5 w-5 text-gray-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
