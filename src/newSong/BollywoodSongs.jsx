import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { ArrowLeft, Play } from "lucide-react";

const bollywoodSongs = [
  {
  
    title: "Ishq Kameena 2.0  ",
    artist: "Sonu Nigam, Alka Yagnik, Akasa	",
    cover:
      "https://pagalnew.com/coverimages/ishq-kameena-2-baby-do-die-do-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/54084",
  },
  {
  
    title: "Saree   ",
    artist: "Sanju Rathod	 ",
    cover:
      "https://pagalnew.com/coverimages/saree-dhamaal-4-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/54058",
  },
  {
  
    title: "Deewane Hain  ",
    artist: "Anand Raaj Anand, Amruta Fadnavis			",
    cover:
      "https://pagalnew.com/coverimages/deewane-hain-welcome-to-the-jungle-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/54031",
  },
  {
  
    title: "Qeher   ",
    artist: "Guru Randhawa			",
    cover:
      "https://pagalnew.com/coverimages/qeher-dhamaal-4-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53989",
  }, 
  {
  
    title: "Chatni 	",
    artist: "Neelkamal Singh, Mamta Sharma	",
    cover:
      "https://pagalnew.com/coverimages/chatni-dhamaal-4-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53981",
  },
  {
  
    title: "Vallah 	  ",
    artist: "Harrdy Sandhu, Bayanni				",
    cover:
      "https://pagalnew.com/coverimages/vallah-cocktail-2-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53950",
  },
  {
  
    title: "Ucha Lamba Kad Forever  ",
    artist: "Anand Raaj, Vikram Montrose, Rubai	",
    cover:
      "https://pagalnew.com/coverimages/chunnari-chunnari-hai-jawani-toh-ishq-hona-hai-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53893",
  },
  {
  
    title: "Tujhko  ",
    artist: "Arijit Singh, Sunidhi Chauhan	",
    cover:
      "https://pagalnew.com/coverimages/tujhko-cocktail-2-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53817",
  },
  {
  
    title: "Chunnari Chunnari  ",
    artist: "IP Singh, Jonita Gandhi",
    cover:
      "https://pagalnew.com/coverimages/chunnari-chunnari-hai-jawani-toh-ishq-hona-hai-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53816",
  },
  {
  
    title: "Mashooqa  ",
    artist: "Raghav Chaitanya, Ruaa Kayy 					",
    cover:
      "https://pagalnew.com/coverimages/mashooqa-cocktail-2-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53779",
  },
  {
  
    title: "Title Track ",
    artist: "Shaan, Priya Patidar		",
    cover:
      "https://pagalnew.com/coverimages/title-track-welcome-to-the-jungle-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53778",
  },{
  
    title: "Tera Ho Jau  ",
    artist: "Stebin Ben, Jonita Gandhi  ",
    cover:
      "https://pagalnew.com/coverimages/tera-ho-jaun-hai-jawani-toh-ishq-hona-hai-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53715",
  },
  {
  
    title: "Humne Wahin Lagaya Dil ",
    artist: "Badshah, Krish Mondal Kishore Mondal,",
    cover:
      "https://pagalnew.com/coverimages/humne-wahin-lagaya-dil-pati-patni-aur-woh-do-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53695",
  },{
  
    title: "Khasiyat",
    artist: "Raghav Chaitanya, Jonita Gandhi  ",
    cover:
      "https://pagalnew.com/coverimages/khasiyat-chand-mera-dil-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/53694",
  },
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
    cover: "https://pagalnew.com/coverimages/laal-pari-housefull-5-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/51332",
  },
  {
    title: "What Jhumka",
    artist: "Arijit Singh, Jonita Gandhi",
    cover: "https://pagalnew.com/coverimages/what-jhumka-rocky-aur-rani-kii-prem-kahaani-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/42684",
  },
  {
    title: "Oo Bolega Ya Oo Oo Bolega",
    artist: "Devi Sri Prasad",
    cover: "https://pagalnew.com/coverimages/oo-bolega-ya-oo-oo-bolega-pushpa-the-rise-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/23014",
  },
  {
    title: "Jhoome Jo Pathaan",
    artist: "Arijit Singh, Sukriti Kakar",
    cover: "https://pagalnew.com/coverimages/Jhoome-Jo-Pathaan-Vishal-Shekhar-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/37328",
  },
  {
    title: "Naatu Naatu",
    artist: "Rahul Sipligunj, Kaala Bhairava",
    cover: "https://pagallworlds.com/wp-content/uploads/2024/01/Naatu-Naatu.jpg",
    url: "https://pagallworlds.com/wp-content/uploads/2024/01/Naatu-Naatu.mp3",
  },
  {
    title: "Zinda Banda",
    artist: "Anirudh Ravichander",
    cover: "https://pagalnew.com/coverimages/zinda-banda-jawan-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/42879",
  },
  // {
  //   title: "Kala Chashma",
  //   artist: "Badshah, Neha Kakkar",
  //   cover: "https://pagalnew.com/coverimages/kala-chashma-500-500.jpg",
  //   url: "https://example.com/kala-chashma.mp3",
  // },
  {
    title: "Dilbar",
    artist: "Neha Kakkar",
    cover: "https://pagalnew.com/coverimages/Dilbar-Satyameva-Jayate-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/2762",
  },
 
  {
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh",
    cover: "https://hindi-cover.djpunjab.app/cover/iRTlg12z6NUbVoAwfiSdpQ==/tujhe-kitna-chahne-lage-from-kabir-singh--cover-image.webp",
    url: "https://cdnsongs.com/music/data/Hindi_Movies/202605/Top_50_Hindi_Movies_Song/128/Tujhe_Kitna_Chahne_Lage.mp3",
  },
  {
    title: "Bekhayali",
    artist: "Sachet Tandon",
    cover: "https://pagalnew.com/coverimages/Bekhayali-Kabir-Singh-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/2384",
  },
  {
    title: "Lo Safar",
    artist: "Jubin Nautiyal",
    cover: "https://pagalnew.com/coverimages/Lo-Safar-Baaghi-2-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/2786",
  },
  {
    title: "Main Royaan",
    artist: "Tanveer Evan",
    cover: "https://pagalnew.com/coverimages/Maine-Royaan-Tanveer-Evan-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/19762",
  },
  {
    title: "Phir Kabhi",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/Phir-Kabhi-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4059",
  },

  
  {
  
    title: "O Maahi",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-maahi-dunki-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44800",
  },
  {
  
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Tum-Hi-Ho-Aashiqui-2-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/6024",
  },
  {
  
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    cover:
      "https://pagalnew.com/coverimages/raataan-lambiyan-shershaah-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/19028",
  },
  {

    title: "Shayad",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Shayad-Love-Aaj-Kal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/1890",
  },
  {

    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    cover:
      "https://hindi-cover.djpunjab.app/cover/4tJ4ecRoX1XNPimlqNRZ8w==/charismatic-sasha-shahid-cover-image.webp",
    url: "https://hindi1.djpunjab.app/load/z-ie5Oh3mLaY2uXwbSZ60A==/Tera%20Ban%20Jaunga%20(From%20Kabir%20Singh).mp3",
  },
  {
  
    title: "Khairiyat",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Khairiyat-Chhichhore-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/2632",
  },
  {
    
    title: "Hawayein",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Hawayein-Jab-Harry-Met-Sejal-(Original-Motion-Picture-Soundtrack)-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/3573",
  },
  {
  
    title: "O Bedardeya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-bedardeya-tu-jhoothi-main-makkaar-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/38802",
  },
  {
  
    title: "Maan Meri Jaan",
    artist: "King",
    cover:
      "https://pagalnew.com/coverimages/Maan-Meri-Jaan-Champagne-Talk-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/35703",
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