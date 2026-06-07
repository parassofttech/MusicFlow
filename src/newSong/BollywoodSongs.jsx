import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useMusic } from "./../context/MusicContext";

const bollywoodSongs = [
  {
    id: "b1",
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/apna-bana-le-bhediya-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/36534",
  },
  {
    id: "b2",
    title: "Tere Hawaale",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/tere-hawale-laal-singh-chaddha-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/37021",
  },
  {
    id: "b3",
    title: "Phir Aur Kya Chahiye",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/phir-aur-kya-chahiye-zara-hatke-zara-bachke-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/42210",
  },
  {
    id: "b4",
    title: "Kesariya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/kesariya-brahmastra-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/30350",
  },
  {
    id: "b5",
    title: "Chaleya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/chaleya-jawan-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/43094",
  },
  {
    id: "b6",
    title: "O Maahi",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-maahi-dunki-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44800",
  },
  {
    id: "b7",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    cover:
      "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
    url: "https://hindi2.djpunjab.app/load/AA7dmwuC-r2yaTlk8GORew==/Tum%20Hi%20Ho%20(From%20Aashiqui%202).mp3",
  },
  {
    id: "b8",
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    cover:
      "https://pagalnew.com/coverimages/raataan-lambiyan-shershaah-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/19028",
  },
  {
    id: "b9",
    title: "Shayad",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Shayad-Love-Aaj-Kal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/1890",
  },
  {
    id: "b10",
    title: "Hawayein",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Hawayein-Jab-Harry-Met-Sejal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/3573",
  },
];

const BollywoodSongs = () => {
  const {
    playSong,
    pauseSong,
    resumeSong,
    currentSong,
    isPlaying,
    registerSongs,
  } = useMusic();

  useEffect(() => {
    registerSongs(bollywoodSongs);
  }, []);

  return (
    <section className="px-4 sm:px-6 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Bollywood <span className="text-neon">Hits</span>
        </h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          See All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {bollywoodSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.05 }}
              className={`
                relative bg-zinc-900 rounded-xl p-3 cursor-pointer group
                ${isCurrent ? "ring-2 ring-neon" : ""}
              `}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, bollywoodSongs, index, "bollywood");
                }
              }}
            >
              {/* Cover */}
              <div className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="rounded-lg w-full h-50 object-cover"
                />
              </div>

              {/* Info */}
              <div className="mt-3">
                <h3 className="text-white font-semibold truncate">
                  {song.title}
                </h3>
                <p className="text-sm text-gray-400 truncate">
                  {song.artist}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BollywoodSongs;