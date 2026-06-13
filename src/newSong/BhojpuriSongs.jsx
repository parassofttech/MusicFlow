import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { ArrowLeft, Play } from "lucide-react";

const bhojpuriSongs = [
  {
    id: "bh1",
    title: "Lollipop Lagelu",
    artist: "Pawan Singh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734b8f8b1f0d3c6b4a6d7b7e7c",
    url: "https://example.com/lollipop-lagelu.mp3",
  },
  {
    id: "bh2",
    title: "Raja Ji",
    artist: "Pawan Singh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f0e8baf0f90f6e3e9a2f8d5f",
    url: "https://example.com/rajaji.mp3",
  },
  {
    id: "bh3",
    title: "Le Le Aayi Coca Cola",
    artist: "Khesari Lal Yadav",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734a1f0d6f7b0c5d8c7a4f5b6c",
    url: "https://example.com/coca-cola.mp3",
  },
  {
    id: "bh4",
    title: "Naach Re Patarki",
    artist: "Arvind Akela Kallu",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273b6f0e5d3a7c9b8f0d4e2a1b3",
    url: "https://example.com/naach-re-patarki.mp3",
  },
  {
    id: "bh5",
    title: "Hari Hari Odhani",
    artist: "Khesari Lal Yadav",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2738f4c6d7e9b2a3f1d5c7b9a2e",
    url: "https://example.com/hari-hari-odhani.mp3",
  },
  {
    id: "bh6",
    title: "Pudina Ae Haseena",
    artist: "Pawan Singh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273e7c4a1b9d5f3a6c8e2b1d4f7",
    url: "https://example.com/pudina-ae-haseena.mp3",
  },
  {
    id: "bh7",
    title: "Ara Me Dobara",
    artist: "Khesari Lal Yadav",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273d4e6a8c1b3f5d7e9a2c4b6f8",
    url: "https://example.com/ara-me-dobara.mp3",
  },
  {
    id: "bh8",
    title: "Palang Sagwan Ke",
    artist: "Khesari Lal Yadav",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273c8f5d2a7e4b1c6f9d3a8e5b2",
    url: "https://example.com/palang-sagwan-ke.mp3",
  },
  {
    id: "bh9",
    title: "Lagawelu Jab Lipstick",
    artist: "Pawan Singh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f3a7c1d5e9b2f6a4c8d1e5b7",
    url: "https://example.com/lagawelu-jab-lipstick.mp3",
  },
  {
    id: "bh10",
    title: "Jhumelaa",
    artist: "Neelkamal Singh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273a5d8f2c6b9e3a7d1f4c8b2e6",
    url: "https://example.com/jhumelaa.mp3",
  },
];

const BhojpuriSongs = () => {
  const {
    playSong,
    pauseSong,
    resumeSong,
    currentSong,
    isPlaying,
    registerSongs,
  } = useMusic();

  useEffect(() => {
    registerSongs(bhojpuriSongs);
  }, []);

  return (
     <div className= "bg-darkbg text-white px-6 p-24 relative overflow-hidden">

      {/* 🔙 Header */}
      <div className="flex items-center gap-3 mt-4">
        <ArrowLeft
          className="cursor-pointer hover:text-neon"
          onClick={() => navigate("/")}
        />
        <h1 className="text-2xl font-bold">
          Punjabi <span className="text-neon">Hits</span>
        </h1>
      </div>

      {/* 🎧 Songs List */}
      <div className="mt-10 space-y-3">
        {bhojpuriSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, bhojpuriSongs, "punjabi");
                }
              }}
              className={`
                flex items-center justify-between
                bg-zinc-900/70 p-4 rounded-xl cursor-pointer
                transition
                ${isCurrent ? "ring-2 ring-neon" : ""}
              `}
            >
              {/* Left Side */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 w-5">
                  {index + 1}
                </span>

                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-12 h-12 rounded-md object-cover"
                />

                <div>
                  <h4 className="font-semibold">
                    {song.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {song.artist}
                  </p>
                </div>
              </div>

              {/* Play Icon */}
              <Play className="text-neon" />
            </motion.div>
          );
        })}
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default BhojpuriSongs;