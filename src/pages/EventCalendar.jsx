import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const EventCalendar = () => {
  const events = [
    {
      title: "Challenge and Opportunities For New Immigrant IN Bay Area",
      start: "2025-02-16",
      allDay: true,
      color: "#3778C2", // Blue background for event
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-700 mb-6">
          Event Calendar
        </h2>

        {/* Calendar */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            height="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
