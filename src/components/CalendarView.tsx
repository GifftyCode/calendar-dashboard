// components/CalendarView.tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ViewMode, BookingData } from "../types";
import WeekView from "./WeekView";
import { timeSlots } from "../utils/calendar";

interface CalendarViewProps {
  currentDate: Date;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onNavigateMonth: (direction: number) => void;
  bookings: BookingData;
}

const CalendarView: React.FC<CalendarViewProps> = ({
  currentDate,
  viewMode,
  setViewMode,
  onNavigateMonth,
  bookings,
}) => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigateMonth(-1)}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => onNavigateMonth(1)}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("Week")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              viewMode === "Week" ? "bg-red-500 text-white" : "text-gray-600"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setViewMode("Month")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              viewMode === "Month" ? "bg-red-500 text-white" : "text-gray-600"
            }`}
          >
            Month
          </button>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="h-full">
        {viewMode === "Week" && (
          <WeekView
            currentDate={currentDate}
            bookings={bookings}
            timeSlots={timeSlots}
          />
        )}
        {viewMode === "Month" && (
          <div className="flex items-center justify-center h-64 text-gray-500">
            Month view implementation coming soon...
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
