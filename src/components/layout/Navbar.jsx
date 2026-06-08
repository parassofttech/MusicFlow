import React, { useEffect, useState } from "react";
import {
  Bell,
  MoreVertical,
  X,
  User,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../common/SearchBar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();

  /* 🔥 LOAD USER FROM LOCALSTORAGE */
  useEffect(() => {
    const storedUser = localStorage.getItem("musicflow_user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* 🔥 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("musicflow_user");
    localStorage.removeItem("musicflow_logged_in");

    setUser(null);
    setShowProfileMenu(false);

    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-zinc-800">
        <div className="flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <MoreVertical
                size={24}
                className="text-white cursor-pointer"
                onClick={() => setSidebarOpen(true)}
              />
            </div>

            <img
              src="/MusicFlow_Logo.png"
              alt="Music App"
              className="w-10 h-10 rounded-full"
            />

            <h1 className="text-xl font-bold text-white">
              Music<span className="text-neon">Flow</span>
            </h1>
          </div>

          {/* SEARCH */}
          <div className="hidden md:flex lg:w-[320px] sm:w-[200px]">
            <SearchBar />
          </div>

          {/* LINKS */}
          <div className="hidden md:flex text-white gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/songs">Songs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex  items-center gap-4 relative">

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <Bell size={20} />
            </motion.button>

            {/* 🔥 NOT LOGGED IN */}
            {!user ? (
              <button
                onClick={() => navigate("/login")}
                className="
                  px-5 py-2
                  rounded-full
                  bg-gradient-to-r
                  from-green-400
                  to-cyan-500
                  text-black
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Login
              </button>
            ) : (
              /* 🔥 USER PROFILE */
              <div className="relative">

                <div
                  onClick={() =>
                    setShowProfileMenu(!showProfileMenu)
                  }
                  className="
                    flex items-center gap-2
                    bg-zinc-900
                    px-3 py-2
                    rounded-full
                    cursor-pointer
                    border border-zinc-700
                  "
                >
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="profile"
                    className="w-9 h-9 rounded-full border-2 border-green-500"
                  />

                  <span className="hidden md:block text-white text-sm">
                    {user.name}
                  </span>
                </div>

                {/* DROPDOWN */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-13 md:mt-3  w-48 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl overflow-hidden">

                    <button
                      onClick={() => {
                        navigate("/profile");
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center gap-2 w-full px-4 py-3 text-white hover:bg-zinc-800"
                    >
                      <User size={16} />
                      Profile
                    </button>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-3 text-red-400 hover:bg-red-500/10"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>

                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden px-4 pb-4">
          <SearchBar />
        </div>
      </header>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white z-50 p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <X
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <div className="mb-6">
          <SearchBar />
        </div>

        <nav className="flex flex-col gap-4">

          <NavLink to="/" onClick={() => setSidebarOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/explore" onClick={() => setSidebarOpen(false)}>
            Explore
          </NavLink>

          <NavLink to="/songs" onClick={() => setSidebarOpen(false)}>
            Songs
          </NavLink>

          <NavLink to="/contact" onClick={() => setSidebarOpen(false)}>
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                navigate("/login");
                setSidebarOpen(false);
              }}
              className="
                mt-4
                bg-gradient-to-r
                from-green-400
                to-cyan-500
                text-black
                font-semibold
                py-2
                rounded-lg
              "
            >
              Login
            </button>
          ) : (
            <>
              <NavLink
                to="/profile"
                onClick={() => setSidebarOpen(false)}
              >
                Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="text-left text-red-400"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </motion.aside>
    </>
  );
};

export default Navbar;