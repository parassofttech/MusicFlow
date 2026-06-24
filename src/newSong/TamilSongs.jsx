import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { ArrowLeft, Play } from "lucide-react";

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
   {
    id: "t11",
    title: "Monica",
    artist: "Anirudh Ravichander, Sublahshini, Asal Kolaar",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273c0d3c0c3c0d3c0c3c0d3c0c3",
    url: "https://example.com/monica.mp3",
  },
  {
    id: "t12",
    title: "Kanimaa",
    artist: "Santhosh Narayanan",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273d1d1d1d1d1d1d1d1d1d1d1d1",
    url: "https://example.com/kanimaa.mp3",
  },
  {
    id: "t13",
    title: "Chuttamalle",
    artist: "Anirudh Ravichander, Shilpa Rao",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273e2e2e2e2e2e2e2e2e2e2e2e2",
    url: "https://example.com/chuttamalle.mp3",
  },
  {
    id: "t14",
    title: "Fear Song",
    artist: "Anirudh Ravichander",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f3f3f3f3f3f3f3f3f3f3f3f3",
    url: "https://example.com/fear-song.mp3",
  },
  {
    id: "t15",
    title: "Daavudi",
    artist: "Anirudh Ravichander",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273a1a1a1a1a1a1a1a1a1a1a1a1",
    url: "https://example.com/daavudi.mp3",
  },
  {
    id: "t16",
    title: "Whistle Podu",
    artist: "Anirudh Ravichander",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273b2b2b2b2b2b2b2b2b2b2b2b2",
    url: "https://example.com/whistle-podu.mp3",
  },
  {
    id: "t17",
    title: "Spark",
    artist: "Anirudh Ravichander",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273c4c4c4c4c4c4c4c4c4c4c4c4",
    url: "https://example.com/spark.mp3",
  },
  {
    id: "t18",
    title: "Ranjithame",
    artist: "Vijay, M. M. Manasi",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273d5d5d5d5d5d5d5d5d5d5d5d5",
    url: "https://example.com/ranjithame.mp3",
  },
  {
    id: "t19",
    title: "Chaleya (Tamil Version Trending)",
    artist: "Arijit Singh (Tamil Version)",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273e6e6e6e6e6e6e6e6e6e6e6e6",
    url: "https://example.com/chaleya-tamil.mp3",
  },
  {
    id: "t20",
    title: "Jolly O Gymkhana",
    artist: "Thalapathy Vijay",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f7f7f7f7f7f7f7f7f7f7f7f7",
    url: "https://example.com/jolly-o-gymkhana.mp3",
  },
  {
    id: "t21",
    title: "Peelings (Pushpa 2 Tamil Version)",
    artist: "DSP",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273a9a9a9a9a9a9a9a9a9a9a9a9",
    url: "https://example.com/peelings.mp3",
  },
  
