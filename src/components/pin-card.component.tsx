import { Avatar, Link } from "@nextui-org/react";
import Image from "next/image";
import { PinContainer, PinContainerProps } from "./ui";

type PinCardProps = Pick<
  PinContainerProps,
  "title" | "href" | "className" | "containerClassName"
>;

export const PinCard = ({ title, href, ...props }: PinCardProps) => {
  return (
    <PinContainer
      title="/ui.aceternity.com"
      href="https://twitter.com/mannupaaji"
    >
      <div className="w-full h-[200px] relative flex place-content-center place-items-center overflow-hidden bg-[#13162] rounded-xl">
        <div className="bg-[url(/images/bg3.svg)] bg-cover bg-no-repeat absolute top-0 left-0 w-full h-full" />
        <Image
          src={"/images/img4.png"}
          alt=""
          width={300}
          height={300}
          className="relative top-5"
        />
      </div>
      <h1 className="text-start text-2xl font-semibold m-0 mb-2">
        3D Solar System Planets to Explore
      </h1>
      <p className="text-[#BEC1DD] text-base text-start">
        Explore the wonders of our solar system with this captivating 3D
        simulation of the planets using Three.js.
      </p>
      <div className="flex items-center justify-between w-full my-5">
        <div className="flex items-center gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="sm"
          />
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="sm"
          />
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="sm"
          />
        </div>
        <Link href="" className="text-[#CBACF9] text-lg font-light">
          Check Live Site
        </Link>
      </div>
    </PinContainer>
  );
};
