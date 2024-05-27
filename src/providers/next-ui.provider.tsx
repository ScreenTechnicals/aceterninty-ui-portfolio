"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

type NextUIProps = PropsWithChildren<{}>;

export const NextUI = ({ children }: NextUIProps) => {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
