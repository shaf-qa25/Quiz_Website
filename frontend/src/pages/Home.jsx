import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-linear-to-br from-[#FFF9F0] via-[#FFE8C2] to-[#FFD93D] overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')] opacity-25"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#FF914D] mb-4 drop-shadow-md animate-fade-in">
          Welcome to <span className="text-[#CBA1FF]">MindUp 🧩</span>
        </h1>

        <p className="text-gray-700 mb-8 max-w-xl mx-auto text-lg font-medium">
          Challenge yourself with fun and colorful quizzes!  
          Pick your favorite topic and climb the leaderboard ⚡
        </p>

        <Link
          to="/categories"
          className="bg-linear-to-r from-[#FF914D] to-[#FFD93D] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
        >
          Start Playing 🎯
        </Link>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="bg-[#CBA1FF33] text-[#8B5CF6] px-5 py-2 rounded-full font-semibold shadow-sm">
            ✨ Fun
          </div>
          <div className="bg-[#FFF17666] text-[#A16207] px-5 py-2 rounded-full font-semibold shadow-sm">
            💡 Learn
          </div>
          <div className="bg-[#FFB34744] text-[#C2410C] px-5 py-2 rounded-full font-semibold shadow-sm">
            🔥 Play
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
