import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-14 w-full flex border-b-gray-200 border-b">
      <div className="w-1/5 flex justify-center items-center">
        <h2 >BHUMI</h2>
      </div>
      <div className="flex flex-row justify-around items-center w-2/3 border-l-gray-200 border-l border-r border-r-gray-200">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/volunteer">Volunteer</Link>
      </div>
      <div className="w-1/5 flex justify-center items-center">
        <Link to="/donate">Donate Now</Link>
      </div>
    </div>
  );
};

export default Navbar;
