import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white h-36 flex items-center px-6 justify-between shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo192.png" // replace with your logo path
          alt="QuickFix Logo"
          className="h-12 w-12 rounded-full"
        />
      </div>

      {/* Center: Title */}
      <h1 className="text-5xl font-bold text-center">QuickFix</h1>

      {/* Right: Profile + Sign in */}
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 bg-white text-blue-800 rounded-full flex items-center justify-center">
          <User size={28} />
        </div>
        <a href="/signin" className="text-lg hover:underline">
          Sign in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;