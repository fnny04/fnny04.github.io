import { ReactNode, MouseEventHandler } from "react";

export interface CardProps {
  className: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  topText?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
