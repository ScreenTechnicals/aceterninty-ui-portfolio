import { Button } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import { Spotlight } from "./ui";

export const HeroSection = () => {
  return (
    <div className="md:pt-0 pt-44 px-5 md:min-h-svh w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden bg-[url(/images/bg1.png)] bg-cover bg-no-repeat bg-bottom">
      <div className="absolute top-0 left-0 w-full h-[40rem]">
        <Spotlight className="!left-[10%]" fill="#CBACF9" />
        <Spotlight className="md:!left-[40%]" fill="#CBACF9CC" />
      </div>
      <div className="flex flex-col text-center justify-center items-center gap-3 md:gap-5 mx-auto">
        <p className="tracking-widest uppercase text-xs md:text-base">
          Dynamic Web Magic with Next.js
        </p>
        <h1 className="font-bold text-3xl md:text-7xl m-0">
          Transforming Concepts into
          <br className="md:block hidden" />
          Seamless <span className="text-[#CBACF9]">User Experiences</span>
        </h1>
        <p className="text-base md:text-xl font-medium">
          Hi! I’m Chinmaya, a Next.js Developer based in India.
        </p>
        <Button
          radius="sm"
          size="lg"
          className="border-[#6971A2]/20 border bg-gradient-to-tr from-[#161A31] to-[#06091F] text-white my-5"
          endContent={<GoArrowUpRight />}
        >
          See my work
        </Button>
      </div>
    </div>
  );
};
