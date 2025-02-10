import React, { useState } from "react";
import { motion } from "framer-motion";
import executiveData from "./TimeLineData";

const TimeLine = () => {
  const [selectedYear, setSelectedYear] = useState("2023-2025");
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-20  p-5 mb-20">
        {/* Timeline Navigation with Framer Motion */}
        <div className="relative flex justify-center items-center  space-x-40 mb-15">
          <div className="absolute top-9 w-100% h-2  bg-gray-300"></div>
          {Object.keys(executiveData).map((year) => (
            <div key={year} className="relative">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className={`relative text-lg font-semibold cursor-pointer transition ${
                  selectedYear === year ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </motion.button>
              {selectedYear === year && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 h-3 w-3 bg-blue-500 rounded-full font-[oswald]"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Table */}
        <h2 className="text-center  text-xl my-4 border-b font-[oswald] border-dotted pb-5">
          OUR EXECUTIVE MEMBERS FROM {selectedYear}
        </h2>

        <motion.div key={selectedYear} className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-[#0884dc] text-white">
                <th className="border border-gray-300 p-2">S.N</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Designation</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {executiveData[selectedYear].map((member) => (
                <tr key={member.sn} className="even:bg-gray-100">
                  <td className="border border-gray-300 p-2 text-center">
                    {member.sn}
                  </td>
                  <td className="border border-gray-300 p-2">{member.name}</td>
                  <td className="border border-gray-300 p-2">
                    {member.designation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default TimeLine;
