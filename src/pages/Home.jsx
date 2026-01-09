



import React from "react";

import TrendingNow from "../home/TrendingNow";
import RecentlyPlayed from "../home/RecentlyPlayed";
import NewReleases from "../home/NewReleases";
import MoodBased from "../home/MoodBased";
import GenreSection from "../home/GenreSection";
import Recommended from "../home/Recommended";
import FooterLast from "../home/FooterLast";
import PopularArtist from "../home/PopularArtist";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-darkbg text-white pb-32 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <h1 className="text-4xl font-bold mb-4">
          Feel the <span className="text-neon">Music</span>
        </h1>
        <p className="text-gray-400 mb-4">
          Stream your favorite songs anytime.
        </p>
      </section>

      {/* SECTIONS */}
      <TrendingNow />
      <PopularArtist/>
      <NewReleases />
      <Recommended/>
      <RecentlyPlayed />
       
      <MoodBased />
      <GenreSection />
      
     <FooterLast/>
     

     <div className="h-15">

     </div>


    </div>
  );
};

export default Home;
