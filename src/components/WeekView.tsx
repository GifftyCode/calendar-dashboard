// components/WeekView.tsx
import React from "react";
import { WeekViewProps } from "../types";
import { dayNames, getWeekDates, formatDateKey } from "../utils/calendar";

const WeekView: React.FC<WeekViewProps> = ({
  currentDate,
  bookings,
  timeSlots,
}) => {
  const weekDates = getWeekDates(currentDate);
  const today = new Date(2024, 5, 23); // Keep the same reference date

  return (
    <div className="flex h-full">
      {/* Time slots */}
      <div className="w-16 border-r">
        <div className="h-12"></div> {/* Header spacer */}
        {timeSlots.map((time) => (
          <div
            key={time}
            className="h-16 border-b border-gray-100 flex items-start justify-end pr-2 pt-1"
          >
            <span className="text-xs text-gray-500">{time}</span>
          </div>
        ))}
      </div>

      {/* Days columns */}
      <div className="flex-1 overflow-x-auto">
        <div className="flex min-w-full">
          {weekDates.map((date, dayIndex) => {
            const dayBookings = bookings[formatDateKey(date)] || [];
            const isToday = date.toDateString() === today.toDateString();

            return (
              <div
                key={dayIndex}
                className="flex-1 border-r border-gray-100 min-w-0"
              >
                {/* Day header */}
                <div
                  className={`h-12 border-b border-gray-200 flex flex-col items-center justify-center ${
                    isToday ? "bg-red-50" : ""
                  }`}
                >
                  <div className="text-xs text-gray-500 uppercase">
                    {dayNames[date.getDay()]}
                  </div>
                  <div
                    className={`text-lg font-medium ${
                      isToday ? "text-red-500" : "text-gray-900"
                    }`}
                  >
                    {date.getDate()}
                  </div>
                </div>

                {/* Time slots for this day */}
                <div className="relative">
                  {timeSlots.map((time, timeIndex) => (
                    <div
                      key={timeIndex}
                      className="h-16 border-b border-gray-50 relative"
                    >
                      {/* Render bookings for this time slot */}
                      {dayBookings
                        .filter((booking) => {
                          const bookingHour = parseInt(booking.time);
                          const slotHour = parseInt(time);
                          return Math.abs(bookingHour - slotHour) <= 1;
                        })
                        .map((booking, bookingIndex) => (
                          <div
                            key={bookingIndex}
                            className="absolute left-1 right-1 bg-red-100 border-l-2 border-red-500 rounded px-2 py-1 text-xs"
                            style={{
                              top: `${bookingIndex * 20 + 4}px`,
                              height: "16px",
                            }}
                          >
                            <div className="text-red-700 font-medium truncate">
                              {booking.time} {booking.type}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeekView;
