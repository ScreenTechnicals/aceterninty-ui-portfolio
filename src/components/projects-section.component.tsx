import { PinCard } from "./pin-card.component";

export const ProjectsSection = () => {
  return (
    <div className="w-full md:px-20 p-5 min-h-svh">
      <h1 className="text-center md:text-5xl 2xl:font-6xl text-2xl m-0 mt-5">
        A small selection of{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h1>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
        <PinCard
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        />
        <PinCard
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        />
        <PinCard
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        />
        <PinCard
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        />
        <PinCard
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        />
        <PinCard
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        />
      </div>
    </div>
  );
};
