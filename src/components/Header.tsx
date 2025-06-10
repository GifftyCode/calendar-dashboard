// components/Header.tsx
import React from "react";
import { Bell, ChevronRight, Menu } from "lucide-react";
import { HeaderProps } from "../types";

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Calendar</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-sm text-red-500 font-medium">
              Visit Website
            </span>
          </button>

          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-red-500">C.O.</span>
            <span className="text-red-500">D.A</span>
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <div className="font-medium">Deji</div>
              <div className="text-gray-500 text-xs">Vendor manager</div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
