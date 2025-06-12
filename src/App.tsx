import { useState } from "react";
import { Calendar, Users, Settings } from "lucide-react";
import Sidebar from "./components/calendar/Sidebar";
import MiniSidebar from "./components/calendar/MiniSidebar";
import DefaultLayout from "./layouts/DefaultLayout";
import type { Event } from "./types";
import EventDialog from "./components/calendar/EventDialog";
import CalendarHeader from "./components/calendar/CalendarHeader";
import MonthView from "./components/calendar/MonthView";
import WeekView from "./components/calendar/WeekView";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week">("month");
  const [events, setEvents] = useState<Event[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const sidebarItems = [
    { icon: Calendar, label: "Home", hasSubmenu: true },
    { icon: Users, label: "App Components", hasSubmenu: true },
    { icon: Settings, label: "User Setup", hasSubmenu: true },
    { icon: Calendar, label: "V.R.S", hasSubmenu: true },
    { icon: Users, label: "App User Management", hasSubmenu: true },
    { icon: Settings, label: "Booking & Order Management", hasSubmenu: true },
    { icon: Calendar, label: "Marketing & Promotions", hasSubmenu: true },
    { icon: Settings, label: "Advanced Analytics", hasSubmenu: true },
    { icon: Users, label: "Audit Trail", hasSubmenu: true },
    { icon: Settings, label: "Transactions", hasSubmenu: true },
  ];

  const handleAddEvent = () => {
    setSelectedEvent(undefined);
    setSelectedDate(currentDate);
    setIsDialogOpen(true);
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setSelectedDate(undefined);
    setIsDialogOpen(true);
  };

  const handleDateClick = (date: Date) => {
    setCurrentDate(date);
    setSelectedDate(date);
    setSelectedEvent(undefined);
    setIsDialogOpen(true);
  };

  const handleSaveEvent = (eventData: Omit<Event, "id">) => {
    if (selectedEvent) {
      setEvents((prev: Event[]) =>
        prev.map((event: Event) =>
          event.id === (selectedEvent as Event).id
            ? { ...eventData, id: (selectedEvent as Event).id }
            : event
        )
      );
    } else {
      const newEvent: Event = {
        ...eventData,
        id: generateId(),
      };
      setEvents((prev) => [...prev, newEvent]);
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  const handleLabelClick = (color: string) => {
    const filteredEvents = events.filter((event) => event.color === color);
    if (filteredEvents.length > 0) {
      const firstEvent = filteredEvents[0];
      const eventDate = new Date(firstEvent.date);
      setCurrentDate(eventDate);
    }
  };

  return (
    <DefaultLayout sidebarItems={sidebarItems}>
      <div className="flex h-screen bg-gray-50">
        <Sidebar
          onAddEvent={handleAddEvent}
          currentDate={currentDate}
          onDateChange={setCurrentDate}
          events={events}
          onLabelClick={handleLabelClick}
        />

        <div className="flex-1 flex flex-col">
          <CalendarHeader
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            view={view}
            onViewChange={setView}
          />

          <div className="flex-1 p-6 overflow-auto">
            {view === "month" ? (
              <MonthView
                currentDate={currentDate}
                events={events}
                onDateClick={handleDateClick}
                onEventClick={handleEventClick}
              />
            ) : (
              <WeekView
                currentDate={currentDate}
                events={events}
                onDateClick={handleDateClick}
                onEventClick={handleEventClick}
              />
            )}
          </div>
        </div>

        <MiniSidebar />
      </div>

      <EventDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
        event={selectedEvent}
        selectedDate={selectedDate}
      />
    </DefaultLayout>
  );
};

export default App;
