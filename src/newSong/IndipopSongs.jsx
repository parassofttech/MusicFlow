import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { ArrowLeft, Play } from "lucide-react";

const indipopSongs = [
  {
    id: "i1",
    title: "Maan Meri Jaan",
    artist: "King",
    cover:
      "https://pagalnew.com/coverimages/Maan-Meri-Jaan-Champagne-Talk-500-500.jpg",
    url: "https://example.com/maan-meri-jaan.mp3",
  },
  {
    id: "i2",
    title: "Tu Aake Dekhle",
    artist: "King",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2736d7c5a2c0cbe64f2f0ef98e3",
    url: "https://example.com/tu-aake-dekhle.mp3",
  },
  {
    id: "i3",
    title: "Excuses",
    artist: "AP Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2738d6c8f75b1219777084ff57c",
    url: "https://example.com/excuses.mp3",
  },
  {
    id: "i4",
    title: "Insane",
    artist: "AP Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734a0d0a0dca7eac191f85632d",
    url: "https://example.com/insane.mp3",
  },
  {
    id: "i5",
    title: "Brown Munde",
    artist: "AP Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f3c4b2b0a6b5f4d2e3c4d5f6",
    url: "https://example.com/brown-munde.mp3",
  },
  {
    id: "i6",
    title: "Alag Aasmaan",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273d7d3b4d8a8c6c0c5e0b6e3c1",
    url: "https://example.com/alag-aasmaan.mp3",
  },
  {
    id: "i7",
    title: "Baarishein",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2736cb8d8c7a7b2c2d6e8d0c4f3",
    url: "https://example.com/baarishein.mp3",
  },
  {
    id: "i8",
    title: "Gul",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2738b3f6f3f4c4f5d5a5b5c5d5e",
    url: "https://example.com/gul.mp3",
  },
  {
    id: "i9",
    title: "Husn",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734e8c1f7f8d2e1c7b8a4f3d2c",
    url: "https://example.com/husn.mp3",
  },
  {
    id: "i10",
    title: "Cold Hours",
    artist: "Aleemrk",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f4a7c3d8e5b2a6c1d4e7f8a2",
    url: "https://example.com/cold-hours.mp3",
  },
];

const IndipopSongs = () => {
  const {
    playSong,
    pauseSong,
    resumeSong,
    currentSong,
    isPlaying,
    registerSongs,
  } = useMusic();

  useEffect(() => {
    registerSongs(indipopSongs);
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
        {indipopSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, indipopSongs, "punjabi");
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

export default IndipopSongs;