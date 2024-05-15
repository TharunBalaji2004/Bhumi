import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../assets/banner2.png";
import Food from "../assets/food.jpeg";
import Hospitality from "../assets/hospitality.jpeg";
import Education from "../assets/education.jpg";
import Homepng from "../assets/home.png"

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="image-container flex flex-col justify-center bg-">
        <img src={BannerImage}></img>
        <div className="flex flex-row justify-around items-center mt-16 top-20 mx-48 ">
          <div className="flex flex-col ">
            <img
              src={Education}
              className="w-56 h-48 border-4 border-white"
            ></img>
            <h2 className="  p-2 text-white text-center text-2xl pt-5">
              Education
            </h2>
          </div>
          <div className="flex flex-col ">
            <img
              src={Food}
              className="w-56 h-48 border-4 border-white"
            ></img>
            <h2 className="  p-2 text-white text-center text-2xl pt-5">
              Food
            </h2>
          </div>
          <div className="flex flex-col ">
            <img
              src={Hospitality}
              className="w-56 h-48 border-4 border-white"
            ></img>
            <h2 className="  p-2 text-white text-center text-2xl pt-5">
              Hospitality
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-10 mx-48 mt-16">
          <img src={Homepng} className="h-80 w-80"></img>
          
        </div>
      </div>
      
    </div>
  );
};

export default Home;
