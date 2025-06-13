import React from "react";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description?: string;
  location?: string;
  attendees?: string[];
  color: string;
}

export interface CalendarProps {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: Event) => void;
  view: "month" | "week";
}

export interface ScheduledEvent {
  id: string;
  title: string;
  date: string | Date;
  color?: string;
  description?: string;
  time?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "ghost" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

export type EventDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: Event) => void;
  onDelete?: (eventId: string) => void;
  event?: Event;
  selectedDate?: Date;
};

export interface SidebarProps {
  onAddEvent: () => void;
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onLabelClick: (color: string) => void;
  events: Event[];
  view?: "month" | "week";
  onViewChange?: (view: "month" | "week") => void;
  scheduledEvents?: {
    id: string;
    title: string;
    date: Date;
    color: string;
  }[];
}

export interface PageSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  items: { icon: React.ElementType; label: string; hasSubmenu?: boolean }[];
}

export interface DefaultLayoutProps {
  children: React.ReactNode;
  sidebarItems: {
    icon: React.ElementType;
    label: string;
    hasSubmenu?: boolean;
  }[];
}

export interface MonthViewProps {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: Event) => void;
}

export interface WeekViewProps {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: Event) => void;
}

export interface CalendarHeaderProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  view: "month" | "week";
  onViewChange: (view: "month" | "week") => void;
}
