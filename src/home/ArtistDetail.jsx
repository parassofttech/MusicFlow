import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";

const artistData = {
  1: {
    name: "Arijit Singh",
    color: "bg-pink-500/70",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1739172212.jpg",
    songs: [
       {
        id: "a1",
        title: "Baatein Ye Kabhi Na",
        artist: "Arijit Singh",
        cover:
          "https://i1.sndcdn.com/artworks-000161795861-qr6543-t1080x1080.jpg",
        url: "https://koshalworld.com/files/download/id/8725",
      },
      {
        id: "a2",
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        cover:
          "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
        url: "https://hindi2.djpunjab.app/load/AA7dmwuC-r2yaTlk8GORew==/Tum%20Hi%20Ho%20(From%20Aashiqui%202).mp3",
      },
      {
        id: "a3",
        title: "Ae Dil H Mushkil",
        artist: "Arijit Singh",
        cover:
          "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
        url: "https://koshalworld.com/files/download/id/16435",
      },
      {
        id: "a4",
        title: "Thodi Jagah",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Thodi-Jagah-Marjaavaan-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/15848",
      },
      {
        id: "a5",
        title: "Dil Sambhal ja Zara",
        artist: "Arijit Singh",
        cover:
          "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.jpg",
        url: "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.mp3",
      },
      {
        id: "a6",
        title: "Tu Hi Hai Aashiqui",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Tu-Hi-Hai-Aashiqui-Duet-Dishkiyaoon-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/5467",
      },
      {
        id: "a7",
    title: "Phir Kabhi",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/Phir-Kabhi-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4059",
  },

  
  {
  id: "a8",
    title: "O Maahi",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/o-maahi-dunki-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44800",
  },
  {
    id: "a9",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Tum-Hi-Ho-Aashiqui-2-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/6024",
  },
  
  {
  id: "a10",
    title: "Shayad",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/Shayad-Love-Aaj-Kal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/1890",
  },
    ],
  },

  2: {
    name: "Neha Kakkar",
    color: "bg-red-500/70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizAhtBqCZJJ0-elqIA0JVwRLzfIEn_y_2ZQ&s",
    songs: [
      {
        id: "n1",
        title: "Dilbar",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Dilbar-Satyameva-Jayate-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/2762",
      },
      {
        id: "n2",
        title: "Candy Shop",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Candy-Shop-Tony-Kakkar-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/52773",
      },
      {
        id: "n3",
        title: "Coca Cola 2",
        artist: "Neha Kakkar",
        cover:
          "https://koshalworld.com/siteuploads/thumb/sft130/64903_4.webp",
        url: "https://koshalworld.com/files/download/id/64903",
      },
      {
        id: "n4",
        title: "Tu Pyaasa Hai",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Tu-Pyaasa-Hai-Neha-Kakkar-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/52243",
      },
      {
        id: "n5",
        title: "Aankh Marey",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Aankh-Marey-Simmba-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/2800",
      },
    ],
  },
  3: {
    name: "Sonu Nigam",
    color: "bg-pink-500/70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchFnhi65GtUKOA88mcHW8CaU7UW3bB0sLrQ&s",
    songs: [
       {
        id: "a1",
        title: "Suraj Hua Maddham",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/suraj-hua-maddham-k3g-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/12342",
      },
      {
        id: "a2",
        title: "Kal Ho Naa Ho",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Kal-Ho-Naa-Ho-Shankar-Ehsaan-Loy-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/11476",
      },
      {
        id: "a3",
        title: "Mere Haath Mein",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Mere-Haath-Mein-Fanaa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/9651",
      },
      {
        id: "a4",
        title: "Main Agar Kahoon",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Main-Agar-Kahoon-Om-Shanti-Om-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/9432",
      },
      {
        id: "a5",
        title: "Dil Dooba",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Dil-Dooba-Khakee-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/10642",
      },
      {
        id: "a6",
        title: "Tu Hi Hai Aashiqui",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/bole-chudiyan-k3g-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/12335",
      },
    ],
  },
  4: {
    name: "Shreya Ghoshal",
    color: "bg-pink-500/70",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/10q3Z1K52r/10q3Z1K52r/size_m_1717411303.jpg",
    songs: [
       {
        id: "a1",
        title: "Dola Re Dola",
        artist: "Shreya Ghoshal",
        cover:
          "https://pagalnew.com/coverimages/dola-re-dola-devdas-devdas-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/11740",
      },
      {
        id: "a2",
        title: "Tum Hi Ho",
        artist: "Shreya Ghoshal",
        cover:
          "https://pagalnew.com/coverimages/agar-tum-mil-jao-male-zeher-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/23072",
      },
      // {
      //   id: "a3",
      //   title: "Ae Dil H Mushkil",
      //   artist: "Shreya Ghoshal",
      //   cover:
      //     "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
      //   url: "https://koshalworld.com/files/download/id/16435",
      // },
      // {
      //   id: "a4",
      //   title: "Thodi Jagah",
      //   artist: "Shreya Ghoshal",
      //   cover:
      //     "https://pagalnew.com/coverimages/Thodi-Jagah-Marjaavaan-500-500.jpg",
      //   url: "https://pagalnew.com/128-downloads/15848",
      // },
      // {
      //   id: "a5",
      //   title: "Dil Sambhal ja Zara",
      //   artist: "Shreya Ghoshal",
      //   cover:
      //     "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.jpg",
      //   url: "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.mp3",
      // },
      // {
      //   id: "a6",
      //   title: "Tu Hi Hai Aashiqui",
      //   artist: "Arijit Singh",
      //   cover:
      //     "https://pagalnew.com/coverimages/Tu-Hi-Hai-Aashiqui-Duet-Dishkiyaoon-500-500.jpg",
      //   url: "https://pagalnew.com/128-downloads/5467",
      // },
    ],
  },
  5: {
    name: "Diljit Dosanjh",
    color: "bg-pink-500/70",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Diljit_Dosanjh.jpg/250px-Diljit_Dosanjh.jpg",
    songs: [
       {
    id: "d1",
    title: "Born To Shine",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f6d4f6aaf7d2a3dfcc5a2dd3",
    url: "https://p320.djpunjab.is/data/48/48617/296084/Born%20To%20Shine%20-%20Diljit%20Dosanjh.mp3",
  },
  {
    id: "d2",
    title: "GOAT",
    artist: "Diljit Dosanjh",
    cover:
      "hhttps://cover.djpunjab.is/48617/300x700/g.o.a.t-diljit-dosanjh.webp",
      url:"https://p320.djpunjab.is/data/48/48617/296070/G.O.A.T%20-%20Diljit%20Dosanjh.mp3"
  },
  {
    id: "d3",
    title: "Lover",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/50579/300x700/lover-diljit-dosanjh.webp",
    url: "hhttps://s320.djpunjab.is/data/48/50579/298266/Lover%20-%20Diljit%20Dosanjh.mp3",
  },
  {
    id: "d4",
    title: "Clash",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273d7b3e5a4c4a8f9fcbf1b7a2c",
    url: "https://example.com/clash.mp3",
  },
  {
    id: "d5",
    title: "Vibe",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2739d7f3c2b1a6e4f5d8c3b7a1e",
    url: "https://example.com/vibe.mp3",
  },
  {
    id: "d6",
    title: "Lemonade",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2737b6e5c4d3f2a1b9c8d7e6f5a",
    url: "https://example.com/lemonade.mp3",
  },
  {
    id: "d7",
    title: "Do You Know",
    artist: "Diljit Dosanjh",
    cover:
      "https://pagalnew.com/coverimages/Do-You-Know-Diljit-Dosanjh-500-500.jpg",
    url: "https://example.com/do-you-know.mp3",
  },
  {
    id: "d8",
    title: "Laembadgini",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2731c8f7d6e5b4a3c2d1f9e8d7c",
    url: "https://example.com/laembadgini.mp3",
  },
  {
    id: "d9",
    title: "Hass Hass",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2738e7d6c5b4a3f2e1d9c8b7a6f",
    url: "https://example.com/hass-hass.mp3",
  },
  {
    id: "d10",
    title: "Magic",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2732a1b3c4d5e6f7a8b9c0d1e2f",
    url: "https://example.com/magic.mp3",
  },
  {
    id: "d11",
    title: "Kinni Kinni",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2733d4e5f6a7b8c9d0e1f2a3b4c",
    url: "https://example.com/kinni-kinni.mp3",
  },
  {
    id: "d12",
    title: "G.O.A.T",
    artist: "Diljit Dosanjh",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734f8e69b0e4e1b8f4d63f3c29",
    url: "https://example.com/g-o-a-t.mp3",
  },
      
    ],
  },
  6: {
    name: "Jubin Nautiyal",
    color: "bg-pink-500/70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA09o3siO3FXUmqUTmt683ecM5HE58fz5TEA&s",
    songs: [
       {
        id: "a1",
        title: "Lut Gaye",
        artist: "Jubin Nautiyal",
        cover:
          "https://pagalnew.com/coverimages/lut-gaye-jubin-nautiyal-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/3796",
      },
      {
        id: "a2",
        title: "Kaabil Hoon",
        artist: "Jubin Nautiyal",
        cover:
          "https://pagalnew.com/coverimages/Kaabil-Hoon-Jubin-Nautiyal-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/3339",
      },
      
    ],
  },
  7: {
    name: "Lata Mangeshkar",
    color: "bg-pink-500/70",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1716892417.jpg",
    songs: [
       {
        id: "a1",
        title: "Ajib Dastan Hai Yeh",
        artist: "Lata Mangeshkar",
        cover:
          "https://i1.sndcdn.com/artworks-000161795861-qr6543-t1080x1080.jpg",
        url: "https://koshalworld.com/files/download/id/15354",
      },
      {
        id: "a2",
        title: "Piya Tose Naina Lage Re",
        artist: "Lata Mangeshkar",
        cover:
          "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
        url: "https://pagalnew.com/128-downloads/1497",
      },
      
    ],
  },
  8: {
    name: "Kishore Kumar",
    color: "bg-pink-500/70",
    image:
      "https://s.saregama.tech/image/c/m/1/68/1f/3588_1624534522.jpg",
    songs: [
       {
        id: "a1",
        title: "O Mere Dil Ke Chain",
        artist: "Kishore Kumar",
        cover:
          "https://pagalnew.com/coverimages/o-mere-dil-ke-chain-mere-jeevan-saathi-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/34708",
      },
      {
        id: "a2",
        title: "Mere Sapnon Ki Rani",
        artist: "Kishore Kumar",
        cover:
          "https://pagalnew.com/coverimages/Mere-Sapnon-Ki-Rani-Aradhana-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/2175",
      },
      
      
    ],
  },
  9: {
    name: "Guru Randhawa",
    color: "bg-pink-500/70",
    image:
      "https://in.bmscdn.com/iedb/artist/images/website/poster/large/guru-randhawa-1065986-22-09-2017-12-29-56.jpg",
    songs: [
       {
        id: "a1",
        title: "Lahore",
        artist: "Guru Randhawa",
        cover:
          "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/4170",
      },
      {
        id: "a2",
        title: "High Rated Gabru",
        artist: "Guru Randhawa",
        cover:
          "https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/4173",
      },
      {
    id: "gr3",
    title: "Suit Suit",
    artist: "Guru Randhawa",
    cover: "https://example.com/covers/suit-suit.jpg",
    url: "https://example.com/songs/suit-suit.mp3",
  },
  {
    id: "gr4",
    title: "Ishare Tere",
    artist: "Guru Randhawa ft. Dhvani Bhanushali",
    cover: "https://example.com/covers/ishare-tere.jpg",
    url: "https://example.com/songs/ishare-tere.mp3",
  },
  {
    id: "gr5",
    title: "Slowly Slowly",
    artist: "Guru Randhawa ft. Pitbull",
    cover: "https://example.com/covers/slowly-slowly.jpg",
    url: "https://example.com/songs/slowly-slowly.mp3",
  },
  {
    id: "gr6",
    title: "Moon Rise",
    artist: "Guru Randhawa",
    cover: "https://example.com/covers/moon-rise.jpg",
    url: "https://example.com/songs/moon-rise.mp3",
  },
  {
    id: "gr7",
    title: "Designer",
    artist: "Guru Randhawa",
    cover: "https://example.com/covers/designer.jpg",
    url: "https://example.com/songs/designer.mp3",
  },
  {
    id: "gr8",
    title: "Black",
    artist: "Guru Randhawa",
    cover: "https://example.com/covers/black.jpg",
    url: "https://example.com/songs/black.mp3",
  },
  {
    id: "gr9",
    title: "Slowly Slowly",
    artist: "Guru Randhawa ft. Pitbull",
    cover: "https://example.com/covers/slowly-slowly.jpg",
    url: "https://example.com/songs/slowly-slowly.mp3",
  },
      
      
    ],
  },
  10: {
    name: "Jass Manak",
    color: "bg-pink-500/70",
    image:
      "https://i1.sndcdn.com/artworks-000384676971-xnbywk-t500x500.jpg",
    songs: [
       {
        id: "a1",
        title: "Lehanga",
        artist: "Jass Manak",
        cover:
          "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
        url: "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1.mp3",
      },
      {
        id: "a2",
        title: "Prada",
        artist: "Jass Manak",
        cover:
          "https://pagalnew.com/coverimages/Prada-Jass-Manak-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/24808",
      },
      
      
    ],
  },
  11: {
    name: "Honey Singh",
    color: "bg-pink-500/70",
    image:
      "https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f",
    songs: [
       {
        id: "a1",
        title: "Brown Rang",
        artist: "Honey Singh",
        cover:
          "https://pagalnew.com/coverimages/Brown-Rang-International-Villager-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/24797",
      },
      {
        id: "a2",
        title: "Party All Night",
        artist: "Honey Singh",
        cover:
          "https://pagalnew.com/coverimages/Party-All-Night-Boss-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/6327",
      },
      
      
    ],
  },
};

