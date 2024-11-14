import React, { useState } from "react";
import Sidebar from "../HomePage/Sidebar";
import TopBar from "../HomePage/TopBar";
import CloudinaryUpload from "../Shared/CloudinaryUpload";

const UploadSong = () => {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [songFile, setSongFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading song", songTitle, artistName, songFile);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <TopBar />

        {/* Upload Song Content */}
        <div className="flex-1 p-6 bg-gray-900">
          <h2 className="text-2xl font-bold text-white mb-6">Upload Song</h2>
          {/* Upload Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-white">
                Song Title
              </label>
              <input
                type="text"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                placeholder="Enter song title"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Artist Name
              </label>
              <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder="Enter artist name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Song File
              </label>
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => setSongFile(e.target.files[0])}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="mt-4">
              <CloudinaryUpload />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit Song
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
