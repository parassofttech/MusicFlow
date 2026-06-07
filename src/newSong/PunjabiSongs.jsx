import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";

const punjabiSongs = [
  {
    id: "p1",
    title: "Lehanga",
    artist: "Jass Manak",
    cover:
      "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
    url:
      "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1.mp3",
  },
  {
    id: "p2",
    title: "Prada",
    artist: "Jass Manak",
    cover:
      "https://pagalnew.com/coverimages/Prada-Jass-Manak-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/24808",
  },
  {
    id: "p3",
    title: "Lahore",
    artist: "Guru Randhawa",
    cover:
      "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/4170",
  },
  {
    id: "p4",
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
    cover:
      "https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/4173",
  },
  {
    id: "p5",
    title: "Naah",
    artist: "Harrdy Sandhu",
    cover:
      "https://pagalnew.com/coverimages/Naah-Harrdy-Sandhu-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/4165",
  },
  {
    id: "p6",
    title: "Soch",
    artist: "Harrdy Sandhu",
    cover:
      "https://pagalnew.com/coverimages/Soch-Harrdy-Sandhu-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/4167",
  },
  {
    id: "p7",
    title: "Born To Shine",
    artist: "Diljit Dosanjh",
    cover:
      "https://pagalnew.com/coverimages/Born-To-Shine-GOAT-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/17515",
  },
  {
    id: "p8",
    title: "Do You Know",
    artist: "Diljit Dosanjh",
    cover:
      "https://pagalnew.com/coverimages/Do-You-Know-Diljit-Dosanjh-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/4161",
  },
  {
    id: "p9",
    title: "Excuses",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/Excuses-AP-Dhillon-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/17872",
  },
  {
    id: "p10",
    title: "Insane",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/Insane-AP-Dhillon-500-500.jpg",
    url:
      "https://pagalnew.com/128-downloads/35674",
  },
];

const PunjabiSongs = () => {
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
    <section className="px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          Punjabi <span className="text-neon">Hits</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {punjabiSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.05 }}
              className={`
                bg-zinc-900 rounded-xl p-3 cursor-pointer
                ${isCurrent ? "ring-2 ring-neon" : ""}
              `}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(
                    song,
                    punjabiSongs,
                    "punjabi"
                  );
                }
              }}
            >
              <img
                src={song.cover}
                alt={song.title}
                className="rounded-lg w-full h-52 object-cover"
              />

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

      <div className="h-20" />
    </section>
  );
};

export default PunjabiSongs;