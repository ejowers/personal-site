import React from "react";
import Group from "./ui/Group";
import Stack from "./ui/Stack";

const Hero = () => {
  return (
    <Group className="pt-20 gap-16 mx-auto items-center">
      <Stack>
        <h2 className="relative text-4xl sm:text-5xl z-20 md:text-6xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
          Code Monster
          <div className="relative block w-max mx-auto bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r tracking-tight sm:tracking-wide from-blue-500  via-violet-600 to-pink-400 py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            Monsterously Good.
          </div>
        </h2>
        <p className="text-center text-sm tracking-[0.25rem] max-w-lg mx-auto text-zinc-500">
          Creating simple, automated, scalable experiences that are as beautiful
          as they are functional.
        </p>
      </Stack>
      <Stack className="w-xs justify-end hidden lg:flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/monsters/monster-tentacles-logo.png" alt="Code Monster" />
      </Stack>
    </Group>
  );
};

export default Hero;
