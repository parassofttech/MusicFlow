import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Bollywood",
    image:
      "https://img.magnific.com/premium-psd/3d-gold-bollywood-song-title-text-effect-alpha-background-music-video-thumbnail-art_951594-214.jpg?semt=ais_hybrid&w=740&q=80",
    path: "/songs/bollywood",
  },
  {
    title: "Punjabi",
    image:
      "https://i.ytimg.com/vi/cBkfNPdlx3M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1PmJM-WOOBcPO74Of5e10zVuwnQ",
    path: "/songs/punjabi",
  },
  {
    title: "IndiPop",
    image:
      "https://c.saavncdn.com/editorial/logo/IndipopFavorites2000s_20190129043721.jpg",
    path: "/songs/indipop",
  },
  {
    title: "Haryanvi",
    image:
      "https://c.saavncdn.com/983/Haryanvi-Dj-Songs-Haryanvi-2023-20231215191016-500x500.jpg",
    path: "/songs/haryanvi",
  },
  {
    title: "Bhojpuri",
    image:
      "https://c.saavncdn.com/443/Bhojpuri-New-Song-Bhojpuri-2022-20220620130326-500x500.jpg",
    path: "/songs/bhojpuri",
  },
  {
    title: "Tamil",
    image:
      "https://extragavanza.in/public/uploads/posts/post_1722665913.jpg",
    path: "/songs/tamil",
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