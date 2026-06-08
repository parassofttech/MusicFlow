import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";

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
    <section className="px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          Bhojpuri <span className="text-neon">Hits</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {bhojpuriSongs.map((song) => {
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
                  playSong(song, bhojpuriSongs, "bhojpuri");
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

export default BhojpuriSongs;