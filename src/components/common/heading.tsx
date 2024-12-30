import { cn } from "@/lib/utils";
import React from "react";

interface HeadingLevels {
  [key: number]: string;
}

const headingLevels: HeadingLevels = {
  1: "lg:text-5xl text-4xl font-extrabold tracking-tight",
  2: "text-4xl font-bold",
  3: "md:text-3xl sm:text-2xl text-xl font-bold",
  4: "text-2xl font-medium",
  5: "text-xl font-medium",
  6: "sm:text-lg text-base font-medium",
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: keyof HeadingLevels;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, className, ...props }) =>
  React.createElement(`h${level}`, {
    className: cn(headingLevels[level], className),
    ...props,
  });

export { Heading };
