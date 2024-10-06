// src/components/SongList.js
import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl text-white mb-4">Songs</h2>
      <ul className="space-y-4">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex items-center justify-between text-white"
          >
            <div className="flex items-center space-x-4">
              <img
                src={song.albumArt}
                alt={song.name}
                className="w-12 h-12 rounded-md"
              />
              <div>
                <p className="font-bold">{song.name}</p>
                <p className="text-gray-400">{song.artist}</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
