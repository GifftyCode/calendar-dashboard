import React, { useState, useMemo } from "react";
import {
  Home,
  Users,
  Settings,
  Calendar,
  BarChart3,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MiniCalendar from "./components/MiniCalendar";
import CalendarView from "./components/CalendarView";
import { generateCalendarData, sampleBookings } from "./utils/calendar";
import { SidebarItem, ViewMode } from "./types";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date(2024, 5, 1)); // June 2024
  const [viewMode, setViewMode] = useState<ViewMode>("Week");

  const calendarData = useMemo(
    () => generateCalendarData(currentDate),
    [currentDate]
  );

  const sidebarItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Calendar, label: "Calendar", active: true },
    { icon: Users, label: "Customers" },
    { icon: BarChart3, label: "Analytics" },
    { icon: CreditCard, label: "Payments" },
    { icon: TrendingUp, label: "Growth", hasSubmenu: true },
    { icon: Settings, label: "Settings" },
  ];

  const handleNavigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          items={sidebarItems}
        />

        <main className="flex-1 flex gap-6 p-6 overflow-hidden">
          <MiniCalendar
            currentDate={currentDate}
            onNavigateMonth={handleNavigateMonth}
            bookings={sampleBookings}
            calendarData={calendarData}
          />

          <CalendarView
            currentDate={currentDate}
            viewMode={viewMode}
            setViewMode={setViewMode}
            onNavigateMonth={handleNavigateMonth}
            bookings={sampleBookings}
          />
        </main>
      </div>
    </div>
  );
};
export default App;
