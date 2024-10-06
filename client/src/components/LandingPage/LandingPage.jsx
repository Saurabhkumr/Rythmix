import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-700 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px]"></div>
        </div>
      </div>
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
