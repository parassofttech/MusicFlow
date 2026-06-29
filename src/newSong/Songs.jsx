import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Bollywood",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    path: "/songs/bollywood",
  },
  {
    title: "Punjabi",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    path: "/songs/punjabi",
  },
  {
    title: "Haryanvi",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b",
    path: "/songs/haryanvi",
  },
  {
    title: "Bhojpuri",
    image:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491",
    path: "/songs/bhojpuri",
  },
  {
    title: "Tamil",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    path: "/songs/tamil",
  },
  {
    title: "IndiPop",
    image:
      "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b",
    path: "/songs/indipop",
  },
];

const Songs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-darkbg px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Music <span className="text-neon">Categories</span>
        </h1>

        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Discover songs from your favorite genres and playlists.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(category.path)}
            className="relative h-52 md:h-64 rounded-3xl overflow-hidden cursor-pointer group"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-neon/10" />

            {/* Title */}
            <div className="absolute bottom-5 left-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {category.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Space */}
      <div className="h-20" />
    </div>
  );
};

export default Songs;