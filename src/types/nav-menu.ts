import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type NavItem = {
  title: string;
  url: string;
  icon: React.ElementType;
};
