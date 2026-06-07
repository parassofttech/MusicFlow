import React from "react";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Bollywood Songs",
    slug: "bollywood",
    gradient: "from-pink-500 to-red-500",
  },
  {
    id: 2,
    name: "Punjabi Songs",
    slug: "punjabi",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    id: 3,
    name: "Haryanvi Songs",
    slug: "haryanvi",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Bhojpuri Songs",
    slug: "bhojpuri",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    name: "Tamil Songs",
    slug: "tamil",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 6,
    name: "Indipop Songs",
    slug: "indipop",
    gradient: "from-fuchsia-500 to-pink-500",
  },
];

const Songs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Music <span className="text-neon">Categories</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/songs/${category.slug}`)}
            className={`
              cursor-pointer rounded-2xl p-6
              bg-gradient-to-br ${category.gradient}
              shadow-lg
              min-h-[180px]
              flex flex-col justify-between
            `}
          >
            <Music2 size={40} />

            <div>
              <h2 className="text-xl font-bold">
                {category.name}
              </h2>

              <p className="text-sm text-white/80 mt-2">
                Explore top {category.name.toLowerCase()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Songs;