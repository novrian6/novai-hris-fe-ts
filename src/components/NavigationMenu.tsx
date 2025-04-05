"use client";

import React, { useState } from "react";

export default function NavigationMenu({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-white shadow-md md:w-64 ${className}`}>
      <div className="flex items-center justify-between p-4 md:block">
        <h2 className="text-xl font-bold text-gray-800">HRIS Menu</h2>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <ul
        className={`space-y-2 p-4 md:block ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-100"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-100"
          >
            Employee Management
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-100"
          >
            Attendance Tracking
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-100"
          >
            Payroll Management
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-100"
          >
            Settings
          </a>
        </li>
      </ul>
      <div className="mt-4 p-4">
        <button
          onClick={() => alert("Logging out...")}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
