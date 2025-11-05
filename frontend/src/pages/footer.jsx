import React from "react";
import { Link } from "react-router-dom";
import { Mail, Code2, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-r from-[#FF914D] via-[#FFB84D] to-[#FFD93D] text-white py-10 mt-16 shadow-inner">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide drop-shadow-sm">
            Mind<span className="text-[#2C2C2C]">Up</span>
          </h2>
          <p className="text-sm opacity-90 mt-1">
            Test your skills. Master your tech. 
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-[#2C2C2C] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/quiz"
            className="hover:text-[#2C2C2C] transition-colors duration-200"
          >
            Quizzes
          </Link>
          <Link
            to="/result"
            className="hover:text-[#2C2C2C] transition-colors duration-200"
          >
            Result
          </Link>
          <Link
            to="/signup"
            className="hover:text-[#2C2C2C] transition-colors duration-200"
          >
            Signup
          </Link>
        </div>

        <div className="flex gap-5 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/shafqa-fatma-bb0111380/"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            <Globe size={20} />
          </a>
          <a
            href="https://github.com/shaf-qa25"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            <Code2 size={20} />
          </a>
          <a
            href="mailto:fatmashafqa4@gmail.com"
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="relative text-center text-sm text-white/80 mt-8 border-t border-white/30 pt-4">
        © {new Date().getFullYear()} MindUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
