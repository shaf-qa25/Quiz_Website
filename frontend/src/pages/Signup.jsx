import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-linear-to-br from-orange-200 via-yellow-100 to-orange-300">
      
      <div className="absolute w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 bottom-10 right-10"></div>
      <div className="absolute w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000 top-1/3 left-1/2"></div>

      
      <div className="relative z-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl px-10 py-8 max-w-md w-full transition-all hover:shadow-[0_0_25px_rgba(255,165,0,0.4)]">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-orange-600 drop-shadow-md">
          Create Your Account 
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/30 border border-white/40 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/30 border border-white/40 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/30 border border-white/40 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/30 border border-white/40 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
            required
          />

          <button
            type="submit"
            className="mt-3 bg-linear-to-r from-orange-400 to-yellow-400 text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]"
          >
            Sign Up 
          </button>
        </form>

        <p className="mt-4 text-center text-gray-800 font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
