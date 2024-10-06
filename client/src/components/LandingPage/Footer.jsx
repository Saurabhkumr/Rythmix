import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-900/50">
      <p className="text-xs text-blue-300">
        © 2024 Rythmix. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:text-blue-500 transition-colors" href="#">
          Privacy Policy
        </a>
        <a className="text-xs hover:text-blue-500 transition-colors" href="#">
          Terms & Conditions
        </a>
      </nav>
    </footer>
  );
};

export default Footer;