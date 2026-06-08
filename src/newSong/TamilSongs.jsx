import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";

const tamilSongs = [
  {
    id: "t1",
    title: "Arabic Kuthu",
    artist: "Anirudh Ravichander",
    cover:
      "https://c.saavncdn.com/696/Arabic-Kuthu-Halamithi-Habibo-Tamil-2022-20220214195542-500x500.jpg",
    url: "https://example.com/arabic-kuthu.mp3",
  },
  {
    id: "t2",
    title: "Vaathi Coming",
    artist: "Anirudh Ravichander",
    cover:
      "https://c.saavncdn.com/365/Vaathi-Coming-Master-Tamil-2021-500x500.jpg",
    url: "https://example.com/vaathi-coming.mp3",
  },
  {
    id: "t3",
    title: "Hukum",
    artist: "Anirudh Ravichander",
    cover:
      "https://c.saavncdn.com/083/Hukum-Jailer-Tamil-2023-500x500.jpg",
    url: "https://example.com/hukum.mp3",
  },
  {
    id: "t4",
    title: "Kaavaalaa",
    artist: "Shilpa Rao",
    cover:
      "https://c.saavncdn.com/145/Kaavaalaa-Jailer-Tamil-2023-500x500.jpg",
    url: "https://example.com/kaavaalaa.mp3",
  },
  {
    id: "t5",
    title: "Enjoy Enjaami",
    artist: "Dhee",
    cover:
      "https://c.saavncdn.com/607/Enjoy-Enjaami-Tamil-2021-500x500.jpg",
    url: "https://example.com/enjoy-enjaami.mp3",
  },
  {
    id: "t6",
    title: "Why This Kolaveri Di",
    artist: "Dhanush",
    cover:
      "https://c.saavncdn.com/214/3-Tamil-2011-500x500.jpg",
    url: "https://example.com/kolaveri.mp3",
  },
  {
    id: "t7",
    title: "Rowdy Baby",
    artist: "Dhanush",
    cover:
      "https://c.saavncdn.com/008/Rowdy-Baby-Tamil-2018-500x500.jpg",
    url: "https://example.com/rowdy-baby.mp3",
  },
  {
    id: "t8",
    title: "Naa Ready",
    artist: "Thalapathy Vijay",
    cover:
      "https://c.saavncdn.com/981/Naa-Ready-Tamil-2023-500x500.jpg",
    url: "https://example.com/naa-ready.mp3",
  },
  {
    id: "t9",
    title: "Megham Karukatha",
    artist: "Dhanush",
    cover:
      "https://c.saavncdn.com/373/Megham-Karukatha-Tamil-2022-500x500.jpg",
    url: "https://example.com/megham-karukatha.mp3",
  },
  {
    id: "t10",
    title: "Jolly O Gymkhana",
    artist: "Vijay",
    cover:
      "https://c.saavncdn.com/716/Jolly-O-Gymkhana-Tamil-2022-500x500.jpg",
    url: "https://example.com/jolly-gymkhana.mp3",
  },
];

const TamilSongs = () => {
  const {
    playSong,
    pauseSong,
    resumeSong,
    currentSong,
    isPlaying,
    registerSongs,
  } = useMusic();

  useEffect(() => {
    registerSongs(tamilSongs);
  }, []);

  return (
    <section className="px-4 bg-darkbg sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          Tamil <span className="text-neon">Hits</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {tamilSongs.map((song) => {
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
                  playSong(song, tamilSongs, "tamil");
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

export default TamilSongs;