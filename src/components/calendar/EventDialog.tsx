import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";
import Input from "../ui/input";
import Dialog from "../ui/Dialog";
import DialogHeader from "../ui/DialogHeader";
import DialogTitle from "../ui/DialogTitle";
import DialogContent from "../ui/DialogContent";
import { X, Trash2 } from "lucide-react";
import type { EventDialogProps } from "../../types";

type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  description?: string;
  location?: string;
  attendees?: string[];
  color: string;
};

const EventDialog = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  event,
  selectedDate,
}: EventDialogProps) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    location: "",
    attendees: [] as string[],
    color: "#ef4444",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title,
        date: event.date,
        time: event.time,
        description: event.description || "",
        location: event.location || "",
        attendees: event.attendees || [],
        color: event.color,
      });
    } else if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        date: selectedDate.toISOString().split("T")[0],
      }));
    }
  }, [event, selectedDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventId = event?.id || crypto.randomUUID();
    onSave({ ...formData, id: eventId } as CalendarEvent);
    onClose();
  };

  const colors = [
    { name: "Red", value: "#ef4444" },
    { name: "Blue", value: "#f97316" },
    { name: "Green", value: "#10b981" },
    { name: "Purple", value: "#6b7280" },
    { name: "Orange", value: "#8b5cf6" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>{event ? "Edit Event" : "Add New Event"}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Event Title
            </label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, date: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <Input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, time: e.target.value }))
                }
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Enter event description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Input
              value={formData.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="Enter location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  className={cn(
                    "w-8 h-8 rounded-full border-2",
                    formData.color === color.value
                      ? "border-gray-800"
                      : "border-gray-300"
                  )}
                  style={{ backgroundColor: color.value }}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, color: color.value }))
                  }
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <div>
              {event && onDelete && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    onDelete(event.id);
                    onClose();
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">{event ? "Update" : "Create"} Event</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;
