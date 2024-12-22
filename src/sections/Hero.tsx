import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-44 lg:py-56 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[750px] hero-ring "></div>
        <div className="size-[900px] hero-ring "></div>
        <div className="size-[1050px] hero-ring "></div>
        <div className="size-[1200px] hero-ring "></div>
        {/* This is used for the star spinning animation */}
        <HeroOrbit size={750} rotation={-52}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={580} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={620} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={540} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={630} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={810} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={820} rotation={85}>
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={620} rotation={-41}>
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={-5}>
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking behind a computer"
          />
          <div className="bg-gray-950 border border-gray-800 px-3 py-1.5 inline-flex items-center gap-2 rounded-lg w-[355px]">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Open to new collaborations and opportunities
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Delivering Outstanding User Experiences as a Full Stack Developer
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I design and develop scalable, efficient, and visually appealing
            applications that meet the unique needs of clients and users. With a
            strong foundation in computer science and software engineering
            principles, I approach each project with a strategic mindset,
            delivering outstanding results that exceed expectations.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900  px-6 h-12 rounded-xl ">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
