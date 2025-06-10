// types/index.ts
export interface Booking {
  time: string;
  type: string;
  color: string;
}

export interface BookingData {
  [date: string]: Booking[];
}

export interface CalendarData {
  dates: Date[];
  today: Date;
  month: number;
  year: number;
}

export interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

export type ViewMode = "Week" | "Month";

export interface WeekViewProps {
  currentDate: Date;
  bookings: BookingData;
  timeSlots: string[];
}

export interface MiniCalendarProps {
  currentDate: Date;
  onNavigateMonth: (direction: number) => void;
  bookings: BookingData;
  calendarData: CalendarData;
}

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  items: SidebarItem[];
}

export interface HeaderProps {
  onToggleSidebar: () => void;
}
