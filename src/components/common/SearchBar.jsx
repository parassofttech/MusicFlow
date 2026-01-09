import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useMusic } from "../../context/MusicContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { allSongs = [], playSong } = useMusic();

  const searchRef = useRef(null);

  /* 🔹 Close search on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const results = allSongs.filter(
    (song) =>
      song.title?.toLowerCase().includes(query.toLowerCase()) ||
      song.artist?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full">
        <Search size={18} className="text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search songs, artists..."
          className="bg-transparent outline-none text-white w-full text-sm"
        />
      </div>

      {/* Results */}
      {query && (
        <div className="absolute w-full mt-2 text-white bg-zinc-900 rounded-xl max-h-72 overflow-y-auto z-50 shadow-xl">
          {results.length ? (
            results.map((song) => (
              <div
                key={song.url}
                onClick={() => {
                  playSong(song);
                  setQuery("");
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 cursor-pointer"
              >
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{song.title}</p>
                  <p className="text-xs text-gray-400">{song.artist}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-gray-400">
              No result found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
