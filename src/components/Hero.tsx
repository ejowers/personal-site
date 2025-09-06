import React from "react";
import Group from "./ui/Group";
import Stack from "./ui/Stack";
import { BackgroundBeamsWithCollision } from "./ui/HeroBackground";
import Image from "next/image";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <Group className="pt-15 gap-16 mx-auto items-center justify-center">
        <Stack>
          <h2 className="relative text-4xl sm:text-5xl z-20 md:text-6xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Code Monster
            <div className="relative block w-max mx-auto bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r tracking-tight sm:tracking-wide from-blue-500  via-violet-600 to-pink-400 py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              Monsterously Good.
            </div>
          </h2>
          <p className="text-center text-sm tracking-[0.25rem] max-w-lg mx-auto text-zinc-500">
            Creating simple, automated, scalable experiences that are as
            beautiful as they are functional.
          </p>
        </Stack>
        <Stack className="w-xs justify-end hidden lg:flex">
          <Image
            src="/monsters/monster-tentacles-logo.png"
            alt="Code Monster"
            width={100}
            height={100}
          />
        </Stack>
      </Group>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
