import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050510]">
        {/* glow line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>

        <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <h1 className="text-white text-xl font-bold">
              Dev<span className="text-purple-400">.</span>
            </h1>

            {/* Links */}
            <ul className="hidden md:flex gap-8 text-sm text-gray-300">
              <li className="hover:text-purple-400 transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                Projects
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                About
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                Contact
              </li>
            </ul>

            {/* Button */}
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm hover:scale-105 transition shadow-lg shadow-purple-500/30">
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
