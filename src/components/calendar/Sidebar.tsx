import Button from "../ui/Button";
import MiniCalendar from "./MiniCalendar";
import { Plus } from "lucide-react";
import type { Event } from "../../types";

const Sidebar = ({
  onAddEvent,
  currentDate,
  onDateChange,
  events,
  onLabelClick,
}: {
  onAddEvent: () => void;
  currentDate: Date;
  onDateChange: (date: Date) => void;
  events: Event[];
  onLabelClick: (color: string) => void;
}) => {
  const formatSelectedDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const getEventStats = () => {
    const stats = {
      "#ef4444": 0,
      "#f97316": 0,
      "#10b981": 0,
      "#6b7280": 0,
      "#8b5cf6": 0,
    };

    events.forEach((event) => {
      if (Object.prototype.hasOwnProperty.call(stats, event.color)) {
        stats[event.color as keyof typeof stats]++;
      }
    });

    return [
      {
        label: "Active",
        sublabel: "Bookings",
        color: "#ef4444",
        count: stats["#ef4444"],
      },
      {
        label: "Pending",
        sublabel: "Bookings",
        color: "#f97316",
        count: stats["#f97316"],
      },
      {
        label: "Completed",
        sublabel: "Bookings",
        color: "#10b981",
        count: stats["#10b981"],
      },
      {
        label: "Rescheduled",
        sublabel: "Bookings",
        color: "#6b7280",
        count: stats["#6b7280"],
      },
      {
        label: "Cancelled",
        sublabel: "Bookings",
        color: "#8b5cf6",
        count: stats["#8b5cf6"],
      },
    ];
  };

  return (
    <div className="w-64 sm:w-72 lg:w-64 h-screen bg-black text-white p-3 sm:p-4 lg:p-6 flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <div className="flex space-x-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
        </div>
        <Button
          onClick={onAddEvent}
          className="p-1.5 sm:p-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5 font-bold" />
        </Button>
      </div>

      <div className="mb-4 lg:mb-6">
        <MiniCalendar
          currentDate={currentDate}
          onDateChange={onDateChange}
          events={events.map((event) => ({
            ...event,
            date:
              typeof event.date === "string"
                ? new Date(event.date)
                : event.date,
          }))}
        />
      </div>

      <div className="hidden lg:block h-32 xl:h-64"></div>

      <div className="space-y-3 lg:space-y-4 mb-4">
        <div className="text-red-400 text-lg sm:text-xl font-medium">
          {formatSelectedDate(currentDate)}
        </div>

        <div className="text-gray-600 text-sm sm:text-base">
          7:00am - 8:00am
        </div>

        <div className="space-y-2 lg:space-y-3">
          {getEventStats().map((stat, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:bg-gray-800 p-1.5 sm:p-2 rounded transition-colors"
              onClick={() => onLabelClick(stat.color)}
            >
              <span
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: stat.color }}
              ></span>
              <span className="text-white text-xs sm:text-sm truncate">
                {stat.count} {stat.label} {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
