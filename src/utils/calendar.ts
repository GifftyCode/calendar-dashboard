import { CalendarData, BookingData } from "../types";

export const monthNames = [
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

export const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const shortDayNames = ["S", "M", "T", "W", "T", "F", "S"];

export const timeSlots = [
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
];

export const generateCalendarData = (currentDate: Date): CalendarData => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date(year, month, 23);

  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const dates: Date[] = [];
  const current = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return { dates, today, month, year };
};

export const formatDateKey = (date: Date): string => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};

export const getWeekDates = (today: Date): Date[] => {
  const startOfWeek = new Date(today);
  const day = startOfWeek.getDay();
  startOfWeek.setDate(startOfWeek.getDate() - day);

  const weekDates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(date.getDate() + i);
    weekDates.push(date);
  }
  return weekDates;
};

// Sample booking data
export const sampleBookings: BookingData = {
  "2024-06-24": [
    { time: "7:00 AM", type: "Booking Made", color: "red" },
    { time: "9:00 AM", type: "Booking Made", color: "red" },
    { time: "10:00 AM", type: "Booking Made", color: "red" },
    { time: "11:00 AM", type: "Booking Made", color: "red" },
    { time: "12:30 PM", type: "Booking Made", color: "red" },
    { time: "1:30 PM", type: "Booking Made", color: "red" },
    { time: "2:30 PM", type: "Booking Made", color: "red" },
    { time: "4:20 PM", type: "Booking Made", color: "red" },
    { time: "5:00 PM", type: "Booking Made", color: "red" },
    { time: "7:00 PM", type: "Booking Made", color: "red" },
    { time: "8:30 PM", type: "Booking Made", color: "red" },
  ],
  "2024-06-25": [
    { time: "8:00 AM", type: "Booking Made", color: "red" },
    { time: "10:00 AM", type: "Booking Made", color: "red" },
    { time: "11:30 AM", type: "Booking Made", color: "red" },
    { time: "12:30 PM", type: "Booking Made", color: "red" },
    { time: "3:00 PM", type: "Booking Made", color: "red" },
    { time: "6:00 PM", type: "Booking Made", color: "red" },
  ],
  "2024-06-26": [
    { time: "7:15 AM", type: "Booking Made", color: "red" },
    { time: "9:30 AM", type: "Booking Made", color: "red" },
    { time: "4:00 PM", type: "Booking Made", color: "red" },
    { time: "7:00 PM", type: "Booking Made", color: "red" },
    { time: "9:00 PM", type: "Booking Made", color: "red" },
  ],
  "2024-06-27": [
    { time: "8:30 AM", type: "Booking Made", color: "red" },
    { time: "10:05 AM", type: "Booking Made", color: "red" },
    { time: "12:00 PM", type: "Booking Made", color: "red" },
    { time: "7:00 PM", type: "Booking Made", color: "red" },
  ],
};
