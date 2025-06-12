import { cn } from "../../utils/cn";
import type { Event } from "../../types";
import { lighten } from "polished";

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
    <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {weekDays.map((day) => (
          <div
            key={day}
            className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide"
          >
            <span className="hidden sm:inline">{day.substring(0, 3)}</span>
            <span className="sm:hidden">{day.substring(0, 1)}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 divide-x divide-gray-200">
        {days.map((day, index) => (
          <div
            key={index}
            className={cn(
              "min-h-20 sm:min-h-28 lg:min-h-36 p-1 sm:p-2 lg:p-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-200 relative",
              day && isToday(day) ? "bg-red-50 border-red-200" : ""
            )}
            onClick={() => day && onDateClick(new Date(year, month, day))}
          >
            {day && (
              <>
                <div
                  className={cn(
                    "text-xs sm:text-sm font-bold mb-1 sm:mb-2 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full",
                    isToday(day)
                      ? "bg-red-500 text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  )}
                >
                  {day}
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  {getEventsForDate(day)
                    .slice(0, window.innerWidth < 640 ? 2 : 3)
                    .map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="group relative"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        }}
                      >
                        <div
                          className="border-l-4 rounded-r-md shadow-sm hover:shadow-md transition-shadow cursor-pointer p-1 sm:p-2"
                          style={{ backgroundColor: lighten(0.3, event.color) }}
                        >
                          <div
                            className="absolute left-0 top-0 bottom-0 w-1"
                            style={{ backgroundColor: event.color }}
                          />
                          <div className="pl-2">
                            <div className="text-xs font-medium text-gray-900 truncate">
                              {event.time}
                            </div>
                            <div className="text-xs text-gray-600 truncate">
                              {event.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  {getEventsForDate(day).length >
                    (window.innerWidth < 640 ? 2 : 3) && (
                    <div className="text-xs text-gray-500 px-1 sm:px-2 font-medium">
                      +
                      {getEventsForDate(day).length -
                        (window.innerWidth < 640 ? 2 : 3)}{" "}
                      more
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
