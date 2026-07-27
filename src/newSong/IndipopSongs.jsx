import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { ArrowLeft, Play } from "lucide-react";

const indipopSongs = [
{
    id: "i49",
    title: "Barsaat Na Zaya Karo 	",
    artist: "Kumar Sanu		",
    cover:
      "https://pagalnew.com/coverimages/Barsaat-Na-Zaya-Karo-Mohit-Dogra-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/54204",
  },
  {
    id: "i48",
    title: "Move Body 	",
    artist: "Skales, Zahrah S Khan	",
    cover:
      "https://pagalnew.com/coverimages/Move-Body-Skales-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/54199",
  },
  {
    id: "i47",
    title: "Saath	",
    artist: "Sachet Tandon, Parampara Tandon	",
    cover:
      "https://pagalnew.com/coverimages/Saath-Sachet-Tandon-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/54194",
  },
  {
    id: "i46",
    title: "Jawani Iraqi 		",
    artist: "Honey Singh, Simar Kaur 	",
    cover:
      "https://pagalnew.com/coverimages/Jawani-Iraqi-Yo-Yo-Honey-Singh-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53943",
  },
  {
    id: "i1",
    title: "Maan Meri Jaan",
    artist: "King",
    cover:
      "https://pagalnew.com/coverimages/Maan-Meri-Jaan-Champagne-Talk-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/35703",
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
      "https://pagalnew.com/coverimages/Excuses-Ap-Dhillon-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/23347",
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
    url: "https://pagalnew.com/128-downloads/23347",
  },
  {
    id: "i9",
    title: "Husn",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734e8c1f7f8d2e1c7b8a4f3d2c",
    url: "https://pagalnew.com/128-downloads/23347",
  },
  {
    id: "i10",
    title: "Cold Hours",
    artist: "Aleemrk",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f4a7c3d8e5b2a6c1d4e7f8a2",
    url: "https://pagalnew.com/128-downloads/23347",
  },
 {
    id: "i11",
    title: "Jo Tum Mere Ho",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273e0f0f2f1c2a3b4c5d6e7f8a9",
    url: "https://example.com/gfhfghcjo-tum-mere-ho.mp3",
},
{
    id: "i12",
    title: "Husn",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273a1b2c3d4e5f60718293a4b5c",
    url: "https://example.cvngchfgom/husn.mp3",
},
{
    id: "i13",
    title: "Sahiba",
    artist: "Aditya Rikhari",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273b2c3d4e5f60718293a4b5c6d",
    url: "https://example.com/jo-tum-mere-ho.mp",
},
{
    id: "i14",
    title: "Baarishein",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2736cb8d8c7a7b2c2d6e8d0c4f3",
    url: "https://example.comuhfgjdrgrthbfg/baarishein.mp3",
},
{
    id: "i15",
    title: "Kasoor",
    artist: "Prateek Kuhad",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273g9840lkfd3457945479w3c1d2e3f4051627384950a1b2",
    url: "https://example.coxcjnvcm/jdgfhgfo-tum-mere-ho.mp",
},
{
    id: "i16",
    title: "Kho Gaye Hum Kahan",
    artist: "Jasleen Royal",
    cover:
      "https://i.scdn.co/imajvdfvndfkvdfvdfge/5464gfbab67616d0000b273d3e465465f50617283940a1b2c3d4",
    url: "https://example.kdhfmghdkfnlgfhkcom/kho-gaye-hum-kahan.mp3",
},
{
    id: "i17",
    title: "Raatan Lambiyan (Indie Version)",
    artist: "Various Artists",
    cover:
      "https://i.scdn.co/image/ab67616d0gtfgbh000b273e5f60718293a4b5c6d7e8f901",
    url: "https://example.com/raatan-gglambiyan.mp3",
},
{
    id: "i18",
    title: "Aise Kyun",
    artist: "Mismatched OST",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2fghr64573f60718293a4b5c6d7e8f90123",
    url: "https://example.coghjfgdhgfm/aise-kyun.mp3",
},
{
    id: "i19",
    title: "Alag Aasmaan",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/ab67616d0000b27311223344556677889900aabb",
    url: "https://alag-aasmanme-ghumo.com/alafgbfgg-aasmaan.mp3",
},
{
    id: "i20",
    title: "Ishq",
    artist: "Faheem Abdullah",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273223344556677889900aabbcc",
    url: "https://ishq-faheem-abdullah.com/ishq.mp3",
},
{
    id: "i21",
    title: "Wishes",
    artist: "Talwiinder",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273111111111111111111111111",
    url: "https://wishes-tailwinder-song.com/wishes.mp3",
},
{
    id: "i22",
    title: "Dil Nu",
    artist: "AP Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273fdsgerfsf222222222222222222222222",
    url: "https://example.com/dil-nu.mp3",
},
{
    id: "i23",
    title: "Excuses",
    artist: "AP Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273dgdfgvvf333333333333333333333333",
    url: "https://example.com/excusedfgvdfs.mp3",
},
{
    id: "i24",
    title: "Brown Munde",
    artist: "AP Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0dfgfdg000fdfvb273444444444444444444444444",
    url: "https://example.com/brodfgwn-mundbxdfvbvbce.mp3",
},
{
    id: "i25",
    title: "Insane",
    artist: "AP Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000bdfgdg273555555555555555555555555",
    url: "https://example.com/insane.dfgdfgmp3",
},
{
    id: "i26",
    title: "Winning Speech",
    artist: "Karan Aujla",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2736dfgdfg66666666666666666666666",
    url: "https://example.com/winning-speech.dfgdgmp3",
},
{
    id: "i27",
    title: "Softly",
    artist: "Karan Aujla",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273777777777777777777777777",
    url: "https://example.com/softly.mp3",
},
{
    id: "i28",
    title: "Players",
    artist: "Karan Aujla",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273888888888888888888888888",
    url: "https://example.com/players.mp3",
},
{
    id: "i29",
    title: "One Love",
    artist: "Shubh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273999999999999999999999999",
    url: "https://example.comyton.com/songs/daytona.mp3/one-love.mp3",
},
{
    id: "i30",
    title: "Still Rollin",
    artist: "Shubh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273101010101010101010101010",
    url: "https://example.com/yton.com/songs/daytona.mp3still-rollin.mp3",
},
{
    id: "i31",
    title: "Cheques",
    artist: "Shubh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273121212121212121212121212",
    url: "https://example.com/cheques.mp3",
},
{
    id: "i32",
    title: "Haseen",
    artist: "Talwiinder",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273131313131313131313131313",
    url: "https://example.com/haseen.mp3",
},
{
    id: "i33",
    title: "Tere Bina",
    artist: "Zaeden",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273141414141414141414141414",
    url: "https://example.com/tere-bina.mp3",
},
{
    id: "i34",
    title: "You",
    artist: "Talwiinder",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273151515151515151515151515",
    url: "https://example.com/you.mp3",
},
{
    id: "i35",
    title: "Choo Lo",
    artist: "The Local Train",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273202020202020202020202020",
    url: "https://example.com/choo-lo.mp3",
},
{
    id: "i36",
    title: "Aaoge Tum Kabhi",
    artist: "The Local Train",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273171717171717171717171717",
    url: "https://example.com/aaoge-tum-kabhi.mp3",
},
{
    id: "i37",
    title: "Dil Beparvah",
    artist: "Ankur Tewari",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273202020202020202020202020",
    url: "https://example.com/dil-beparvah.mp3",
},
{
    id: "i38",
    title: "Udd Gaye",
    artist: "Ritviz",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273161616161616161616161616",
    url: "https://example.com/choo-lo.mp3",
},
{
    id: "i39",
    title: "Jeet",
    artist: "Ritviz",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273202020202020202020202020",
    url: "https://example.com/jeet.mp3",
},
{
    id: "i40",
    title: "Liggi",
    artist: "Ritviz",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273161616161616161616161616",
    url: "https://example.com/choo-lo.mp3",
},
{
    id: "i41",
    title: "Khali Khali",
    artist: "Papon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273202020202020202020202020",
    url: "https://example.com/khali-khali.mp3",
},
{
    id: "i42",
    title: "Main Tumhara",
    artist: "Dil Bechara OST",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273232323232323232323232323",
    url: "https://example.com/main-tumhara.mp3",
},
{
    id: "i43",
    title: "Sage",
    artist: "Ritviz",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273242424242424242424242424",
    url: "https://example.com/sage.mp3",
},
{
    id: "i44",
    title: "Raahi (Chill Version)",
    artist: "Anuv Jain",
    cover:
      "https://i.scdn.co/image/https://i.scdn.co/image/ab67616d0000b273202020202020202020202020",
    url: "https://example.com/raahi.mp3",
},
{
    id: "i45",
    title: "Enjoy Enjaami",
    artist: "Dhee, Arivu",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273262626262626262626262626",
    url: "https://example.com/enjoy-enjaami.mp3",
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
          Indipop <span className="text-neon">Hits</span>
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