const ArtistDetail = () => {
  const { id } = useParams();
  const { playSong, currentSong, registerSongs, } = useMusic();

  const navigate = useNavigate()
  const artist = artistData[id];

  
 useEffect(() => {
  if (artist?.songs?.length) {
    registerSongs(artist.songs);
  }
}, [id, artist]);

  if (!artist) {
    return (
      <div className="text-white p-6">
        Artist not found
      </div>
    );
  }

  return (
    <div 
    className={`text-white px-6 pb-24
              relative cursor-pointer  overflow-hidden
              ${artist.color}
              group shadow-lg
            `}
    >

      <ArrowLeft className="mt-4"
      onClick={()=>navigate("/")}/>
      {/* Artist Header */}
      <div className="flex items-center gap-6 mt-10">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-40 h-40 rounded-full object-cover shadow-xl"
        />

        <div>
          <p className="text-sm text-white">Artist</p>
          <h1 className="text-4xl font-bold">
            {artist.name}
          </h1>
          <p className="text-gray-200 mt-2">
            {artist.songs.length} Songs
          </p>
        </div>
      </div>

      {/* Songs List */}
      <div className="mt-10 space-y-3">
        {artist.songs.map((song, index) => (
          <motion.div
            key={song.id}
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              playSong(song, artist.songs, index, "popular")
            }
            className={`
              flex items-center justify-between
              bg-zinc-900/70 p-4 rounded-xl cursor-pointer
              ${
                currentSong?.url === song.url
                  ? "ring-2 ring-neon"
                  : ""
              }
            `}
          >

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
                <h4 className="font-semibold ">
                  {song.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {song.artist}
                </p>
              </div>
            </div>

            <Play className="text-neon" />
          </motion.div>
         

         

        ))}

            




      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default ArtistDetail;
