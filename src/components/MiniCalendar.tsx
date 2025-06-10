// components/MiniCalendar.tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MiniCalendarProps } from "../types";
import { monthNames, shortDayNames, formatDateKey } from "../utils/calendar";

const MiniCalendar: React.FC<MiniCalendarProps> = ({
  currentDate,
  onNavigateMonth,
  bookings,
  calendarData,
}) => {
  return (
    <div className="w-80">
      <div className="bg-gray-900 text-white rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigateMonth(-1)}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">
              {monthNames[calendarData.month]} {calendarData.year}
            </span>
          </div>
          <button onClick={() => onNavigateMonth(1)}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 mb-2">
          {shortDayNames.map((day) => (
            <div key={day} className="text-center py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarData.dates.map((date, index) => {
            const isCurrentMonth = date.getMonth() === calendarData.month;
            const isToday =
              date.toDateString() === calendarData.today.toDateString();
            const hasBookings = bookings[formatDateKey(date)];

            return (
              <button
                key={index}
                className={`
                  w-8 h-8 text-sm rounded flex items-center justify-center relative
                  ${isCurrentMonth ? "text-white" : "text-gray-600"}
                  ${isToday ? "bg-red-500" : "hover:bg-gray-800"}
                  ${hasBookings ? "ring-1 ring-red-400" : ""}
                `}
              >
                {date.getDate()}
                {hasBookings && (
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-red-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm">Active Bookings</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-sm">Pending Bookings</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm">Completed Bookings</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-gray-400 rounded"></div>
          <span className="text-sm">Rescheduled Bookings</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
          <span className="text-sm">Cancelled Bookings</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
