import { cn } from "../../utils/cn";
import type { Event } from "../../types";

interface WeekViewProps {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: Event) => void;
}

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

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="grid grid-cols-8 border-b">
        <div className="p-4 text-sm font-medium text-gray-500">Time</div>
        {weekDates.map((date, index) => (
          <div key={index} className="p-4 text-center border-l">
            <div className="text-sm font-medium">{weekDays[date.getDay()]}</div>
            <div
              className={cn(
                "text-lg font-semibold",
                date.toDateString() === today.toDateString()
                  ? "text-blue-600"
                  : "text-gray-900"
              )}
            >
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>

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
