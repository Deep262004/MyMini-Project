import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        <div className="text-white text-xl font-bold">
          <a href="/">BlogDev</a>
        </div>
        
        {/* Search Box */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-Orange-700 focus:outline-none">Search</button>
        </div>

        {/* Navbar links */}
        <div className="flex space-x-4">
          <a href="/Home" className="text-white hover:bg-orange-700 px-3 py-2 rounded">Home</a>
          <a href="/about" className="text-white hover:bg-orange-700 px-3 py-2 rounded">About</a>
          <a href="/contact" className="text-white hover:bg-orange-700 px-3 py-2 rounded">Contact</a>
          <a href="/login" className="text-white hover:bg-orange-700 px-3 py-2 rounded">Login</a>
          <a href="/signup" className="text-white hover:bg-orange-700 px-3 py-2 rounded">Signup</a>
        </div>
        </div>
      
    </nav>
  );
};

export default Navbar;