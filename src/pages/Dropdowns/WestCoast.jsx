import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaUserTie } from "react-icons/fa";

const pastPresidents = [
  {
    term: "2023-2025",
    name: "Bishnu Khatri",
    image: "src/assets/pastpre/bisnu.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    term: "2021-2023",
    name: "Sriram Thapa",
    image: "src/assets/pastpre/sri.jpg",
    message:
      "Message from Sriram Thapa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    term: "2019-2021",
    name: "Roshan Adhikari",
    image: "src/assets/pastpre/rosan.jpg",
    message:
      "Roshan Adhikari's tenure message. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const WestCoast = () => {
  const [selectedPresident, setSelectedPresident] = useState(pastPresidents[0]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold font-[vollkorn] text-[#0884DC] mb-6">
        Past Presidents
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl   rounded-lg overflow-hidden">
        {/* Left Side: Year Selection */}
        <div className="md:w-1/4 bg-gray-100 p-4 flex  mt-12 flex-col gap-3 ">
          {pastPresidents.map((president) => (
            <button
              key={president.term}
              className={`flex items-center gap-2 px-4 py-3 rounded-full  text-lg font-semibold transition-all duration-300 ${
                selectedPresident.term === president.term
                  ? "bg-[#0884DC] text-white"
                  : "bg-gray-300 text-gray-800  hover:bg-gray-400"
              }`}
              onClick={() => setSelectedPresident(president)}
            >
              <FaUserTie />
              {president.term}
            </button>
          ))}
        </div>

        {/* Right Side: President Details */}
        <div className="md:w-3/4 p-6 flex flex-col mt-10  md:flex-row items-center">
          {/* President Image and Name */}
          {/* <div className="flex flex-col h-[52vh]  w-[400px] items-center w-full border-2 md:w-1/3"> */}
          <div className="flex flex-col h-[52vh] w-[325px] items-center bg-white p-15  ">
            <img
              src={selectedPresident.image}
              alt={selectedPresident.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-[0px_0px_15px_5px_rgba(0,0,0,0.15)] "
            />
            <h2 className="text-xl font-[vollkorn] text-[#3A3B3B] font-bold mt-4">
              {selectedPresident.name}
            </h2>
            <p className="text-gray-600 text-center font-[vollkorn] text-[#8492a1] font-semibold">
              West Coast Region Chair ({selectedPresident.term})
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-3">
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:scale-110" />
              <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:scale-110" />
              <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:scale-110" />
            </div>
          </div>

          {/* President Message */}
          <div className="w-full p-5 md:w-2/3  h-[52vh] mt-6 md:mt-0 md:ml-6 bg-white ">
            <h3 className="text-xl font-bold text-center font-[vollkorn] text-gray-700">
              Message from {selectedPresident.name}
            </h3>
            <p className="text-gray-600 mt-2">{selectedPresident.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WestCoast;
