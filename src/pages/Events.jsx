import React from "react";
import { Calendar, Clock } from "lucide-react";
import EventCalendar from "./EventCalendar";

const pastEvents = [
  {
    id: 1,
    date: "16 Feb 2025",
    time: "All day",
    title: "NRN Citizenship Interaction",
    image: "src/assets/logo/logo.png",
    status: "UPCOMING",
  },
  {
    id: 2,
    date: "30 Mar 2024",
    time: "2:00 pm to 12:00 am",
    title: "NRN Citizenship Interaction",
    image: "src/assets/logo/logo.png",
    status: "Expired",
  },
];

const PastEvents = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold font-[vollkorn] text-gray-700 mb-6  md:text-left">
          All Events
        </h2>

        {/* Event Card */}
        <div className="bg-white shadow-lg  rounded-lg p-4 md:p-6 flex flex-row md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Left - Date Section */}
          <div className="flex flex-col items-center pr-4 md:pr-6">
            <span className="text-2xl font-bold text-gray-800">16</span>
            <span className="text-lg font-semibold text-gray-600">FEB</span>
            <span className="text-sm text-gray-500">2025</span>
          </div>

          {/* Middle - Image */}
          <div className="flex-shrink-0">
            <img
              src={pastEvents[0].image}
              alt={pastEvents[0].title}
              className="w-22 h-22 md:w-32 sm:mr-2 md:h-32 rounded-full object-cover shadow-md"
            />
          </div>

          {/* Right - Event Details */}
          <div className="flex-1  ml-5">
            <div className="flex items-center space-x-2  text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{pastEvents[0].time}</span>
            </div>

            {/* Status Badge */}
            <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
              {pastEvents[0].status}
            </span>

            {/* Event Title */}
            <h3 className="text-lg md:text-xl font-medium text-gray-500 mt-2">
              {pastEvents[0].title}
            </h3>
          </div>
        </div>

        {/* More Events Button */}
        <div className="mt-6  md:text-left">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition">
            More Events
          </button>
        </div>
      </div>

      {/* Event Calendar */}
      <div className="mt-8">
        <EventCalendar />
      </div>
    </section>
  );
};

export default PastEvents;
