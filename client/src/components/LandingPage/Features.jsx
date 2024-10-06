import React from "react";
import { Headphones, Radio, Mic2, PlayCircle } from "lucide-react";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-900 to-black-200 opacity-60"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem
            icon={Headphones}
            title="High-Quality Audio"
            description="Experience crystal-clear sound with our premium audio quality."
          />
          <FeatureItem
            icon={Radio}
            title="Personalized Stations"
            description="Create custom radio stations based on your favorite artists and songs."
          />
          <FeatureItem
            icon={Mic2}
            title="Lyrics Integration"
            description="Sing along with real-time lyrics for millions of songs."
          />
          <FeatureItem
            icon={PlayCircle}
            title="Offline Playback"
            description="Download your favorite tracks and listen offline, anytime, anywhere."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="h-12 w-12 text-blue-300 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

export default Features;
