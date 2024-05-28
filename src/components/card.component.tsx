import { Card as CardOrg } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = PropsWithChildren<{}> & {
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <CardOrg
      classNames={{
        base: twMerge(
          "bg-transparent border border-[#6971A2]/20 w-full p-0",
          className
        ),
        body: "overflow-hidden text-white p-5 relative w-full",
      }}
    >
      {children}
    </CardOrg>
  );
};
