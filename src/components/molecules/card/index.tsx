import type { FC, ReactElement } from "react";
import { CardProps } from "./types";
import Link from "next/link";

export const Card: FC<CardProps> = ({
  className,
  children,
  title,
  icon,
  href,
  titleStyle,
  onClick,
}): ReactElement => {
  return (
    <>
      {href ? (
        <Link href={`${href}`}>
          <div
            className={`${className} flex auto flex-col gap-y-4 bg-white rounded-md`}
            onClick={onClick}
          >
            <section className="flex gap-4">
              <h1 className={titleStyle}>{title}</h1> {icon}
            </section>
            <section className="flex flex-col">{children}</section>
          </div>
        </Link>
      ) : (
        <div
          className={`${className} flex  gap-y-4 bg-white rounded-md auto flex-col cursor-pointer`}
          onClick={onClick}
        >
          <section className="flex gap-4">
            <h1 className={`${titleStyle} font-bold `}>{title}</h1> {icon}
          </section>
          <section className="flex flex-col">{children}</section>
        </div>
      )}
    </>
  );
};
