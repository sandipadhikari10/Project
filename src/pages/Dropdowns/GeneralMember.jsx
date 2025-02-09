import React from "react";

const members = [
  { sn: 1, name: "Bhandu Kharel", designation: "President" },
  { sn: 2, name: "Drona Goutam", designation: "Vice President" },
  { sn: 3, name: "Padam Thakurathi", designation: "General Secretary" },
  { sn: 4, name: "Satish Ojha", designation: "Treasury" },
  { sn: 5, name: "Jyoti Ojha", designation: "Women Coordinator" },
  { sn: 6, name: "Rupesh Neupane", designation: "Youth Coordinator" },
  { sn: 7, name: "Jagadish Kaphle", designation: "Member" },
  { sn: 8, name: "Anu Rimal", designation: "Member" },
  { sn: 9, name: "Nilima Shrestha", designation: "Member" },
  { sn: 10, name: "Amernath Sah", designation: "Member" },
  { sn: 11, name: "Anand Kumar Yadav", designation: "Member" },
];

const GeneralMember = () => {
  return (
    <div className="w-full p-4 bg-gray-100 flex justify-center ">
      <div className="w-full max-w-6xl my-20">
        <h2 className="text-center text-2xl my-4  font-semibold  pb-5">
          OUR GENERAL MEMBERS FROM
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center bg-white shadow-md">
            <thead>
              <tr className="bg-[#0884DC] text-white">
                <th className="border  border-gray-300 p-3">S.N</th>
                <th className="border border-gray-300 p-3">Name</th>
                <th className="border border-gray-300 p-3">Designation</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {members.map((member, index) => (
                <tr
                  key={member.sn}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="border border-gray-300 p-3">{member.sn}</td>
                  <td className="border border-gray-300 p-3">{member.name}</td>
                  <td className="border border-gray-300 p-3">
                    {member.designation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GeneralMember;
