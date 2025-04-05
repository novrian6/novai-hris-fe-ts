'use client'; // Mark this as a Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login"); // Navigate to the login page
  };

  const handleRegisterClick = () => {
    router.push("/register"); // Navigate to the register page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-white to-gray-200 p-6 sm:p-10">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/logo.svg"
          alt="Novai-HRIS Logo"
          width={140}
          height={140}
          className="mb-6"
        />
        <h1 className="text-4xl font-extrabold text-gray-800 text-center leading-tight">
          Welcome to <span className="text-blue-600">Novai-HRIS</span>
        </h1>
        <p className="text-gray-500 text-center mt-4 leading-relaxed">
          Empower your HR team with a sleek, modern, and intuitive platform designed for efficiency.
        </p>
      </div>
      <div className="flex gap-6 mt-6">
        <button
          onClick={handleLoginClick} // Navigate to login on click
          className="py-3 px-6 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
        >
          Login
        </button>
        <button
          onClick={handleRegisterClick} // Navigate to register on click
          className="py-3 px-6 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105"
        >
          Register
        </button>
      </div>
    </div>
  );
}
