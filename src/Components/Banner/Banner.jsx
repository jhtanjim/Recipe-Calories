import React from "react";

const Banner = () => {
  return (
    <div className="bg-black rounded-2xl relative">
      <img
        className="lg:h-[700px] h-[500px] opacity-60 w-full"
        src="https://i.ibb.co/M2jrncX/pexels-cottonbro-studio-4252146.jpg"
        alt=""
      />
      <div className="absolute inset-0 pt-40 lg:pt-60 items-center justify-center px-2">
        <h1 className=" text-white text-center lg:text-6xl text-2xl font-bold">
          Discover an exceptional cooking <br className="hidden lg:block" />{" "}
          class tailored for you!
        </h1>
        <p className="text-white text-center font-semibold opacity-75 text-sm lg:text-lg mt-4  lg:mt-8">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br className="hidden lg:block" />{" "}
          problems to become an exceptionally well world-class Programmer.
        </p>
        <div className="text-center mt-4  gap-4">
          <button className=" bg-[#0BE58A]  rounded-2xl   px-6 lg:px-8 py-2  hover:bg-[#c2c0ff] hover:text-black font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            Preparing
          </button>
          <button className=" ms-2 bg-[#c2c0ff]  rounded-2xl   px-6 lg:px-8 py-2 hover:bg-[#0BE58A] hover:text-black font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            Preparing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
