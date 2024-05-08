import React from 'react'
import Navbar from './Navbar'
import BannerImage from "../assets/banner2.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='image-container flex flex-row justify-center'>
        <img src={BannerImage}></img>
      </div>
    </div>
  );
}

export default Home