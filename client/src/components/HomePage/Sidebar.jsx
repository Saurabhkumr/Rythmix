// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex bg-[#121212]">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around p-4">
        <Link
          to="/home"
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img src="path/to/home-icon.svg" alt="Home" />
          <p className="font-bold text-white">Home</p>
        </Link>
        <Link
          to="/playlists"
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img src="path/to/playlist-icon.svg" alt="Playlists" />
          <p className="font-bold text-white">Playlists</p>
        </Link>
        <Link
          to="/search"
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img src="path/to/search-icon.svg" alt="Search" />
          <p className="font-bold text-white">Search</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
