import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import {
  IoCall,
  IoLocationOutline,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-10">

      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div className="lg:pr-8">

            <h2 className="text-4xl font-serif font-bold mb-6 tracking-wide">
              PS DECOR
            </h2>

            <p className="text-gray-400 leading-[1.9] text-[15px]">

              Creating unforgettable luxury wedding experiences
              with elegant decor, premium venues and timeless
              celebrations crafted with perfection.

            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">

              {[
                <FaInstagram />,
                <FaFacebookF />,
                <FaPinterestP />,
                <FaWhatsapp />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-pink-600 transition duration-300 flex items-center justify-center cursor-pointer text-lg border border-white/10 hover:border-pink-600"
                >
                  {icon}
                </div>
              ))}

            </div>
          </div>

          {/* QUICK LINKS */}
<div className="lg:pl-6">
  <h3 className="text-2xl font-semibold mb-7">
    Quick Links
  </h3>

  <ul className="space-y-5 text-[15px]">
    {[
      { name: "Home", href: "/" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Venues", href: "/venues" },
      { name: "Decor", href: "/decor" }, // Change if you have a separate gallery page
      { name: "Contact", href: "/get_quote" },
    ].map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          className="text-gray-400 hover:text-pink-400 transition duration-300"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* SERVICES */}
          <div>

            <h3 className="text-2xl font-semibold mb-7">
              Services
            </h3>

            <ul className="space-y-5 text-gray-400 text-[15px]">

              {[
                "Wedding Planning",
                "Luxury Decoration",
                "Photography",
                "Catering",
                "Destination Wedding",
                "Makeup Artist",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-pink-400 transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-semibold mb-7">
              Contact Info
            </h3>

            <div className="space-y-6 text-gray-400 text-[15px]">

              <div className="flex items-start gap-4">

                <div className="bg-pink-600/10 p-3 rounded-xl text-pink-500 text-xl">
                  <IoCall />
                </div>

                <div>
                  <p className="text-white mb-1 font-medium">
                    Phone
                  </p>

                  <p>
                    +91 7599208222
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-pink-600/10 p-3 rounded-xl text-pink-500 text-xl">
                  <MdEmail />
                </div>

                <div>
                  <p className="text-white mb-1 font-medium">
                    Email
                  </p>

                  <p>
                    info@psdecor.in
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-pink-600/10 p-3 rounded-xl text-pink-500 text-xl">
                  <IoLocationOutline />
                </div>

                <div>
                  <p className="text-white mb-1 font-medium">
                    Address
                  </p>

                  <p>
                    Delhi, India
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-gray-500 text-sm">

          <p className="text-center md:text-left">
            © 2026 PS Decor. All Rights Reserved.
          </p>

          <p className="text-center md:text-right">
            Crafted for Luxury Wedding Experiences
          </p>

        </div>
      </div>
    </footer>
  );
}