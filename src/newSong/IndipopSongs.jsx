import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";

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
    <section className="px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          Indi<span className="text-neon">Pop</span> Hits
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {indipopSongs.map((song) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.05 }}
              className={`bg-zinc-900 rounded-xl p-3 cursor-pointer ${
                isCurrent ? "ring-2 ring-neon" : ""
              }`}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, indipopSongs, "indipop");
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

      <div className="h-20"></div>
    </section>
  );
};

export default IndipopSongs;