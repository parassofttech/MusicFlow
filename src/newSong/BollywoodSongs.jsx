import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { ArrowLeft, Play } from "lucide-react";

const bollywoodSongs = [
  
  
  {
  
    title: "Shararat",
    artist: "Jasmine Sandlas, Shashwat Sachdev",
    cover:
      "https://pagalnew.com/coverimages/shararat-dhurandhar-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/52706",
  },{
  
    title: "Bandhu 2.0",
    artist: "Kavita Sheth and Neeraj Shridhar",
    cover:
      "https://southmelody.com/upload_file/4/65/230x230/thumb_6a329636dd76d.webp",
    url: "https://pagalsongz.com/listen/bandhu-2-0.mp3",
  },
  
  {
  
    title: "Leher",
    artist: "Arijit Singh",
    cover:
      "https://koshalworld.com/siteuploads/thumb/sft172/85950_4.webp",
    url: "https://koshalworld.com/files/download/id/85950",
  },
  {
  
    title: "Kesariya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/kesariya-brahmastra-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/30350",
  },
  {
    title: "Heeriye",
    artist: "Arijit Singh, Jasleen Royal",
    cover:
      "https://pagalnew.com/coverimages/heeriye-arijit-singh-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44105",
  },
  
  {
    title: "Tum Se",
    artist: "Varun Jain, Sachin-Jigar",
    cover: "https://pagalnew.com/coverimages/tum-se-teri-baaton-mein-aisa-uljha-jiya-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/45398",
  },
  {
    title: "Akhiyaan Gulaab",
    artist: "Mitraz",
    cover: "https://pagallworlds.com/wp-content/uploads/2024/01/Akhiyaan-Gulaab.jpg",
    url: "https://pagallworlds.com/wp-content/uploads/2024/12/Akhiyaan-Gulaab-SlowedreverbMitrazteri-Baaton-Mein-Aisa-Uljha-Jiyasr-Lofijftkyksw.mp3",
  },
  {
    title: "Ishq Jaisa Kuch",
    artist: "Vishal-Shekhar",
    cover: "https://pagalnew.com/coverimages/ishq-jaisa-kuch-fighter-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44934",
  },
  {
    title: "Chaleya",
    artist: "Arijit Singh, Shilpa Rao",
   cover:
          "https://pagalnew.com/coverimages/chaleya-jawan-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/43094",
  },
  {
    title: "Heeriye",
    artist: "Arijit Singh, Jasleen Royal",
    cover:
      "https://pagalnew.com/coverimages/heeriye-arijit-singh-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44105",
  },
  {
    title: "Tum Kya Mile",
    artist: "Arijit Singh, Shreya Ghoshal",
    cover: "https://pagalnew.com/coverimages/tum-kya-mile-rocky-aur-rani-kii-prem-kahaani-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/42473",
  },
  
  {
    title: "Tere Vaaste",
    artist: "Varun Jain",
    cover: "https://pagalnew.com/coverimages/tere-vaaste-zara-hatke-zara-bachke-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/42135",
  },
  {
    title: "Pehle Bhi Main",
    artist: "Vishal Mishra",
    cover: "https://pagalnew.com/coverimages/Pehle-Bhi-Main-ANIMAL-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44540",
  },
  {
    title: "Hua Main",
    artist: "Raghav Chaitanya",
    cover: "https://pagalnew.com/coverimages/hua-main-animal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/43954",
  },
  {
    title: "Satranga",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/satranga-animal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44104",
  },
  // {
  //   title: "Tum Se Hi (Reels Version)",
  //   artist: "Various Artists",
  //   cover: "https://pagalnew.com/coverimages/tum-se-hi-500-500.jpg",
  //   url: "https://example.com/tum-se-hi.mp3",
  // },
   {
    title: "Laal Pari",
    artist: "Housefull 5",
    cover: "https://pagalnew.com/coverimages/laal-pari-housefull5-500-500.jpg",
    url: "https://example.com/laal-pari.mp3",
  },
  {
    title: "What Jhumka",
    artist: "Arijit Singh, Jonita Gandhi",
    cover: "https://pagalnew.com/coverimages/what-jhumka-rocky-rani-500-500.jpg",
    url: "https://example.com/what-jhumka.mp3",
  },
  {
    title: "Oo Bolega Ya Oo Oo Bolega 2.0",
    artist: "Devi Sri Prasad",
    cover: "https://pagalnew.com/coverimages/oo-bolega-pushpa-500-500.jpg",
    url: "https://example.com/oo-bolega-2.mp3",
  },
  {
    title: "Jhoome Jo Pathaan",
    artist: "Arijit Singh, Sukriti Kakar",
    cover: "https://pagalnew.com/coverimages/jhoome-jo-pathaan-500-500.jpg",
    url: "https://example.com/jhoome-jo-pathaan.mp3",
  },
  {
    title: "Naatu Naatu",
    artist: "Rahul Sipligunj, Kaala Bhairava",
    cover: "https://pagalnew.com/coverimages/naatu-naatu-rrr-500-500.jpg",
    url: "https://example.com/naatu-naatu.mp3",
  },
  {
    title: "Zinda Banda",
    artist: "Anirudh Ravichander",
    cover: "https://pagalnew.com/coverimages/zinda-banda-jawan-500-500.jpg",
    url: "https://example.com/zinda-banda.mp3",
  },
  {
    title: "Kala Chashma",
    artist: "Badshah, Neha Kakkar",
    cover: "https://pagalnew.com/coverimages/kala-chashma-500-500.jpg",
    url: "https://example.com/kala-chashma.mp3",
  },
  {
    title: "Dilbar (Remix)",
    artist: "Neha Kakkar",
    cover: "https://pagalnew.com/coverimages/dilbar-remix-500-500.jpg",
    url: "https://example.com/dilbar-remix.mp3",
  },
   {
    title: "Satranga",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/dilbar-remix-500-500.jpg",
    url: "https://example.com/satranga.mp3",
  },
  {
    title: "Hua Main",
    artist: "Raghav Chaitanya",
    cover: "https://pagalnew.com/coverimages/hua-main-animal-500-500.jpg",
    url: "https://example.com/hua-main.mp3",
  },
  {
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/dilbar-remix-500-500.jpg",
    url: "https://example.com/tujhe-kitna-chahne-lage.mp3",
  },
  {
    title: "Bekhayali",
    artist: "Sachet Tandon",
    cover: "https://pagalnew.com/coverimages/bekhayali-kabir-singh-500-500.jpg",
    url: "https://example.com/bekhayali.mp3",
  },
  {
    title: "Lo Safar",
    artist: "Jubin Nautiyal",
    cover: "https://pagalnew.com/coverimages/lo-safar-baaghi2-500-500.jpg",
    url: "https://example.com/lo-safar.mp3",
  },
  {
    title: "Main Royaan (Reels Version)",
    artist: "Tanveer Evan",
    cover: "https://pagalnew.com/coverimages/main-royaan-500-500.jpg",
    url: "https://example.com/main-royaan.mp3",
  },
  {
    title: "Phir Bhi Tumko Chaahunga",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/phir-bhi-tumko-chaahunga-half-girlfriend-500-500.jpg",
    url: "https://example.com/phir-bhi-tumko-chaahunga.mp3",
  },

  {

    title: "Chaleya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/chaleya-jawan-500-500.jpg",
    url: "https://example.com/chaleya.mp3",
  },
  {
  
    title: "O Maahi",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-maahi-dunki-500-500.jpg",
    url: "https://example.com/omaahi.mp3",
  },
  {
  
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    cover:
      "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
    url: "https://example.com/tumhiho.mp3",
  },
  {
  
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    cover:
      "https://pagalnew.com/coverimages/raataan-lambiyan-shershaah-500-500.jpg",
    url: "https://example.com/raataan-lambiyan.mp3",
  },
  {

    title: "Shayad",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Shayad-Love-Aaj-Kal-500-500.jpg",
    url: "https://example.com/shayad.mp3",
  },
  {

    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    cover:
      "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
    url: "https://example.com/tera-ban-jaunga.mp3",
  },
  {
  
    title: "Khairiyat",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Khairiyat-Chhichhore-500-500.jpg",
    url: "https://example.com/khairiyat.mp3",
  },
  {
    
    title: "Hawayein",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Hawayein-Jab-Harry-Met-Sejal-(Original-Motion-Picture-Soundtrack)-500-500.jpg",
    url: "https://example.com/hawayein.mp3",
  },
  {
  
    title: "O Bedardeya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-bedardeya-tu-jhoothi-main-makkaar-500-500.jpg",
    url: "https://example.com/o-bedardeya.mp3",
  },
  {
  
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
    <div className= "bg-darkbg text-white px-6 p-24 relative overflow-hidden">

      {/* 🔙 Header */}
      <div className="flex items-center gap-3 mt-4">
        <ArrowLeft
          className="cursor-pointer hover:text-neon"
          onClick={() => navigate("/")}
        />
        <h1 className="text-2xl font-bold">
          Bollywood <span className="text-neon">Hits</span>
        </h1>
      </div>

      {/* 🎧 Songs List */}
      <div className="mt-10 space-y-3">
        {bollywoodSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, bollywoodSongs, "punjabi");
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

export default BollywoodSongs;