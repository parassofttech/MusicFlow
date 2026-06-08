import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";

const bollywoodSongs = [
  {
    id: "b1",
    title: "Kesariya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/kesariya-brahmastra-500-500.jpg",
    url: "https://example.com/kesariya.mp3",
  },
  {
    id: "b2",
    title: "Heeriye",
    artist: "Arijit Singh, Jasleen Royal",
    cover:
      "https://pagalnew.com/coverimages/heeriye-arijit-singh-500-500.jpg",
    url: "https://example.com/heeriye.mp3",
  },
  {
    id: "b3",
    title: "Chaleya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/chaleya-jawan-500-500.jpg",
    url: "https://example.com/chaleya.mp3",
  },
  {
    id: "b4",
    title: "O Maahi",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-maahi-dunki-500-500.jpg",
    url: "https://example.com/omaahi.mp3",
  },
  {
    id: "b5",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    cover:
      "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
    url: "https://example.com/tumhiho.mp3",
  },
  {
    id: "b6",
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    cover:
      "https://pagalnew.com/coverimages/raataan-lambiyan-shershaah-500-500.jpg",
    url: "https://example.com/raataan-lambiyan.mp3",
  },
  {
    id: "b7",
    title: "Shayad",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Shayad-Love-Aaj-Kal-500-500.jpg",
    url: "https://example.com/shayad.mp3",
  },
  {
    id: "b8",
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    cover:
      "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
    url: "https://example.com/tera-ban-jaunga.mp3",
  },
  {
    id: "b9",
    title: "Khairiyat",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Khairiyat-Chhichhore-500-500.jpg",
    url: "https://example.com/khairiyat.mp3",
  },
  {
    id: "b10",
    title: "Hawayein",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Hawayein-Jab-Harry-Met-Sejal-(Original-Motion-Picture-Soundtrack)-500-500.jpg",
    url: "https://example.com/hawayein.mp3",
  },
  {
    id: "b11",
    title: "O Bedardeya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-bedardeya-tu-jhoothi-main-makkaar-500-500.jpg",
    url: "https://example.com/o-bedardeya.mp3",
  },
  {
    id: "b12",
    title: "Maan Meri Jaan",
    artist: "King",
    cover:
      "https://pagalnew.com/coverimages/Maan-Meri-Jaan-Champagne-Talk-500-500.jpg",
    url: "https://example.com/maan-meri-jaan.mp3",
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
    <section className="px-4 bg-darkbg sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          Bollywood <span className="text-neon">Hits</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {bollywoodSongs.map((song) => {
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
                  playSong(song, bollywoodSongs, "bollywood");
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

export default BollywoodSongs;