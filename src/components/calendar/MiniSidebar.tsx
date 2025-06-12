import React from "react";

const MiniSidebar: React.FC = () => {
  const bookingStatuses = [
    {
      label: "Active",
      sublabel: "Bookings",
      color: "bg-red-500",
      textColor: "text-red-500",
    },
    {
      label: "Pending",
      sublabel: "Bookings",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
    },
    {
      label: "Completed",
      sublabel: "Bookings",
      color: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      label: "Rescheduled",
      sublabel: "Bookings",
      color: "bg-gray-500",
      textColor: "text-gray-500",
    },
    {
      label: "Cancelled",
      sublabel: "Bookings",
      color: "bg-orange-500",
      textColor: "text-orange-500",
    },
  ];

  return (
    <div className="w-32 bg-white  p-2 pt-64 space-y-8">
      {bookingStatuses.map((status, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className={`w-4 h-4 ${status.color} mt-1 flex-shrink-0`}></div>
          <div className="flex flex-col">
            <span
              className={`font-medium text-lg ${status.textColor} leading-5`}
            >
              {status.label}
            </span>
            <span className={`${status.textColor} text-lg leading-5`}>
              {status.sublabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniSidebar;
