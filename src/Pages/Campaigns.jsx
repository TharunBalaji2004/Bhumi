import React from "react";
import Campcard from "@/components/ui/campcard";
import Contact from "@/components/ui/contact";

const Campaigns = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-gray">
        <p className="flex justify-center pt-[30px] pb-[50px] text-4xl text-red">
          Our Campaigns
        </p>
        <div className="flex flex-row justify-around">
          <Campcard></Campcard>
          <Campcard></Campcard>
          <Campcard></Campcard>
        </div>
      </div>
      <Contact></Contact>
    </>
  );
};

export default Campaigns;
