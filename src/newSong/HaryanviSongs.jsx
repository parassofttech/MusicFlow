import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { ArrowLeft, Play } from "lucide-react";

const haryanviSongs = [
  {
    id: "h1",
    title: "52 Gaj Ka Daman",
    artist: "Renuka Panwar",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273d6cbf6a5a9c95b2c98b5eb2f",
    url: "https://pagalnew.com/128-downloads/17642",
  },
  {
    id: "h2",
    title: "Chatak Matak",
    artist: "Renuka Panwar",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273d3d66f0d0f5b2e3c5f2a61df",
    url: "https://pagalnew.com/128-downloads/17725",
  },
  {
    id: "h3",
    title: "Gulzaar Chhaniwala",
    artist: "Filter Shot",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273eaeb94f5c2cc74e07bcb35c4",
    url: "https://pagalnew.com/128-downloads/16095",
  },
  {
    id: "h4",
    title: "Loot Liya",
    artist: "Khasa Aala Chahar",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273b4c9f35db0e2a4c7f0d73f5f",
    url: "https://pagalnew.com/128-downloads/17812",
  },
  {
    id: "h5",
    title: "Father Saab",
    artist: "Khasa Aala Chahar",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2731df6d3eb1d6f53fd6f1f4f78",
    url: "https://pagalnew.com/128-downloads/17546",
  },
  {
    id: "h6",
    title: "Balam Thanedar",
    artist: "Pranjal Dahiya",
    cover:
      "https://i.scdn.co/image/ab67616d0000b27353e8cf7a3ef0f6f44e18f2fd",
    url: "https://pagalnew.com/128-downloads/44693",
  },
  {
    id: "h7",
    title: "Kabootar",
    artist: "Renuka Panwar",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2739b58d4cdddbfa8f0dce2745d",
    url: "https://pagalnew.com/128-downloads/31208",
  },
  {
    id: "h8",
    title: "Desi Desi Na Bolya Kar",
    artist: "Raju Punjabi",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2739f8fd95bbd1f462f2c4b8e4e",
    url: "https://pagalnew.com/128-downloads/17150",
  },
  {
    id: "h9",
    title: "Tagdi",
    artist: "Ajay Hooda",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2735b5d9f03db6f7f5e5fd14f2d",
    url: "https://pagalnew.com/128-downloads/17041",
  },
  {
    id: "h10",
    title: "Kamar Teri Left Right Hale",
    artist: "Ajay Hooda",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273a44ec65f6a85ee844eb5d286",
    url: "https://pagalnew.com/128-downloads/17040",
  },
];

const HaryanviSongs = () => {
  const {
    playSong,
    pauseSong,
    resumeSong,
    currentSong,
    isPlaying,
    registerSongs,
  } = useMusic();

  useEffect(() => {
    registerSongs(haryanviSongs);
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
        {haryanviSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, haryanviSongs, "punjabi");
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

export default HaryanviSongs;