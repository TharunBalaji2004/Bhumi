import React from "react";
import Navbar from "./Navbar";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full h-full mt-10">
        <div className="flex flex-col items-center">
          <p className="font-mono text-center text-xl">
            Error: Page Not Found
          </p>
          <p className="text-6xl text-primary font-bold">404</p>
        </div>
      </div>
    </>
  );
};

export default Error404;
