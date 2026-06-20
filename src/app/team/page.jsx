"use client";

import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function Team() {
  const teamMembers = [
    {
      name: "Aman Sharma",
      role: "Founder & Creative Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Riya Verma",
      role: "Event Designer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Mohit Kumar",
      role: "Decoration Specialist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Neha Singh",
      role: "Client Manager",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet Our <span className="text-pink-600">Team</span>
        </h2>

        <p className="text-gray-600 mt-3">
          The creative minds behind{" "}
          <span className="font-semibold text-pink-600">
            PS DECOR
          </span>
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-pink-100"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {member.name}
            </h3>

            <p className="text-gray-500 text-sm">{member.role}</p>

            {/* Social / Contact Icons */}
            <div className="flex justify-center gap-4 mt-4 text-pink-600">
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaPhoneAlt className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}