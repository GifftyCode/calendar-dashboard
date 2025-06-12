import React, { useState } from "react";
import { ChevronRight, Settings, LogOut } from "lucide-react";
import type { PageSidebarProps } from "../types";

const Sidebar: React.FC<PageSidebarProps> = ({ isOpen, items }) => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSubmenu = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const subItems = {
    Calendar: ["Events", "Schedules"],
    "App Components": ["Forms", "Charts"],
    "User Setup": ["Profiles", "Roles"],
    "V.R.S": ["Updates", "Features"],
    "App User Management": ["Users", "Permissions"],
    "Booking & Order Management": ["Bookings", "Orders"],
    "Marketing & Promotions": ["Campaigns", "Ads"],
    "Advanced Analytics": ["Reports", "Dashboards"],
    "Audit Trail": ["Logs", "History"],
    Transactions: ["Payments", "Refunds"],
  };

  return (
    <div
      className={`${
        isOpen ? "w-80" : "w-16"
      } bg-white shadow-xl rounded-lg transition-all duration-300 flex flex-col border border-gray-200`}
    >
      <div className="p-6 ">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="" />
        </div>
      </div>

      <div className="flex-1 py-6">
        <div className="px-6 mb-12">
          {isOpen && (
            <span className="text-xl text-gray-500  tracking-wide">
              General
            </span>
          )}
        </div>

        <nav className="space-y-4 px-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              {isOpen && (
                <div className="flex items-center justify-between py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span
                    className="text-gray-700 font-bold text-lg"
                    onClick={() => item.hasSubmenu && toggleSubmenu(item.label)}
                  >
                    {item.label}
                  </span>
                  {item.hasSubmenu && (
                    <ChevronRight
                      className="w-6 h-6 text-gray-700 font-bold cursor-pointer"
                      onClick={() => toggleSubmenu(item.label)}
                    />
                  )}
                </div>
              )}
              {isOpen && item.hasSubmenu && expandedItems[item.label] && (
                <div className="pl-4 mt-2 space-y-2">
                  {(subItems[item.label as keyof typeof subItems] || []).map(
                    (subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="py-1 pl-2 text-gray-600 hover:bg-gray-100 rounded"
                      >
                        {subItem}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <div className="bg-red-500 rounded-xl p-6 mb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-40 bg-red-300 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>

          <div className="absolute bottom-0 left-0 w-60 h-40 bg-red-300 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-50"></div>
          <span className="text-white text-xl font-medium p-3">Others</span>

          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500 cursor-pointer">
              <Settings className="w-5 h-5 text-white" />

              <span className="text-white">Organization Settings</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500 cursor-pointer">
              <LogOut className="w-5 h-5 text-white" />
              <span className="text-white">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
