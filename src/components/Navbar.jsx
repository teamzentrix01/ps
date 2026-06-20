"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const menuItems = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Decor", href: "/decor" },
  { name: "Venues", href: "/venues" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="border-b bg-white text-sm text-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-pink-500" />
            <span>+91 7599208222</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="text-pink-500" />
            <span>info@psdecor.in</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-pink-600 md:text-3xl"
          >
            PS DECOR
          </Link>

          {/* Desktop Menu */}
          <ul className="flex items-center gap-6 md:gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative pb-2 font-medium transition-all duration-300 ${
                      isActive
                        ? "text-pink-600"
                        : "text-gray-700 hover:text-pink-500"
                    }`}
                  >
                    {item.name}

                    {/* Active Underline */}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-pink-600"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link
            href="/get_quote"
            className={`rounded-full px-5 py-2 text-sm font-medium shadow-md transition md:text-base ${
              pathname === "/get_quote"
                ? "bg-pink-700 text-white"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            Get Quote
          </Link>
        </div>
      </nav>
    </>
  );
}