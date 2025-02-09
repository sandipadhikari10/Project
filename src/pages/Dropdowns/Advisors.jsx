import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const members = [
  {
    name: "Binod Bajgain",
    position: "Advisor",
    image: "src/assets/members/pp.png",
  },
  {
    name: "Junita Subba Mishra",
    position: "Advisor",
    image: "src/assets/members/pp.png",
  },
  {
    name: "Kosh Raj Thapaliya",
    position: "Advisor",
    image: "src/assets/members/pp.png",
  },
  {
    name: "Kul Prasad Dhakal",
    position: "Advisor",
    image: "src/assets/members/pp.png",
  },
  {
    name: "Mira Silwal Adhikari",
    position: "Advisor",
    image: "src/assets/members/pp.png",
  },
  {
    name: "Suresh Hamal",
    position: "Advisor",
    image: "src/assets/members/pp.png",
  },
  {
    name: "Suraj Pakhrin",
    position: "Advisor",
    image: "src/assets/members/pp.png",
  },
];

const Advisors = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-4 md:px-20">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-2xl font-bold font-[vollkorn] mb-12">
          Advisors 2023-2025
        </h1>

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
    </div>
  );
};

export default Advisors;
