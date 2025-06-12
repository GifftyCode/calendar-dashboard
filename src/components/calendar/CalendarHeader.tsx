import Button from "../ui/Button";

const CalendarHeader = ({
  view,
  onViewChange,
}: {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  view: "month" | "week";
  onViewChange: (view: "month" | "week") => void;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 lg:p-6 bg-white shadow-sm border-b">
      <div className="flex items-center space-x-2 sm:space-x-4 mb-3 sm:mb-0">
        <div className="flex items-center space-x-2"></div>
      </div>

      <div className="flex space-x-1 sm:space-x-2 lg:space-x-3 w-full sm:w-auto">
        <Button
          variant={view === "month" ? "default" : "outline"}
          onClick={() => onViewChange("month")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 font-medium text-xs sm:text-sm ${
            view === "month"
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          Month
        </Button>
        <Button
          variant={view === "week" ? "default" : "outline"}
          onClick={() => onViewChange("week")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 font-medium text-xs sm:text-sm ${
            view === "week"
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          Week
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeader;
