# Calendar Application

A modern, interactive calendar application built with React and TypeScript. This app provides a clean interface for managing events with an intuitive month view and comprehensive event management features.

## What This Project Does

This calendar application allows users to:

- **View events in a monthly calendar format** - Clean grid layout showing all days of the month
- **Create new events** - Click on any date to add events with title, time, description, and color coding
- **Edit existing events** - Click on any event to modify its details
- **Delete events** - Remove events you no longer need
- **Navigate between months** - Easy forward/backward navigation through months and years
- **Organize events by color** - Assign different colors to events for better visual organization
- **Quick date navigation** - Mini calendar sidebar for jumping to specific dates
- **Filter by event type** - Click on color labels to focus on specific event categories

## Features

- **Responsive design** that works on different screen sizes
- **Color-coded events** with 6 different color options
- **Today highlighting** to easily identify the current date
- **Event overflow handling** - Shows "+X more" when dates have many events
- **Collapsible sidebar** for more screen space when needed
- **Time-based event display** - Events show both date and time information

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

   ```bash
   git clone [your-repo-url]
   cd calendar-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The calendar should load and be ready to use

### Dependencies

The project uses these main libraries:

- React 18+ with hooks
- Tailwind CSS for styling
- Lucide React for icons
- TypeScript for type safety

## How to Use

1. **Adding Events**: Click on any date in the calendar to open the event creation dialog
2. **Editing Events**: Click on an existing event to modify its details
3. **Navigating**: Use the arrow buttons in the header to move between months
4. **Quick Navigation**: Use the mini calendar in the sidebar to jump to specific dates
5. **Filtering**: Click on color labels in the sidebar to highlight events of that color
6. **Deleting**: Open an event and click the "Delete" button to remove it

## Assumptions and Design Decisions

### Assumptions Made

- **Single-day events only** - Each event is associated with one specific date (no multi-day events)
- **Local storage not used** - Events are stored in memory and reset when the app refreshes
- **No user authentication** - Single-user application without login requirements
- **Standard week format** - Weeks start on Sunday following US calendar convention
- **Modern browser support** - Assumes ES6+ features and modern CSS support

### Key Design Decisions

**Event Storage**: Events are stored in React state rather than localStorage or a database. This was chosen for simplicity and to avoid browser storage restrictions in certain environments. In a production app, you'd want to integrate with a backend API.

**Color System**: Limited to 6 predefined colors to maintain visual consistency and prevent overwhelming color choices. Colors are stored as hex values for easy customization.

**Date Handling**: Uses native JavaScript Date objects for simplicity, though a library like date-fns or moment.js might be better for more complex date operations.

**Single View**: Currently only supports month view. Week view toggle is present but not fully implemented - this could be a future enhancement.

**Responsive Design**: Optimized for desktop use but includes responsive elements. Mobile experience could be further improved with touch-specific interactions.

**No Time Zones**: All times are handled in the local timezone. For a multi-user application, you'd need proper timezone handling.

## Future Enhancements

- Week view implementation
- Event persistence (localStorage or API integration)
- Recurring events
- Event categories and tags
- Import/export functionality
- Mobile app version
- Multi-user support with authentication

## Troubleshooting

If you encounter issues:

- Make sure all dependencies are installed with `npm install`
- Check that you're using a compatible Node.js version
- Clear your browser cache if styling appears broken
- Ensure no other applications are running on port 3000
