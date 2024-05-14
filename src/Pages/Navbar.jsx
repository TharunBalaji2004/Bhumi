import React from 'react'


const Navbar = () => {
  return (
    <div className=" h-14 w-full flex border-b-gray-200 border-b">
      <div className=" w-1/5  flex justify-center items-center">
        BHUMI
      </div>
      <div className="flex flex-row justify-around items-center w-2/3 border-l-gray-200 border-l border-r border-r-gray-200">
        <h1>Home</h1>
        <h1>About us</h1>
        <h1>Campaigns</h1>
        <h1>Blogs</h1>
        <h1>Volunteer</h1>
      </div>
      <div className="w-1/5  flex justify-center items-center">
        <h2>Donate Now</h2>
      </div>
    </div>
  );
}

export default Navbar