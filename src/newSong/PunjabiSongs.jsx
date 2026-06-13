import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMusic } from "../context/MusicContext";

const punjabiSongs = [
  {
    id: "p1",
    title: "Lehanga",
    artist: "Jass Manak",
    cover: "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
    url: "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1.mp3",
  },
  {
    id: "p2",
    title: "Prada",
    artist: "Jass Manak",
    cover: "https://pagalnew.com/coverimages/Prada-Jass-Manak-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/24808",
  },
  {
    id: "p3",
    title: "Lahore",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4170",
  },
  {
    id: "p4",
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4173",
  },
  {
    id: "p1",
    title: "Lehanga",
    artist: "Jass Manak",
    cover: "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
    url: "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1.mp3",
  },
  {
    id: "p2",
    title: "Prada",
    artist: "Jass Manak",
    cover: "https://pagalnew.com/coverimages/Prada-Jass-Manak-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/24808",
  },
  {
    id: "p3",
    title: "Lahore",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4170",
  },
  {
    id: "p4",
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4173",
  },
];

const PunjabiSongs = () => {
  const navigate = useNavigate();

  const {
    playSong,
    pauseSong,
    resumeSong,
    currentSong,
    isPlaying,
    registerSongs,
  } = useMusic();

  useEffect(() => {
    registerSongs(punjabiSongs);
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
        {punjabiSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, punjabiSongs, "punjabi");
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

export default PunjabiSongs;