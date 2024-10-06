import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-500">
              Your Music, Your Way
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-200 md:text-xl">
              Stream millions of songs, create playlists, and discover new
              artists with Rythmix. Your perfect soundtrack awaits.
            </p>
          </div>
          <div className="space-x-4">
            <Link to="/home">
              <button className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-md">
                Get Started
              </button>
            </Link>
            <button className="border border-blue-500 text-blue-500 bg-white hover:bg-blue-950 py-2 px-4 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
