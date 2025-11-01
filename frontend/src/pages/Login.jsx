import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-linear-to-br from-purple-200 via-pink-100 to-purple-300">
     
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 bottom-10 right-10"></div>
      <div className="absolute w-80 h-80 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000 top-1/3 left-1/2"></div>

      
      <div className="relative z-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl px-10 py-8 max-w-md w-full transition-all hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-purple-700 drop-shadow-md">
          Welcome Back 💫
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/30 border border-white/40 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/30 border border-white/40 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
            required
          />

          <button
            type="submit"
            className="mt-3 bg-linear-to-r from-purple-500 to-pink-400 text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]"
          >
            Log In 
          </button>
        </form>

        <p className="mt-4 text-center text-gray-800 font-medium">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
