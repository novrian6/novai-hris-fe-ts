"use client";

import React from "react";
import NavigationMenu from "@/components/NavigationMenu";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-200 via-white to-gray-200">
      {/* Header */}
      <header className="p-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Novai HRIS</h1>
        <p className="text-sm font-light">Streamlining your HR processes</p>
      </header>

      <div className="flex flex-col md:flex-row flex-grow">
        {/* Navigation Menu */}
        <NavigationMenu className="w-full md:w-64" />

        {/* Main Content */}
        <main className="flex-grow p-6">
          <div className="w-full max-w-5xl p-10 bg-white rounded-3xl shadow-2xl">
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
              Dashboard
            </h1>
            <div className="space-y-6">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  Welcome to HRIS Dashboard
                </h2>
                <p className="mt-2 text-gray-600">
                  Manage your employee data, attendance, and more from this
                  centralized dashboard.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-indigo-800">
                    Employee Management
                  </h3>
                  <p className="mt-2 text-indigo-600">
                    View and manage employee records.
                  </p>
                </div>
                <div className="p-6 bg-green-100 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-800">
                    Attendance Tracking
                  </h3>
                  <p className="mt-2 text-green-600">
                    Monitor employee attendance and schedules.
                  </p>
                </div>
                <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-yellow-800">
                    Payroll Management
                  </h3>
                  <p className="mt-2 text-yellow-600">
                    Handle payroll and compensation details.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-center text-gray-600">
              Need help?{" "}
              <a
                href="/support"
                className="text-indigo-600 font-medium hover:underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center shadow-md">
        <p className="text-sm font-light">
          © {new Date().getFullYear()} <span className="font-medium">Novai HRIS</span>. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with ❤️ by the Novai team.
        </p>
      </footer>
    </div>
  );
}
