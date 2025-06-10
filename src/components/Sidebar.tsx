// components/Sidebar.tsx
import React from "react";
import { ChevronRight, Settings, LogOut } from "lucide-react";
import { SidebarProps } from "../types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, items }) => {
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-white shadow-lg transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">Q</span>
          </div>
          {isOpen && (
            <span className="text-xl font-semibold text-gray-800">ore</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6">
        <div className="px-4 mb-4">
          {isOpen && (
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              General
            </span>
          )}
        </div>

        <nav className="space-y-1 px-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              {isOpen && (
                <>
                  <span className="flex-1 text-gray-700">{item.label}</span>
                  {item.hasSubmenu && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="p-4 border-t">
        <div className="bg-red-500 rounded-lg p-3 mb-4">
          {isOpen && (
            <span className="text-white text-sm font-medium">Others</span>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Settings className="w-5 h-5 text-gray-600" />
            {isOpen && (
              <span className="text-gray-700">Organization Settings</span>
            )}
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <LogOut className="w-5 h-5 text-gray-600" />
            {isOpen && <span className="text-gray-700">Logout</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
