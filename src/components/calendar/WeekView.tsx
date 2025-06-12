import { cn } from "../../utils/cn";
import type { Event } from "../../types";
import { useState, useEffect } from "react";

const WeekView = ({
  currentDate,
  events,
  onDateClick,
  onEventClick,
}: {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: Event) => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const today = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    weekDates.push(date);
  }

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate time slots (show fewer on mobile)
  const timeSlots = [];
  const startHour = isMobile ? 8 : 0; // Start at 8 AM on mobile
  const endHour = isMobile ? 20 : 24; // End at 8 PM on mobile
  const interval = isMobile ? 2 : 1; // 2-hour intervals on mobile

  for (let hour = startHour; hour < endHour; hour += interval) {
    timeSlots.push(hour);
  }

  if (isMobile) {
    // Mobile: Show as a list view
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="space-y-4 p-4">
          {weekDates.map((date, index) => {
            const dateStr = `${date.getFullYear()}-${String(
              date.getMonth() + 1
            ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
            const dayEvents = events.filter((event) => event.date === dateStr);
            const isToday = date.toDateString() === today.toDateString();

            return (
              <div
                key={index}
                className={cn(
                  "border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors",
                  isToday ? "border-red-300 bg-red-50" : "border-gray-200"
                )}
                onClick={() => onDateClick(date)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={cn(
                        "text-sm font-medium",
                        isToday ? "text-red-600" : "text-gray-500"
                      )}
                    >
                      {weekDays[date.getDay()]}
                    </div>
                    <div
                      className={cn(
                        "text-xl font-semibold",
                        isToday ? "text-red-600" : "text-gray-900"
                      )}
                    >
                      {date.getDate()}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {dayEvents.length} event{dayEvents.length !== 1 ? "s" : ""}
                  </div>
                </div>

                {dayEvents.length > 0 && (
                  <div className="space-y-2">
                    {dayEvents.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-white"
                        style={{ backgroundColor: `${event.color}20` }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: event.color }}
                        />
                        <div className="flex-1">
                          <div className="font-medium text-sm text-gray-900">
                            {event.title}
                          </div>
                          <div className="text-xs text-gray-600">
                            {event.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop/Tablet: Show as traditional week grid
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-8 border-b">
        <div className="p-2 sm:p-4 text-xs sm:text-sm font-medium text-gray-500">
          Time
        </div>
        {weekDates.map((date, index) => (
          <div key={index} className="p-2 sm:p-4 text-center border-l">
            <div className="text-xs sm:text-sm font-medium">
              {weekDays[date.getDay()]}
            </div>
            <div
              className={cn(
                "text-sm sm:text-lg font-semibold",
                date.toDateString() === today.toDateString()
                  ? "text-red-600"
                  : "text-gray-900"
              )}
            >
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>

      {/* Time Grid */}

      {/* Time Grid */}

      <div className="grid grid-cols-8 divide-x divide-gray-200">
        <div className="space-y-4 p-4">
          {Array.from({ length: 24 }, (_, hour) => (
            <div
              key={hour}
              className="text-sm text-gray-500 h-16 flex items-start"
            >
              {hour === 0
                ? "12 AM"
                : hour < 12
                ? `${hour} AM`
                : hour === 12
                ? "12 PM"
                : `${hour - 12} PM`}
            </div>
          ))}
        </div>

        {weekDates.map((date, dayIndex) => {
          const dateStr = `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
          const dayEvents = events.filter((event) => event.date === dateStr);

          return (
            <div
              key={dayIndex}
              className="space-y-4 p-2 cursor-pointer hover:bg-gray-50"
              onClick={() => onDateClick(date)}
            >
              {Array.from({ length: 24 }, (_, hour) => (
                <div
                  key={hour}
                  className="h-16 border-b border-gray-100 relative"
                >
                  {dayEvents
                    .filter(
                      (event) => parseInt(event.time.split(":")[0]) === hour
                    )
                    .map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="absolute left-1 right-1 top-1 p-1 rounded text-xs text-white cursor-pointer hover:opacity-80"
                        style={{ backgroundColor: event.color }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        }}
                      >
                        {event.title}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekView;
