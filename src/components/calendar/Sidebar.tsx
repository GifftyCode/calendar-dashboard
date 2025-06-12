import Button from "../../components/ui/Button";
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
  // Define the Event type with a color property

  const formatSelectedDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Calculate event statistics
  const getEventStats = () => {
    const stats = {
      "#ef4444": 0, // Red - Active
      "#f97316": 0, // Orange - Pending
      "#10b981": 0, // Green - Completed
      "#6b7280": 0, // Gray - Rescheduled
      "#8b5cf6": 0, // Purple - Cancelled
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
    <div className="w-64 h-screen bg-black text-white p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <Button
          onClick={onAddEvent}
          className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          <Plus className="h-5 w-5 font-bold" />
        </Button>
      </div>

      <div className="mb-6">
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

      <div className="h-64"></div>

      <div className="space-y-4 mb-4">
        <div className="text-red-400 text-xl font-medium">
          {formatSelectedDate(currentDate)}
        </div>

        <div className="text-gray-300 text-base">7:00am - 8:00am</div>

        <div className="space-y-3">
          {getEventStats().map((stat, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-2 rounded"
              onClick={() => onLabelClick(stat.color)}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: stat.color }}
              ></span>
              <span className="text-white text-sm">
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
