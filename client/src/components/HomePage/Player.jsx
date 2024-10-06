// src/components/Player.js
import React from "react";

const Player = ({ currentSong }) => {
  return (
    <div className="fixed bottom-0 w-full bg-[#181818] py-4 px-6 flex justify-between items-center text-white">
      <div className="flex items-center space-x-4">
        <img
          src={currentSong.albumArt}
          alt={currentSong.name}
          className="w-12 h-12 rounded-md"
        />
        <div>
          <p className="font-bold">{currentSong.name}</p>
          <p className="text-gray-400">{currentSong.artist}</p>
        </div>
      </div>
      <div>
        <button className="text-white hover:text-gray-300">Play</button>
        <button className="text-white hover:text-gray-300 ml-4">Pause</button>
      </div>
    </div>
  );
};

export default Player;
