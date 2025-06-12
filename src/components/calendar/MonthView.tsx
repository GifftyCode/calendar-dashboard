import { cn } from "../../utils/cn";
import type { Event } from "../../types";

const MonthView = ({
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
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const days = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return events.filter((event) => event.date === dateStr);
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="bg-white rounded-xl  overflow-hidden">
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {weekDays.map((day) => (
          <div
            key={day}
            className="p-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wide"
          >
            {day.substring(0, 3)}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 divide-x divide-gray-200">
        {days.map((day, index) => (
          <div
            key={index}
            className={cn(
              "min-h-36 p-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-200 relative",
              day && isToday(day) ? "bg-red-50 border-red-200" : ""
            )}
            onClick={() => day && onDateClick(new Date(year, month, day))}
          >
            {day && (
              <>
                <div
                  className={cn(
                    "text-sm font-bold mb-2 flex items-center justify-center w-8 h-8 rounded-full",
                    isToday(day)
                      ? "bg-red-500 text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  )}
                >
                  {day}
                </div>
                <div className="space-y-1">
                  {getEventsForDate(day)
                    .slice(0, 3)
                    .map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="px-2 py-1 rounded-md text-xs text-white cursor-pointer hover:opacity-90 transition-opacity font-medium shadow-sm"
                        style={{ backgroundColor: event.color }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        }}
                      >
                        {event.title}
                      </div>
                    ))}
                  {getEventsForDate(day).length > 3 && (
                    <div className="text-xs text-gray-500 px-2 font-medium">
                      +{getEventsForDate(day).length - 3} more
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
