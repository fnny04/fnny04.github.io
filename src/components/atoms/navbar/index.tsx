import { FC, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../theme-toggle";
import { Icon } from "@iconify/react";

export const Navigation: FC = (): ReactElement => {
  return (
    <div className="flex h-[86px] sticky justify-between items-center z-40">
      <Link href="/">
        <figure>
          <Image src="/logo.webp" width={200} height={100} alt="Supernova" />
        </figure>
      </Link>
      <section className="flex gap-16 text-white text-sm ">
        <ThemeToggle />
        <div className="flex gap-2">
          <div className="text-blue-600">
            <Icon icon="ant-design:mobile-outlined" width={40} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold">Call Us</h2>
            <p>(xxx) xxxxxx</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-blue-600">
            <Icon icon="bx:chat" width={40} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold">Talk to Us</h2>
            <p>info@supernovacorp.ltd</p>
          </div>
        </div>
      </section>
    </div>
  );
};
