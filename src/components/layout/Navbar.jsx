import React, { useState } from "react";
import { Search, Bell, MoreVertical, X } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../common/SearchBar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-zinc-800">
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <MoreVertical
                size={24}
                className="text-white cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>

            <img
              src="/MusicFlow_Logo.png"
              alt="Music App"
              className="w-9 h-9 rounded-full"
            />

            <h1 className="text-xl font-bold text-white">
              Music<span className="text-neon">Flow</span>
            </h1>
          </div>

          {/* Desktop Search (ONLY ONE) */}
          <div className="hidden md:flex">
            <SearchBar />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex text-white gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </div>

          {/* Login */}
          <div className="hidden lg:flex">
            <button
              onClick={() => navigate("/login")}
              className="bg-neon p-2 rounded-2xl"
            >
              Log in
            </button>
          </div>

          {/* Profile */}
          <div
            className="flex items-center gap-4"
            onClick={() => navigate("/profile")}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <Bell size={20} />
            </motion.button>

            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
              className="w-9 h-9 rounded-full border-2 border-green-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile Search (optional single instance) */}
        <div className="md:hidden px-4 pb-4">
          <SearchBar />
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white z-50 shadow-xl p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <X className="cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Lightweight Search (NOT full SearchBar) */}
        <div className="mb-6">
          <input
            placeholder="Search songs..."
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white outline-none"
          />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4">
          <NavLink to="/" onClick={toggleSidebar}>Home</NavLink>
          <NavLink to="/explore" onClick={toggleSidebar}>Explore</NavLink>
          <NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink>
          <NavLink to="/profile" onClick={toggleSidebar}>Profile</NavLink>
        </nav>
      </motion.aside>
    </>
  );
};

export default Navbar;