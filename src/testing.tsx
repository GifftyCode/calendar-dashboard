// import { useState } from "react";

// import { Calendar, Users, Settings } from "lucide-react";
// import CalendarView from "./components/calendar/CalendarView";
// import EventDialog from "./components/calendar/EventDialog";
// import Sidebar from "./components/calendar/Sidebar";
// import MiniSidebar from "./components/calendar/MiniSidebar";
// import DefaultLayout from "./layouts/DefaultLayout";
// import type { Event } from "./types";

// const App = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [events, setEvents] = useState<Event[]>([]);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [view, setView] = useState<"month" | "week">("month");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handleAddEvent = () => setIsDialogOpen(true);
//   const handleDateClick = () => setIsDialogOpen(true);
//   const handleEventClick = () => setIsDialogOpen(true);
//   const handleSaveEvent = (eventData: Omit<Event, "id">) => {
//     const newEvent = { ...eventData, id: Date.now().toString() };
//     setEvents([...events, newEvent]);
//     setIsDialogOpen(false);
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const sidebarItems = [
//     { icon: Calendar, label: "Calendar", hasSubmenu: true },
//     { icon: Users, label: "App Components", hasSubmenu: true },
//     { icon: Settings, label: "User Setup", hasSubmenu: true },
//     { icon: Calendar, label: "V4.5", hasSubmenu: true },
//     { icon: Users, label: "App User Management", hasSubmenu: true },
//     { icon: Settings, label: "Booking & Order Management", hasSubmenu: true },
//     { icon: Calendar, label: "Marketing & Promotions", hasSubmenu: true },
//     { icon: Settings, label: "Advanced Analytics", hasSubmenu: true },
//     { icon: Users, label: "Audit Trail", hasSubmenu: true },
//     { icon: Settings, label: "Transactions", hasSubmenu: true },
//   ];

//   return (
//     <DefaultLayout
//       isSidebarOpen={isSidebarOpen}
//       onToggleSidebar={toggleSidebar}
//       sidebarItems={sidebarItems}
//     >
//       <div className="flex p-4">
//         <Sidebar
//           onAddEvent={handleAddEvent}
//           currentDate={currentDate}
//           onDateChange={setCurrentDate}
//           events={events}
//           onLabelClick={() => {}}
//         />
// <div className="flex-1 ml-4">
//   <div className="flex justify-between mb-4">
//     <h2 className="text-xl"></h2>
//     <div className="flex">
//       <button
//         className={`p-2 mr-4 rounded-2xl ${
//           view === "week" ? "bg-red-400" : ""
//         }`}
//         onClick={() => setView("week")}
//       >
//         Week
//       </button>
//       <button
//         className={`p-2 mr-12   rounded-xl ${
//           view === "month" ? "bg-red-400" : ""
//         }`}
//         onClick={() => setView("month")}
//       >
//         Month
//       </button>
//     </div>
//   </div>

//           <CalendarView
//             currentDate={currentDate}
//             events={events}
//             onDateClick={handleDateClick}
//             onEventClick={handleEventClick}
//             view={view}
//           />
//         </div>

//         <MiniSidebar />
//       </div>

//       <EventDialog
//         isOpen={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         onSave={handleSaveEvent}
//         event={undefined}
//         selectedDate={undefined}
//       />
//     </DefaultLayout>
//   );
// };

// export default App;
