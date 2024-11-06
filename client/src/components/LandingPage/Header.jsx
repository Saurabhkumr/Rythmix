import React from "react";
import { Music } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Login from "../Routes/Login";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-900/50">
      <Link className="flex items-center justify-center" to="/">
        {" "}
        {/* Use Link for Home */}
        <Music className="h-6 w-6 text-blue-500" />
        <span className="ml-2 text-2xl font-bold text-blue-500">Rythmix</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          to="/features" // Replace href with to for Link
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          to="/pricing" // Replace href with to for Link
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          to="/about" // Replace href with to for Link
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          to="/login" // Link to the /login route
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
