import type { CalendarProps } from "../../types";
import MonthView from "./MonthView";
import WeekView from "./WeekView";

const CalendarView = ({
  currentDate,
  events,
  onDateClick,
  onEventClick,
  view,
}: CalendarProps) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {view === "month" ? (
        <MonthView
          currentDate={currentDate}
          events={events}
          onDateClick={onDateClick}
          onEventClick={onEventClick}
        />
      ) : (
        <WeekView
          currentDate={currentDate}
          events={events}
          onDateClick={onDateClick}
          onEventClick={onEventClick}
        />
      )}
    </div>
  );
};

export default CalendarView;
