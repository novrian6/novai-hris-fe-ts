"use client";

import React, { useState } from "react";
import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8082";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${SERVER_URL}/api/auth/register`, {
        username: formData.name,
        email: formData.email,
        password_hash: formData.password,
        role: "user",
      });
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 via-white to-gray-200">
      <div className="w-full max-w-lg p-10 bg-white rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Re-enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
