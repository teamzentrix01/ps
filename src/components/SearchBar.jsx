"use client";

import {
  IoSearch,
  IoLocationOutline,
} from "react-icons/io5";

import {
  MdOutlineDesignServices,
} from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="w-full max-w-6xl px-4">

      <div className="relative">

        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-[35px] blur opacity-30"></div>

        <div className="relative bg-white/95 backdrop-blur-2xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)] rounded-[35px] p-3">

          <div className="flex flex-col lg:flex-row items-center gap-3">

            <div className="group flex items-center gap-4 bg-[#fff7f5] hover:bg-white transition duration-300 rounded-[25px] px-5 py-4 w-full lg:w-[260px] border border-transparent hover:border-pink-200">

              <div className="bg-pink-100 p-3 rounded-2xl text-pink-600 text-2xl group-hover:scale-110 transition">
                <MdOutlineDesignServices />
              </div>

              <div className="flex flex-col w-full">

                <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Services
                </span>

                <select className="bg-transparent outline-none text-gray-800 font-semibold cursor-pointer">

                  <option>Wedding Planning</option>
                  <option>Decoration</option>
                  <option>Catering</option>
                  <option>Photography</option>
                  <option>Makeup Artist</option>

                </select>

              </div>
            </div>

            <div className="group flex items-center gap-4 bg-[#fff7f5] hover:bg-white transition duration-300 rounded-[25px] px-5 py-4 w-full lg:w-[240px] border border-transparent hover:border-pink-200">

              <div className="bg-pink-100 p-3 rounded-2xl text-pink-600 text-2xl group-hover:scale-110 transition">
                <IoLocationOutline />
              </div>

              <div className="flex flex-col w-full">

                <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Venue
                </span>

                <select className="bg-transparent outline-none text-gray-800 font-semibold cursor-pointer">

                  <option>Select Venue</option>
                  <option>Banquet Hall</option>
                  <option>Resort</option>
                  <option>Farmhouse</option>
                  <option>Destination Wedding</option>

                </select>

              </div>
            </div>

            <div className="group flex items-center gap-4 bg-[#fff7f5] hover:bg-white transition duration-300 rounded-[25px] px-5 py-4 flex-1 w-full border border-transparent hover:border-pink-200">

              <div className="bg-pink-100 p-3 rounded-2xl text-pink-600 text-2xl group-hover:scale-110 transition">
                <IoSearch />
              </div>

              <div className="flex flex-col w-full">

                <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Search
                </span>

                <input
                  type="text"
                  placeholder="Search venues, decor, catering..."
                  className="bg-transparent outline-none text-gray-800 font-semibold placeholder:text-gray-400 w-full"
                />

              </div>
            </div>

            <button className="w-full lg:w-auto bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 hover:scale-105 hover:shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300 text-white px-10 py-5 rounded-[25px] font-semibold text-lg flex items-center justify-center gap-3">

              <IoSearch className="text-2xl" />

              Search

            </button>

          </div>
        </div>
      </div>
    </div>
  );
}