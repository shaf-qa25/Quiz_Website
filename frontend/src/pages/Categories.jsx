import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "HTML",
    desc: "Test your knowledge of HTML tags, structure, and semantics.",
    color: "from-[#FF914D] to-[#FFD93D]",
  },
  {
    name: "CSS",
    desc: "Flexbox, grid, selectors, animations — style it right!",
    color: "from-[#CBA1FF] to-[#FFB6C1]",
  },
  {
    name: "JavaScript",
    desc: "Variables, functions, DOM, ES6 — master the JS basics.",
    color: "from-[#6EE7B7] to-[#3B82F6]",
  },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-linear-to-br from-[#FFF9F0] to-[#FFECD1] px-4 py-8">
      <h1 className="text-4xl font-extrabold text-[#FF914D] mb-2">Choose Your Category</h1>
      <p className="text-gray-700 mb-8 text-center max-w-xl">
        Select a category to start your quiz. Each quiz has technical questions related to that topic.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => navigate(`/quiz/${cat.name.toLowerCase()}`)}
            className={`p-6 rounded-2xl bg-linear-to-r ${cat.color} text-white font-semibold shadow-lg hover:scale-105 transition backdrop-blur-md`}
          >
            <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
            <p className="text-sm opacity-90">{cat.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
