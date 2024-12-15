import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60">
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