{
  id: "t22",
  title: "Monica",
  artist: "Anirudh Ravichander",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273b1b1b1b1b1b1b1b1b1b1b1b1",
  url: "https://example.com/monica.mp3",
},
{
  id: "t23",
  title: "Kanimaa",
  artist: "Santhosh Narayanan",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c2c2c2c2c2c2c2c2c2c2c2c2",
  url: "https://example.com/kanimaa.mp3",
},
{
  id: "t24",
  title: "Chuttamalle",
  artist: "Anirudh Ravichander",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273d3d3d3d3d3d3d3d3d3d3d3d3",
  url: "https://example.com/chuttamalle.mp3",
},
{
  id: "t25",
  title: "Fear Song",
  artist: "Anirudh Ravichander",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273e4e4e4e4e4e4e4e4e4e4e4e4",
  url: "https://example.com/fearsong.mp3",
},
{
  id: "t26",
  title: "Daavudi",
  artist: "Anirudh Ravichander",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273f5f5f5f5f5f5f5f5f5f5f5f5",
  url: "https://example.com/daavudi.mp3",
},
{
  id: "t27",
  title: "Whistle Podu",
  artist: "Anirudh Ravichander",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273a1a1a1a1a1a1a1a1a1a1a1a1",
  url: "https://example.com/whistlepodu.mp3",
},
{
  id: "t28",
  title: "Spark",
  artist: "Anirudh Ravichander",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273b2b2b2b2b2b2b2b2b2b2b2b2",
  url: "https://example.com/spark.mp3",
},
{
  id: "t29",
  title: "Ranjithame",
  artist: "Vijay",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c3c3c3c3c3c3c3c3c3c3c3c3",
  url: "https://example.com/ranjithame.mp3",
},
{
  id: "t30",
  title: "Chaleya (Tamil Version)",
  artist: "Arijit Singh",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273d4d4d4d4d4d4d4d4d4d4d4d4",
  url: "https://example.com/chaleyatamil.mp3",
},
{
  id: "t31",
  title: "Jolly O Gymkhana",
  artist: "Vijay",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273e5e5e5e5e5e5e5e5e5e5e5e5",
  url: "https://example.com/jollyogymkhana.mp3",
},
{
  id: "t32",
  title: "Katchi Sera",
  artist: "Sai Abhyankkar",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c9c9c9c9c9c9c9c9c9c9c9c9",
  url: "https://example.com/katchisera.mp3",
},
{
  id: "t33",
  title: "Aasa Kooda",
  artist: "Sai Abhyankkar",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273a7a7a7a7a7a7a7a7a7a7a7a7",
  url: "https://example.com/aasakooda.mp3",
},
{
  id: "t34",
  title: "Inimel",
  artist: "Shruti Haasan",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c9c9c9c9c9c9c9c9c9c9c9c9",
  url: "https://example.com/inimel.mp3",
},
{
  id: "t35",
  title: "Kaathu Mela",
  artist: "Paal Dabba",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c9c9c9c9c9c9c9c9c9c9c9c9",
  url: "https://example.com/kaathumela.mp3",
},
{
  id: "t36",
  title: "Adangaatha Asuran",
  artist: "Raayan",
  cover:
    "https://i.scdn.co/image/https://i.scdn.co/image/ab67616d0000b273a111a111a111a111a111a111",
  url: "https://example.com/adangaathaasuran.mp3",
},
{
  id: "t37",
  title: "Hunter Vantaar",
  artist: "Vettaiyan",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273e1e1e1e1e1e1e1e1e1e1e1e1",
  url: "https://example.com/huntervantaar.mp3",
},
{
  id: "t38",
  title: "Peelings (Pushpa 2 Tamil Version)",
  artist: "DSP",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273a9a9a9a9a9a9a9a9a9a9a9a9",
  url: "https://example.com/peelings.mp3",
},
{
  id: "t39",
  title: "Anbe Peranbe (Re-trending Reels)",
  artist: "A.R. Rahman",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c9c9c9c9c9c9c9c9c9c9c9c9",
  url: "https://example.com/kaathumela.mp3",
},
{
  id: "t40",
  title: "Mayakkama Kalakkama (Thiruchitrambalam vibe edits)",
  artist: "Dhanush, Anirudh Ravichander",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273b222b222b222b222b222b222",
  url: "https://example.com/mayakkama-kalakkama.mp3",
},
{
  id: "t41",
  title: "Nira (Takkar)",
  artist: "Sid Sriram, Gautham Vasudev Menon",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c9c9c9c9c9c9c9c9c9c9c9c9",
  url: "https://example.com/kaathumela.mp3",
},
{
  id: "t42",
  title: "Usura Uruvi (Lover)",
  artist: "Sean Roldan",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273d444d444d444d444d444d444",
  url: "https://example.com/usura-uruvi.mp3",
},
{
  id: "t43",
  title: "Yaar Azhaippadhu (Maara)",
  artist: "Sid Sriram",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273e555e555e555e555e555e555",
  url: "https://example.com/yaar-azhaippadhu.mp3",
}
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
     <div className= "bg-darkbg text-white px-6 p-24 relative overflow-hidden">

      {/* 🔙 Header */}
      <div className="flex items-center gap-3 mt-4">
        <ArrowLeft
          className="cursor-pointer hover:text-neon"
          onClick={() => navigate("/")}
        />
        <h1 className="text-2xl font-bold">
          Tamil <span className="text-neon">Hits</span>
        </h1>
      </div>

      {/* 🎧 Songs List */}
      <div className="mt-10 space-y-3">
        {tamilSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, tamilSongs, "punjabi");
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

export default TamilSongs;