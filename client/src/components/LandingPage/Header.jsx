import React from "react";
import { Music } from "lucide-react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-900/50">
      <a className="flex items-center justify-center" href="#">
        <Music className="h-6 w-6 text-blue-500" />
        <span className="ml-2 text-2xl font-bold text-blue-500">Rythmix</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          href="#"
        >
          Features
        </a>
        <a
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          href="#"
        >
          Pricing
        </a>
        <a
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          href="#"
        >
          About
        </a>
        <a
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          href="#"
        >
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Header;
