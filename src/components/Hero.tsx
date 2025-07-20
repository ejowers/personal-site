import React from "react";
import { Navbar } from "./Navbar";

const Hero = () => {
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="container w-full mx-auto pt-24">
        <h2 className="relative text-4xl sm:text-5xl z-20 md:text-6xl lg:text-7xl lg:mx-auto font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Code Monster
          <div className="relative mx-auto block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500  via-violet-600 to-pink-400 py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Monsterously Good.</span>
            </div>
          </div>
          <div className="text-center text-sm tracking-[0.25rem] font-normal text-zinc-500">
            Creating simple, automated, scalable experiences
            <br />
            that are as beautiful as they are functional.
          </div>
        </h2>
      </div>
      <div className="container w-full mx-auto hidden lg:block p-8 pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/monsters/monster-tentacles-logo.png"
          alt="Code Monster"
          className="w-1/2 max-w-md min-w-2xs"
        />
      </div>
    </div>
  );
};

export default Hero;
