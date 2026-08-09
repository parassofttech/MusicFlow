import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMusic } from "../context/MusicContext";

const punjabiSongs = [
  {
    id: "p1",
    title: "Lehanga",
    artist: "Jass Manak",
    cover: "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
    url: "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1.mp3",
  },
  {
    id: "p2",
    title: "Prada",
    artist: "Jass Manak",
    cover: "https://pagalnew.com/coverimages/Prada-Jass-Manak-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/24808",
  },
  {
    id: "p3",
    title: "Lahore",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4170",
  },
  {
    id: "p4",
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/4173",
  },
   {
    id: "d1",
    title: "Born To Shine",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/48617/300x700/g.o.a.t-diljit-dosanjh.webp",
    url: "https://p320.djpunjab.is/data/48/48617/296084/Born%20To%20Shine%20-%20Diljit%20Dosanjh.mp3",
  },
  {
    id: "d2",
    title: "GOAT",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/48617/300x700/g.o.a.t-diljit-dosanjh.webp",
    url: "https://p320.djpunjab.is/data/48/48617/296070/G.O.A.T%20-%20Diljit%20Dosanjh.mp3",
  },
  {
    id: "d3",
    title: "Lover",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/50579/300x700/lover-diljit-dosanjh.webp",
    url: "https://cdnsongs.com/music/data/Single_Track/202108/Lover/128/Lover_1.mp3",
  },
  {
    id: "d4",
    title: "Clash",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/48617/300x700/g.o.a.t-diljit-dosanjh.webp",
    url: "https://p320.djpunjab.is/data/48/48617/296071/Clash%20-%20Diljit%20Dosanjh.mp3",
  },
  {
    id: "d5",
    title: "Vibe",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/59029/300x700/bonafide-gur-sidhu.webp",
    url: "https://p320.djpunjab.is/data/48/59029/309830/Vibe%20-%20Gur%20Sidhu.mp3",
  },
  {
    id: "d6",
    title: "Lemonade",
    artist: "Diljit Dosanjh",
    cover:
      "https://pagalnew.com/coverimages/Lemonade-Drive-Thru-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/30300",
  },
  {
    id: "d7",
    title: "Do You Know",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.mr-jatt.im/thumb/33292/Do-You-Know-1.jpg",
    url: "https://cdnsongs.com/music/data/Single_Track/201609/Do_You_Know/128/Do_You_Know_1.mp3",
  },
  {
    id: "d8",
    title: "Laembadgini",
    artist: "Diljit Dosanjh",
    cover:
      "https://lq.djjohal.com/covers/55078/Laembadgini.jpg",
    url: "https://dl2.djring.com/sd2.djjohal.com/128/478322/Laembadgini(DJJOhAL.Com).mp3",
  },
  {
    id: "d9",
    title: "Hass Hass",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/54494/300x700/hass-hass-diljit-dosanjh.webp",
    url: "https://s320.djpunjab.is/data/48/54494/302986/Hass%20Hass%20-%20Diljit%20Dosanjh.mp3",
  },
  {
    id: "d10",
    title: "Magic",
    artist: "Diljit Dosanjh",
    cover:
      "https://pagalnew.com/coverimages/magic-diljit-dosanjh-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/45822",
  },
  {
    id: "d11",
    title: "Kinni Kinni",
    artist: "Diljit Dosanjh",
    cover:
      "https://pagalnew.com/coverimages/Kinni-Kinni-Ghost-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/43820",
  },
  
  {
    id: "ap1",
    title: "Excuses",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/Excuses-Ap-Dhillon-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/23347",
  },
  {
    id: "ap2",
    title: "Insane",
    artist: "AP Dhillon",
    cover:
      "https://cover.djpunjab.is/50071/300x700/insane-ap-dhillon.webp",
    url: "https://s320.djpunjab.is/data/48/50071/297697/Insane%20-%20AP%20Dhillon.mp3",
  },
  {
    id: "ap3",
    title: "Brown Munde",
    artist: "AP Dhillon, Gurinder Gill",
    cover:
      "https://pagalnew.com/coverimages/Brown-Munde-Ap-Dhillon-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/25007",
  },
  {
    id: "ap4",
    title: "With You",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/images/loading.svg",
    url: "https://pagalnew.com/128-downloads/43178",
  },
  {
    id: "ap5",
    title: "Summer High",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/Summer-High-Ap-Dhillon-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/32124",
  },
  {
    id: "ap6",
    title: "True Stories",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/True-Stories-AP-Dhillon-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/42378",
  },
  {
    id: "ap7",
    title: "Toxic",
    artist: "AP Dhillon",
    cover:
      "https://cover.mr-jatt.im/thumb/490924/Toxic-1.jpg",
    url: "https://cdnsongs.com/music/data/Single_Track/202010/Toxic/128/Toxic_1.mp3",
  },
  {
    id: "ap8",
    title: "Old Money",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/old-money-the-brownprint-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/48791",
  },
  {
    id: "ap9",
    title: "Dil Nu",
    artist: "AP Dhillon",
    cover:
      "https://cover.mr-punjab.com/artwork/56785.webp",
    url: "https://hq.mr-punjab.com/filehq/132276/128k/Dil Nu - AP Dhillon (Mr-Punjab.Com).html",
  },
  {
    id: "ap10",
    title: "STFU",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/STFU-AP-Dhillon-500-500nvjd.jdfgpg",
    url: "https://example.com/stfu.jhkhdgsxsmdgfdp3",
  },
  {
    id: "ap11",
    title: "Just Saying",
    artist: "AP Dhillon",
    cover:
      "https://pagalnew.com/coverimages/Just-Saying-AP-Dhillon-500-dfgjgkjghfj500.jpg",
    url: "https://example.com/justdfjgkgdsff-gdhsaying.mp3",
  },
  {
    id: "ka1",
    title: "Softly",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/softlsdfsdfy.jpg",
    url: "https://example.com/songsffsdsdfsd/softly.mp3",
  },
  {
    id: "ka2",
    title: "Admirin You",
    artist: "Karan Aujla",
    cover: "https://example.com/coversdsfs/admihjgjkrin-you.jpg",
    url: "https://example.com/songs/admghsdsfdsfsdfkirin-you.mp3",
  },
  {
    id: "ka3",
    title: "Winning Speech",
    artist: "Karan Aujla",
    cover: "https://example.com/couhokijers/winning-speech.sdfsjpg",
    url: "https://example.com/songs/winniupoikjng-speech.mdfsfp3",
  },
  {
    id: "ka4",
    title: "Wavy",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/wjhgsdfkjavy.jpg",
    url: "https://example.com/sdfsdsongs/drygrtegrtwavyhgkhj.mp3",
  },
  {
    id: "ka5",
    title: "Tauba Tauba",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/taubhja-tauba.jpg",
    url: "https://example.com/songs/tauba-thjgjaudgsdfdba.mp3",
  },
  {
    id: "ka6",
    title: "IDK HOW",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/idk-how.jpg",
    url: "https://example.com/songs/idk-how.mp3",
  },
  {
    id: "ka7",
    title: "Try Me",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/try-me.jpg",
    url: "https://example.com/songs/try-me.mp3",
  },
  {
    id: "ka8",
    title: "Don't Look",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/dont-look.jpg",
    url: "https://example.com/songs/dont-look.mp3",
  },
  {
    id: "ka9",
    title: "Players",
    artist: "Karan Aujla & Badshah",
    cover: "https://example.com/covers/players.jpg",
    url: "https://example.com/songs/players.mp3",
  },
  {
    id: "ka10",
    title: "Chitta Kurta",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/chitta-kurta.jpg",
    url: "https://example.com/songs/chitta-kurta.mp3",
  },
  {
    id: "ka11",
    title: "MF Gabhru",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/mf-gabhru.jpg",
    url: "https://examplgabhrudfkjfh985m/songs/mf-gabhru.mp3",
  },
  {
    id: "ka12",
    title: "Daytona",
    artist: "Karan Aujla",
    cover: "https://example.com/covers/daytona.jpg",
    url: "https://dayton.com/songs/daytona.mp3",
  },

  // 🎤 Shubh
  {
    id: "sh1",
    title: "Cheques",
    artist: "Shubh",
    cover: "https://example.com/covers/cheques.jpg",
    url: "https://example.com/syton.com/songs/daytona.mp3ongs/cheques.mp3",
  },
  {
    id: "sh2",
    title: "One Love",
    artist: "Shubh",
    cover: "https://example.com/covers/one-love.jpg",
    url: "https://example.com/sovyton.com/songs/daytona.mp3ngs/one-love.mp3",
  },
  {
    id: "sh3",
    title: "Elevated",
    artist: "Shubh",
    cover: "https://example.com/covers/elevated.jpg",
    url: "https://example.com/syton.com/songs/daytona.mp3ongs/elevated.mp3",
  },
  {
    id: "sh4",
    title: "Still Rollin",
    artist: "Shubh",
    cover: "https://example.com/covers/still-rollin.jpg",
    url: "https://example.comdfgdfgd/songs/still-rollin.mp3",
  },
  {
    id: "sh5",
    title: "No Love",
    artist: "Shubh",
    cover: "https://example.dfgdfgcom/covers/no-love.jpg",
    url: "https://examplecvxv.com/songs/no-love.mp3",
  },
  {
    id: "sh6",
    title: "We Rollin",
    artist: "Shubh",
    cover: "https://example.com/covers/we-rollin.jpg",
    url: "https://example.ccfvbcbfom/songs/we-rollin.mp3",
  },
  {
    id: "sh7",
    title: "Offshore",
    artist: "Shubh",
    cover: "https://example.comfgbf/covers/offshore.jpg",
    url: "https://example.com/cvbcsongs/offshore.mp3",
  },
  {
    id: "sh8",
    title: "Safety Off",
    artist: "Shubh",
    cover: "https://example.com/covers/safety-off.jpg",
    url: "https://example.com/songs/safety-off.mp3",
  },
  {
    id: "sh9",
    title: "Love Ya",
    artist: "Shubh",
    cover: "https://example.com/covers/love-ya.jpg",
    url: "https://example.com/songs/love-ya.mp3",
  },
  {
    id: "sh10",
    title: "Balenci",
    artist: "Shubh",
    cover: "https://example.com/covers/balenci.jpg",
    url: "https://example.com/songs/balenci.mp3",
  },
   {
    id: "sm1",
    title: "295",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/covers/295.jpg",
    url: "https://example.com/songs/295.mp3",
  },
  {
    id: "sm2",
    title: "Levels",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/covers/levels.jpg",
    url: "https://example.com/songs/levels.mp3",
  },
  {
    id: "sm3",
    title: "Same Beef",
    artist: "Sidhu Moose Wala ft. Bohemia",
    cover: "https://example.com/covers/same-beef.jpg",
    url: "https://example.com/songs/same-beef.mp3",
  },
  {
    id: "sm4",
    title: "So High",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/covers/so-high.jpg",
    url: "https://example.com/songs/so-high.mp3",
  },
  {
    id: "sm5",
    title: "The Last Ride",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/covers/the-last-ride.jpg",
    url: "https://example.com/songs/the-last-ride.mp3",
  },
  {
    id: "sm6",
    title: "Never Fold",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/covers/never-fold.jpg",
    url: "https://example.com/songs/never-fold.mp3",
  },
  {
    id: "sm7",
    title: "Bambiha Bole",
    artist: "Sidhu Moose Wala ft. Amrit Maan",
    cover: "https://example.fgdfsferf34fdfsvdcom/covers/bambiha-bole.jpg",
    url: "https://example.fthfcom/songs/bambiha-bole.mp3",
  },
  {
    id: "sm8",
    title: "Dear Mama",
    artist: "Sidhu Moose Wala",
    cover: "https://exampldsdvdvere.com/covers/dear-mama.jpg",
    url: "https://example.com/sdvdferweer43rongs/dear-mama.mp3",
  },
  {
    id: "sm9",
    title: "East Side Flow",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/coverewfdsers/east-side-flow.jpg",
    url: "https://example.com/songsdvdfe/east-side-flow.mp3",
  },
  {
    id: "sm10",
    title: "Aroma",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/covers/aroma.jpg",
    url: "https://example.com/cbfdgsongs/aroma.mp3",
  },
  {
    id: "sm11",
    title: "Everybody Hurts",
    artist: "Sidhu Moose Wala",
    cover: "https://example.com/covers/everybody-hurts.jpg",
    url: "https://example.com/dgergedrt43songs/everybody-hurts.mp3",
  },

  // 🎤 Guru Randhawa
  {
    id: "gr1",
    title: "Lahore",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
    url: "https://example.com/se43tgerfgdongs/lahore.mp3",
  },
  {
    id: "gr2",
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
    cover: "https://pagalnew.com/covghfhgberimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
    url: "https://example.com/sbn vghongs/high-rated-gabru.mp3",
  },
  {
    id: "gr3",
    title: "Suit Suit",
    artist: "Guru Randhawa",
    cover: "https://example.com/covgfhfghers/suit-suit.jpg",
    url: "https://example.com/songshnfgfh/suit-suit.mp3",
  },
  {
    id: "gr4",
    title: "Ishare Tere",
    artist: "Guru Randhawa ft. Dhvani Bhanushali",
    cover: "https://example.com/covers/ishaghjgre-tere.jpg",
    url: "https://example.com/songs/ishghjgjgare-tere.mp3",
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
    cover: "https://example.com/covers/mooghjgjn-rise.jpg",
    url: "https://example.com/songs/moonbhjg-rise.mp3",
  },
  {
    id: "gr7",
    title: "Designer",
    artist: "Guru Randhawa",
    cover: "https://example.com/coversfghrtr/designer.jpg",
    url: "https://example.com/songs/hdrtyhrtdesigner.mp3",
  },
  {
    id: "gr8",
    title: "Black",
    artist: "Guru Randhawa",
    cover: "https://example.com/coverdyhtdrgs/black.jpg",
    url: "https://example.com/songs/fhdtrblack.mp3",
  },
  // 🎤 Jass Manak
  {
    id: "jm1",
    title: "Lehanga",
    artist: "Jass Manak",
    cover: "https://pagalnew.com/coverimages/Lehanga-Jass-Manak-500-500.jpg",
    url: "https://example.com/lehanga.mp3",
  },
  {
    id: "jm2",
    title: "Prada",
    artist: "Jass Manak",
    cover: "https://pagalnew.com/coverimages/Lehanga-Jass-Manak-500-500.jpg",
    url: "https://example.com/prada.mp3",
  },
  {
    id: "jm3",
    title: "Boss",
    artist: "Jass Manak",
    cover: "https://i.scdn.co/image/ab67gjhfghng616d0000b2736a2c5c6c1f5d3d3d6b3e2f4c",
    url: "https://example.com/bossfgbnhf.mpfghhfgnh3",
  },
  {
    id: "jm4",
    title: "Butterfly",
    artist: "Jass Manak",
    cover: "https://pagalnew.com/coverimagffvhnges/Lehanga-Jass-Manak-500-500.jpg",
    url: "https://example.com/butterfgnhgn fgly.mp3",
  },
  {
    id: "jm5",
    title: "Rabb Wangu",
    artist: "Jass Manak",
    cover: "https://pagalnew.com/coverigfhnfgbmages/Lehanga-Jass-Manak-500-500.jpg",
    url: "https://example.com/rabb-wanvbgnghjhvgnghfgfvgu.mp3",
  },
  {
    id: "jm6",
    title: "Shopping",
    artist: "Jass Manak",
    cover: "https://i.scdn.co/image/ab67616dfgh0000b273e8d7c6b5a4f3e2d1c0b9a8f7",
    url: "https://example.com/shoppingfghfdh.mp3",
  },

  // 🎤 Harrdy Sandhu
  {
    id: "hs1",
    title: "Naah",
    artist: "Harrdy Sandhu",
    cover: "https://pagalnew.com/coverimagegfhs/Naah-Haghrrdy-Sandhu-500-500.jpg",
    url: "https://example.com/naafghfghghh.mp3",
  },
  {
    id: "hs2",
    title: "Soch",
    artist: "Harrdy Sandhu",
    cover: "https://pagalnew.com/coverimages/Socghgfh-Harrdy-Sandhu-500-500.jpg",
    url: "https://example.com/soch.cbvcbmp3",
  },
  {
    id: "hs3",
    title: "Bijlee Bijlee",
    artist: "Harrdy Sandhu",
    cover: "https://pagalnew.com/coverimages/Bijlee-Bijlee-Harrdy-Sandhu-500-500.jpg",
    url: "https://example.com/bijlee-bijlgfhfghee.mp3",
  },
  {
    id: "hs4",
    title: "Joker",
    artist: "Harrdy Sandhu",
    cover: "https://i.scdn.co/image/ab67616d0000b2739f8e7d6c5b4a392817161514",
    url: "https://example.com/joker.mp3",
  },
  {
    id: "hs5",
    title: "Backbone",
    artist: "Harrdy Sandhu",
    cover: "https://pagalnew.com/coverimages/Backbone-Harrdy-Sandhu-500-500.jpg",
    url: "https://example.com/backbone.mp3",
  },
  {
    id: "hs6",
    title: "Kya Baat Ay",
    artist: "Harrdy Sandhu",
    cover: "https://pagalnew.com/coverimages/Kya-Baat-Ay-Harrdy-Sandhu-500-500.jpg",
    url: "https://example.com/kya-baat-ay.mp3",
  },
  // 🎤 Ammy Virk
  {
    id: "av1",
    title: "Qismat",
    artist: "Ammy Virk",
    cover:
      "https://pagalnew.com/coverimages/Qismat-Ammy-Virk-500-500.jpg",
    url: "https://example.com/qismat.mp3",
  },
  {
    id: "av2",
    title: "Wang Da Naap",
    artist: "Ammy Virk",
    cover:
      "https://pagalnew.com/coverimages/Wang-Da-Naap-Ammy-Virk-500-500.jpg",
    url: "https://example.com/wang-da-naap.mp3",
  },
  {
    id: "av3",
    title: "Main Suneya",
    artist: "Ammy Virk",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2739c4d2d0f6f8c7b5a4e3d2c1b",
    url: "https://example.com/main-suneya.mp3",
  },
  {
    id: "av4",
    title: "Chann Sitare",
    artist: "Ammy Virk",
    cover:
      "https://pagalnew.com/coverimages/Wang-Da-Naap-Ammy-Virk-500-500.jpg",
    url: "https://example.com/chann-sitare.mp3",
  },
  {
    id: "av5",
    title: "Nikka Zaildar Title Track",
    artist: "Ammy Virk",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2737d6e5f4c3b2a190817263544",
    url: "https://example.com/nikka-zaildar.mp3",
  },

  // 🎤 Arjan Dhillon
  {
    id: "ad1",
    title: "Fly",
    artist: "Arjan Dhillon",
    cover:
      "https://pagalnew.com/coverimages/Wang-Da-Naap-Ammy-Virk-500-500.jpg",
    url: "https://example.com/fly.mp3",
  },
  {
    id: "ad2",
    title: "Likhari",
    artist: "Arjan Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2735f4e3d2c1b0a9f8e7d6c5b4a",
    url: "https://example.com/likhari.mp3",
  },
  {
    id: "ad3",
    title: "Mulla Pyar",
    artist: "Arjan Dhillon",
    cover:
      "https://pagalnew.com/coverimages/Wang-Da-Naap-Ammy-Virk-500-500.jpg",
    url: "https://example.com/mulla-pyar.mp3",
  },
  {
    id: "ad4",
    title: "Buckle",
    artist: "Arjan Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734c5d6e7f8a9b0c1d2e3f4a5b",
    url: "https://example.com/buckle.mp3",
  },
  {
    id: "ad5",
    title: "Trucker",
    artist: "Arjan Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2732f3e4d5c6b7a8f9e0d1c2b3a",
    url: "https://example.com/trucker.mp3",
  },
  {
    id: "ad6",
    title: "Sangdi Sangdi",
    artist: "Arjan Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2731a2b3c4d5e6f7a8b9c0d1e2f",
    url: "https://example.com/sangdi-sangdi.mp3",
  },
  {
    id: "ad7",
    title: "Ik Tarfa",
    artist: "Arjan Dhillon",
    cover:
      "https://i.scdn.co/image/ab67616d0000b2739a8b7c6d5e4f3a2b1c0d9e8f",
    url: "https://example.com/ik-tarfa.mp3",
  },
   {
    id: "rn1",
    title: "Defaulter",
    artist: "R Nait",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273defaulter123456789",
    url: "https://example.com/defaulter.mp3",
  },
  {
    id: "rn2",
    title: "Dabda Kithe Aa",
    artist: "R Nait",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273dabdakitheaa123456",
    url: "https://example.com/dabda-kithe-aa.mp3",
  },
  {
    id: "rn3",
    title: "Gidha",
    artist: "R Nait",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273gidha123456789012",
    url: "https://example.com/gidha.mp3",
  },
  {
    id: "rn4",
    title: "Struggler",
    artist: "R Nait",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273struggler12345678",
    url: "https://example.com/struggler.mp3",
  },

  // 🎤 Jordan Sandhu
  {
    id: "js1",
    title: "Teeje Week",
    artist: "Jordan Sandhu",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273teejeweek12345678",
    url: "https://example.com/teeje-week.mp3",
  },
  {
    id: "js2",
    title: "Handsome Jatta",
    artist: "Jordan Sandhu",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273handsomejatta1234",
    url: "https://example.com/handsome-jatta.mp3",
  },
  {
    id: "js3",
    title: "Defend",
    artist: "Jordan Sandhu",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273defend123456789012",
    url: "https://example.com/defend.mp3",
  },
  {
    id: "js4",
    title: "Vibe Check",
    artist: "Jordan Sandhu",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273vibecheck123456789",
    url: "https://example.com/vibe-check.mp3",
  },
  {
    id: "js5",
    title: "100K",
    artist: "Jordan Sandhu",
    cover:
      "https://i.scdn.co/image/ab67616d0000b273100k12345678901234",
    url: "https://example.com/100k.mp3",
  },
  {
  id: "gs1",
  title: "Illegal Weapon",
  artist: "Garry Sandhu",
  cover: "https://i.scdn.co/image/ab67616d0000b273b0b8f8fdb0a7d6a2dff7e94d",
  url: "https://example.com/illegal-weapon.mp3",
},
{
  id: "gs2",
  title: "Yeah Baby",
  artist: "Garry Sandhu",
  cover: "https://i.scdn.co/image/ab67616d0000b2737f4d8e5f2e4d9f0b6f2c7d8e",
  url: "https://example.com/yeah-baby.mp3",
},
{
  id: "gs3",
  title: "Banda Ban Ja",
  artist: "Garry Sandhu",
  cover: "https://i.scdn.co/image/ab67616d0000b2736b2e5d9f8f7c3a1b2d4e5f6a",
  url: "https://example.com/banda-ban-ja.mp3",
},
{
  id: "gs4",
  title: "Good Luck",
  artist: "Garry Sandhu",
  cover: "https://i.scdn.co/image/ab67616d0000b2738c7d6e5f4a3b2c1d0e9f8a7b",
  url: "https://example.com/good-luck.mp3",
},
{
  id: "gb1",
  title: "Diamond",
  artist: "Gurnam Bhullar",
  cover: "https://i.scdn.co/image/ab67616d0000b2735f4e3d2c1b0a9f8e7d6c5b4a",
  url: "https://example.com/diamond.mp3",
},
{
  id: "gb2",
  title: "Jhanjar",
  artist: "Gurnam Bhullar",
  cover: "https://i.scdn.co/image/ab67616d0000b2734a5b6c7d8e9f0a1b2c3d4e5f",
  url: "https://example.com/jhanjar.mp3",
},
{
  id: "gb3",
  title: "Phone Maardi",
  artist: "Gurnam Bhullar",
  cover: "https://i.scdn.co/image/ab67616d0000b2739e8d7c6b5a4f3e2d1c0b9a8f",
  url: "https://example.com/phone-maardi.mp3",
},
{
  id: "gb4",
  title: "Pagal",
  artist: "Gurnam Bhullar",
  cover: "https://i.scdn.co/image/ab67616d0000b2732b3c4d5e6f7a8b9c0d1e2f3a",
  url: "https://example.com/pagal.mp3",
},
{
  id: "pv1",
  title: "Chal Oye",
  artist: "Parmish Verma",
  cover: "https://i.scdn.co/image/ab67616d0000b2731a2b3c4d5e6f7a8b9c0d1e2f",
  url: "https://example.com/chal-oye.mp3",
},
{
  id: "pv2",
  title: "Le Chakk Main Aa Gya",
  artist: "Parmish Verma",
  cover: "https://i.scdn.co/image/ab67616d0000b2733c4d5e6f7a8b9c0d1e2f3a4b",
  url: "https://example.com/le-chakk-main-aa-gya.mp3",
},
{
  id: "pv3",
  title: "Shada",
  artist: "Parmish Verma",
  cover: "https://i.scdn.co/image/ab67616d0000b2735d6e7f8a9b0c1d2e3f4a5b6c",
  url: "https://example.com/shada.mp3",
},
{
  id: "pv4",
  title: "Aam Jahe Munde",
  artist: "Parmish Verma",
  cover: "https://i.scdn.co/image/ab67616d0000b2737e8f9a0b1c2d3e4f5a6b7c8d",
  url: "https://example.com/aam-jahe-munde.mp3",
},
 
];

const PunjabiSongs = () => {
  const navigate = useNavigate();

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
    <div className= "bg-darkbg text-white px-6 p-24 relative overflow-hidden">

      {/* 🔙 Header */}
      <div className="flex items-center gap-3 mt-4">
        <ArrowLeft
          className="cursor-pointer hover:text-neon"
          onClick={() => navigate("/")}
        />
        <h1 className="text-2xl font-bold">
          Punjabi <span className="text-neon">Hits</span>
        </h1>
      </div>

      {/* 🎧 Songs List */}
      <div className="mt-10 space-y-3">
        {punjabiSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, punjabiSongs, "punjabi");
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

export default PunjabiSongs;