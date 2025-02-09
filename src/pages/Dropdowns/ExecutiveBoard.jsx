import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TimeLine from "@/components/TimeLine";

const members = [
  {
    name: "Hari Prasad Ojha",
    position: "President",
    image: "src/assets/members/hari.jpg",
  },
  {
    name: "Basu Chhetri",
    position: "Vice President",
    image: "src/assets/members/Basu.jpg",
  },
  {
    name: "Gita Bajgain",
    position: "Vice President (W)",
    image: "src/assets/members/gita.jpg",
  },
  {
    name: "Kopila Adhikari",
    position: "Secretary",
    image: "src/assets/members/kopila.jpg",
  },
  {
    name: "Sushila Khanal",
    position: "Secretary (W)",
    image: "src/assets/members/Sushila.jpg",
  },
  {
    name: "Tejendra Baral",
    position: "Treasurer",
    image: "src/assets/members/Tejendra.jpg",
  },
  {
    name: "Prasmita Sharma",
    position: "Youth Cordinator",
    image: "src/assets/members/Prasmita.jpg",
  },
  {
    name: "Prasmita Sharma",
    position: "Youth Cordinator",
    image: "src/assets/members/Prasmita.jpg",
  },
  {
    name: "Prasmita Sharma",
    position: "Youth Cordinator",
    image: "src/assets/members/Prasmita.jpg",
  },
];

const ExecutiveBoard = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-4 md:px-20">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-2xl font-bold font-[vollkorn] mb-12">
          Executive Board 2023-2025
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-x-2 gap-y-10 justify-items-center ml-26 mr-26">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white px-10 py-20   flex flex-col items-center h-[52vh]  w-[360px]"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover shadow-[0px_0px_15px_5px_rgba(0,0,0,0.15)]"
              />

              {/* Name & Position */}
              <h2 className="text-xl  font-bold mt-3 font-[vollkorn] text-[#7A7A7A] ">
                {member.name}
              </h2>
              <p className="text-base mt-2 font-[vollkorn] text-[#A29D9D] font-bold ">
                {member.position}
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-2 mt-4 text-xl ">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <AiFillTwitterCircle />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <TimeLine />
      </div>
    </div>
  );
};

export default ExecutiveBoard;
