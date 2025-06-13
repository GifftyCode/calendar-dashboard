import { cn } from "../../utils/cn";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MiniCalendarProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  events?: { date: Date; color: string; title?: string; id?: string }[];
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MiniCalendar = ({
  currentDate,
  onDateChange,
  events = [],
}: MiniCalendarProps) => {
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const miniCalendarDays = [];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    miniCalendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    miniCalendarDays.push(day);
  }

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const hasEvent = (day: number) => {
    return events.some((event) => {
      return (
        event.date.getDate() === day &&
        event.date.getMonth() === month &&
        event.date.getFullYear() === year
      );
    });
  };

  return (
    <div className="space-y-4 ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">
          {monthNames[month]} <span className="text-red-500">{year}</span>
        </h3>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-700 text-white"
            onClick={() => onDateChange(new Date(year, month - 1, 1))}
          >
            <ChevronLeft className="h-5 w-5 font-bold" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-700 text-white"
            onClick={() => onDateChange(new Date(year, month + 1, 1))}
          >
            <ChevronRight className="h-5 w-5 font-bold" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="text-xs font-medium text-gray-400 py-1">
            {day}
          </div>
        ))}
        {miniCalendarDays.map((day, index) => {
          const hasEventOnDay = day && hasEvent(day);

          return (
            <button
              key={index}
              className={cn(
                "w-8 h-8 text-sm rounded-full hover:bg-gray-700 transition-colors relative",
                day && isToday(day)
                  ? "bg-red-500 text-white"
                  : day
                  ? "text-gray-200"
                  : "text-transparent"
              )}
              onClick={() => day && onDateChange(new Date(year, month, day))}
            >
              {day}
              {hasEventOnDay && (
                <div className="absolute bottom-1 left-1 flex space-x-0.5">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                  <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MiniCalendar;
