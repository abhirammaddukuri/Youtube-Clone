import React from 'react';
import { Menu, Search, Video, Bell, User, Mic } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] z-50 flex justify-between items-center px-4 h-14">
      <div className="flex items-center">
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <Menu className="h-6 w-6 text-white" />
        </button>
        <div className="flex items-center ml-4">
          <span className="text-white text-xl font-semibold">YouTube</span>
        </div>
      </div>

      <div className="flex-1 max-w-[720px] mx-4">
        <div className="flex">
          <div className="flex-1 flex items-center">
            <div className="flex-1 flex">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 bg-[#121212] border border-[#303030] text-white rounded-l-full focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#272727]">
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
            <button className="p-2 ml-2 hover:bg-[#272727] rounded-full">
              <Mic className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <Video className="h-6 w-6 text-white" />
        </button>
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <Bell className="h-6 w-6 text-white" />
        </button>
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <User className="h-6 w-6 text-white" />
        </button>
      </div>
    </header>
  );
}