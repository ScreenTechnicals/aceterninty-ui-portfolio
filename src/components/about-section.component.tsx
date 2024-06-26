"use client";
import { DirectionAwareHover, World } from "@/components/ui";
import { copyToClipboard } from "@/helpers";
import { Button, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
import { Card } from "./card.component";

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

const myTechstacks = [
  "Next UI",
  "Firebase",
  "Python",
  "Next Js",
  "Tailwind CSS",
  "Framer Motion",
  "Typescript",
  "Mongo DB",
  "GraphQL",
  "Solidity",
];

type TechstackCardProps = {
  value: string;
};

const TechstackCard = ({ value }: TechstackCardProps) => {
  return (
    <div className="flex place-content-center place-items-center text-base font-medium !text-[#C1C2D3] bg-[#10132E] py-4 w-[150px] rounded-lg">
      {value}
    </div>
  );
};

export const AboutSection = () => {
  return (
    <div className="md:px-20 p-5 bg-[url(/images/bg1.png)] bg-cover bg-no-repeat bg-bottom">
      <div className="grid md:grid-cols-2 gap-5 w-full mb-5">
        <DirectionAwareHover
          imageUrl={"/images/img2.png"}
          className="!w-full !h-[45svh] md:!h-[62svh] rounded-xl border border-[#6971A2]/20"
          childrenClassName="md:bottom-10 md:left-10 bottom-5 left-5"
        >
          <h2 className="text-2xl md:text-4xl 2xl:text-6xl font-medium">
            I prioritize client <br /> collaboration, fostering <br /> open
            communication
          </h2>
        </DirectionAwareHover>
        <div className="w-full flex flex-col gap-5">
          <Card className="h-[40svh] md:h-[30svh] backdrop-blur-sm">
            <CardBody>
              <h2 className="text-2xl 2xl:text-4xl md:text-3xl font-medium relative z-10">
                I’m very flexible with time <br /> zone communications
              </h2>
              <p className="relative z-10 pointer-events-none mt-3 mb-5 font-light tracking-wider md:text-base text-xs 2xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                maiores reiciendis tempore minima.
              </p>
              <Button
                radius="sm"
                className="border-[#6971A2]/20 border bg-gradient-to-tr from-[#161A31] to-[#06091F] text-white max-w-fit z-[10] relative 2xl:scale-[1.1]"
              >
                Connect Now
              </Button>
              <div className="absolute w-full h-full top-10 left-40 scale-[1.15]">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </CardBody>
          </Card>
          <Card className="h-[30svh] bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
            <CardBody className="flex flex-row gap-5 items-end">
              <div className="absolute left-0 bottom-0 z-20 w-full h-full bg-gradient-to-t from-[#04071D] via-[#0C0E23]/70 to-[#0C0E23]/0" />
              <div className="w-fit relative z-20">
                <p className="text-[#C1C2D3] text-sm md:text-lg 2xl:text-xl">
                  I constantly try to improve
                </p>
                <h2 className="font-medium text-4xl md:text-5xl 2xl:text-7xl text-nowrap">
                  My tech stack
                </h2>
              </div>
              <div className="absolute right-5 flex gap-3 -top-3">
                <div className="flex gap-3 flex-col">
                  {myTechstacks.slice(0, 2).map((tech, index) => (
                    <TechstackCard key={index} value={tech} />
                  ))}
                </div>
                <div className="flex gap-3 flex-col">
                  {myTechstacks.slice(3, 6).map((tech, index) => (
                    <TechstackCard key={index} value={tech} />
                  ))}
                </div>
                <div className="flex gap-3 flex-col">
                  {myTechstacks.slice(6, 10).map((tech, index) => (
                    <TechstackCard key={index} value={tech} />
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex gap-5 w-full flex-col md:flex-row">
        <div className="md:w-[50%] flex flex-col gap-5">
          <Card className="h-[25svh]">
            <CardBody>
              <h2 className="text-2xl 2xl:text-4xl font-medium relative z-10 mb-5">
                Tech enthusiast with a <br /> passion for development.
              </h2>
              <div className="w-full flex justify-end">
                <Image
                  src={"/images/img3.png"}
                  alt=""
                  width={300}
                  height={300}
                  className="w-[300px] h-[200px] 2xl:w-[400px] 2xl:h-[300px]"
                />
              </div>
            </CardBody>
          </Card>
          <Card className="h-[25svh]">
            <CardBody className="relative flex place-items-center place-content-center text-center">
              <h2 className="text-2xl 2xl:text-4xl font-medium relative z-10 mb-5">
                Do you want to start a <br /> project together?
              </h2>
              <Button
                onPress={() => {
                  copyToClipboard("screentechnicals@gmail.com");
                }}
                radius="sm"
                variant="flat"
                startContent={<FaCopy />}
                className="relative z-10 bg-white/80 opacity-85"
              >
                Copy my email address
              </Button>
              <Image
                src={"/images/radial-gradient.svg"}
                alt=""
                width={500}
                height={500}
                className="absolute -left-32 -top-28 scale-[2]"
              />
            </CardBody>
          </Card>
        </div>
        <div className="w-full">
          <Card className="h-[20svh] md:h-[52svh]">
            <CardBody className="flex flex-row items-center p-0">
              <div className="pl-5">
                <p className="tracking-wider text-xs md:text-xl font-light">
                  The Inside Scoop
                </p>
                <h2 className="text-xl 2xl:text-5xl md:text-4xl font-medium relative z-10 mb-5">
                  Currently building a JS Animation library
                </h2>
              </div>
              <div className="w-full h-full flex justify-end relative">
                <Image src={"/images/img1.png"} alt="" fill />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
