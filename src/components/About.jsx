"use client";

import { FaPalette, FaHeart, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-pink-600">PS DECOR</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            PS  decor is a creative event and wedding décor brand dedicated to transforming
            ordinary spaces into unforgettable experiences. With a passion for
            design, elegance, and detail, we bring your dream celebrations to life.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            From luxurious weddings to intimate gatherings, our team blends
            creativity with professionalism to craft unique themes that reflect
            your personality and vision.
          </p>

          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-pink-600 font-medium">
              <FaPalette />
              Creative Designs
            </div>

            <div className="flex items-center gap-2 text-pink-600 font-medium">
              <FaHeart />
              Made with Passion
            </div>

            <div className="flex items-center gap-2 text-pink-600 font-medium">
              <FaUsers />
              Expert Team
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac"
            alt="Wedding Decor"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 w-40">
            <p className="text-2xl font-bold text-pink-600">5+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}