import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Meeting",
      start: "2025-02-10T10:00:00",
      end: "2025-02-10T11:00:00",
      color: "#3b82f6",
    },
    {
      id: 2,
      date: "30 Mar 2024",
      time: "2:00 pm to 12:00 am",
      title: "NRN Citizenship Interaction",
      image: "src/assets/logo/logo.png",
      status: "Expired",
    },
    {
      id: "3",
      title: "Conference",
      start: "2025-02-12",
      allDay: true,
      color: "#ef4444",
    },
  ]);

  // Handle date click (add new event)
  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: info.dateStr,
        allDay: true,
        color: "#10b981",
      };
      setEvents([...events, newEvent]);
      toast.success("Event Added!");
    }
  };

  // Handle event deletion (double-click)
  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Delete event "${clickInfo.event.title}"?`)) {
      setEvents(events.filter((event) => event.id !== clickInfo.event.id));
      toast.error("Event Deleted!");
    }
  };

  // Handle event drag & drop
  const handleEventDrop = (eventDropInfo) => {
    const updatedEvents = events.map((event) =>
      event.id === eventDropInfo.event.id
        ? {
            ...event,
            start: eventDropInfo.event.startStr,
            end: eventDropInfo.event.endStr,
          }
        : event
    );
    setEvents(updatedEvents);
    toast.info("Event Updated!");
  };

  return (
    <div className="lg:p-4 lg:max-w-4xl lg:mx-auto bg-gray-100 shadow-lg rounded-lg ">
      <ToastContainer position="top-right" autoClose={2000} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        editable={true}
        selectable={true}
        droppable={true}
        eventColor="#6366F1"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
      />
    </div>
  );
};

export default CalendarComponent;
