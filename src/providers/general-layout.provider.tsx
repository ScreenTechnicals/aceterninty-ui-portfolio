import { FloatingNav, Spotlight } from "@/components/ui";
import { PropsWithChildren } from "react";
import { NextUI } from "./next-ui.provider";

type GeneralLayoutProps = PropsWithChildren<{}>;

const navItems = [
  {
    name: "Home",
    link: "/",
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
      <div className="2xl:grid min-h-[100vh] 2xl:grid-rows-[auto_1fr] selection:bg-primary-500/30s relative">
        <FloatingNav navItems={navItems} />
        <Spotlight
          className="-top-40 left-0 md:left-[30%] md:-top-0 lg:w-[70%] lg:h-[100%]"
          fill="#D3D8DF"
        />
        <Spotlight
          className="-top-40 left-0 md:left-[5%] md:-top-0 lg:w-[70%] lg:h-[100%]"
          fill="#D3D8DF"
        />
        {children}
      </div>
    </NextUI>
  );
};
