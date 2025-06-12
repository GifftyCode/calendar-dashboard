import Button from "../../components/ui/Button";

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
    <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center space-x-6"></div>

      <div className="flex space-x-3">
        <Button
          variant={view === "month" ? "default" : "outline"}
          onClick={() => onViewChange("month")}
          className={`px-6 py-2 font-medium text-sm ${
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
          className={`px-6 py-2 font-medium text-sm ${
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
