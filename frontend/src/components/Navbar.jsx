import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../pages/Signup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FF914D] text-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide drop-shadow-md"
      >
        MindUp
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Nav Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-10 absolute md:static top-16 left-0 w-full md:w-auto bg-linear-to-r from-[#FF914D] to-[#FFD93D] md:bg-transparent p-5 md:p-0 z-20 text-center md:text-left`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="block md:inline hover:text-[#FFD93D] transition-all font-semibold py-2 md:py-0"
        >
          Home
        </Link>
        <Link
          to="/categories"
          onClick={() => setIsOpen(false)}
          className="block md:inline hover:text-[#FFD93D] transition-all font-semibold py-2 md:py-0"
        >
          Categories
        </Link>
        <Link
          to="/result"
          onClick={() => setIsOpen(false)}
          className="block md:inline hover:text-[#FFD93D] transition-all font-semibold py-2 md:py-0"
        >
          Results
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="block md:inline hover:text-[#FFD93D] transition-all font-semibold py-2 md:py-0"
        >
          About
        </Link>

        {/* Login / Signup Buttons */}
        <div className="mt-3 md:mt-0 flex justify-center md:justify-start gap-3">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="bg-white text-[#FF914D] px-4 py-2 rounded-full font-semibold hover:bg-[#FFF3E0] transition-all shadow-sm"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-[#FFD93D] text-[#2C2C2C] px-4 py-2 rounded-full font-semibold hover:bg-[#FFEA7A] transition-all shadow-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
