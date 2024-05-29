import dynamic from "next/dynamic";

export const World = dynamic(
  () => import("@/components/ui/globe.component").then((m) => m.World),
  {
    ssr: false,
  }
);

export * from "./direction-aware-hover.component";
export * from "./floating-navbar.component";
export * from "./pin-container.component";
export * from "./spotlight.component";
