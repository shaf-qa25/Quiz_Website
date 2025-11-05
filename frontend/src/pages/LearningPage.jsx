import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TECH_CONTENT = {
  "html/css": {
    title: "HTML & CSS Fundamentals",
    desc: "Learn how to structure webpages using HTML and style them beautifully with CSS. Perfect for front-end beginners.",
    gfg: "https://www.geeksforgeeks.org/html-tutorials/",
  },
  javascript: {
    title: "Mastering JavaScript",
    desc: "Deep dive into the most popular programming language for web development — from basics to advanced DOM manipulation.",
    gfg: "https://www.geeksforgeeks.org/javascript/",
  },
  react: {
    title: "React for Modern Web Apps",
    desc: "Learn how to build fast, reusable UI components using React, the most popular front-end library.",
    gfg: "https://www.geeksforgeeks.org/reactjs-tutorials/",
  },
  "node.js": {
    title: "Node.js & Backend Basics",
    desc: "Understand the runtime that powers scalable backend services using JavaScript.",
    gfg: "https://www.geeksforgeeks.org/nodejs/",
  },
  java: {
    title: "Java Programming Essentials",
    desc: "Build robust and secure applications with one of the oldest and most reliable programming languages.",
    gfg: "https://www.geeksforgeeks.org/java/",
  },
  python: {
    title: "Python for Everyone",
    desc: "Simple, readable, and powerful — explore Python for AI, ML, and automation.",
    gfg: "https://www.geeksforgeeks.org/python-programming-language/",
  },
  mongodb: {
    title: "MongoDB Database Guide",
    desc: "Learn how to design, query, and optimize NoSQL databases using MongoDB.",
    gfg: "https://www.geeksforgeeks.org/mongodb/",
  },
  "c++": {
    title: "C++ Programming",
    desc: "Master object-oriented programming and system-level coding with C++.",
    gfg: "https://www.geeksforgeeks.org/c-plus-plus/",
  },
  bootstrap: {
    title: "Bootstrap UI Framework",
    desc: "Design responsive web interfaces with ease using Bootstrap components.",
    gfg: "https://www.geeksforgeeks.org/bootstrap/",
  },
  sql: {
    title: "SQL & Databases",
    desc: "Learn to query, manage, and optimize relational databases using SQL.",
    gfg: "https://www.geeksforgeeks.org/sql-tutorial/",
  },
};

const LearningPage = () => {
  const { techName } = useParams();
  const tech = TECH_CONTENT[techName];

  if (!tech) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-2xl text-gray-600 mb-4">Technology not found 😕</p>
        <Link to="/" className="text-[#FF914D] underline">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] px-6 py-12 flex flex-col items-center text-center">
      <Link
        to="/"
        className="flex items-center gap-2 text-[#FF914D] mb-6 hover:underline"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      <h1 className="text-4xl font-bold text-[#2C2C2C] mb-4">{tech.title}</h1>
      <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mb-10">{tech.desc}</p>

      <a
        href={tech.gfg}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-[#FF914D] text-white text-lg rounded-xl shadow-lg hover:scale-[1.05] transition-transform"
      >
        Learn More on GeeksForGeeks
      </a>
    </div>
  );
};

export default LearningPage;
