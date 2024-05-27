"use client";

import { FloatingNav } from "@/components/ui";
import { PropsWithChildren } from "react";
import { NextUI } from "./next-ui.provider";

type GeneralLayoutProps = PropsWithChildren<{}>;

const navItems = [
  {
    link: "/",
    name: "Home",
    icon: "Home",
  },
  {
    name: "About",
    link: "/about",
    icon: "About",
  },
  {
    name: "My Works",
    link: "/works",
    icon: "Works",
  },
  {
    name: "Blog",
    link: "/blog",
    icon: "Blog",
  },
  {
    name: "Contact",
    link: "/contact",
    icon: "Contact",
  },
];
export const GeneralLayout = ({ children }: GeneralLayoutProps) => {
  return (
    <NextUI>
      <div className="relative overflow-x-hidden">
        <FloatingNav navItems={navItems} />
        {children}
      </div>
    </NextUI>
  );
};
