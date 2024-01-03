import { FC, ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { TNavbarList } from "./type";
import { Icon } from "@iconify/react";
import Link from "next/link";
import clsx from "clsx";
import ThemeToggle from "@/components/atoms/theme-toggle";
import { animate, motion } from "framer-motion";

export const Navbar: FC = (): ReactElement => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isStay, setIsStay] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos > 800);
    setIsStay(!currentScrollPos);
  };

  const smoothScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavList: TNavbarList[] = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Experience",
      link: "#case-studies",
    },
    {
      name: "Projects",
      link: "#about",
    },
    {
      name: "Contact Me",
      link: "#services",
    },
  ];

  const classNameNavbar = clsx(
    "lg:flex hidden h-[86px] w-screen fixed bg-transparent justify-between items-center 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 top-0 py-4 transition-all duration-300 z-40 font-medium bg-dark-blue-100",
    {
      "visible dark:bg-transparent bg-dark-gray-200": isStay && !isScrolled,
      "hidden bg-transparent": !isScrolled && !isStay,
      "visible dark:bg-dark-blue-100 bg-dark-gray-200": isScrolled,
    }
  );

  return (
    <header className={`${classNameNavbar}`}>
      <section className="flex gap-12 dark:text-white text-black font-bold text-sm">
        <Link href="/">
          <p className="text-white font-bold"></p>
        </Link>
        <nav className="flex text-center">
          <ul className="flex gap-8 ">
            {NavList?.map((item, idx) => (
              <li key={idx} className="hover:text-blue-600 ">
                <motion.div
                  whileHover={{ cursor: "pointer" }}
                  onClick={() => smoothScrollTo(item.link.substring(1))}
                >
                  {item.name}
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex gap-8 dark:text-white text-black font-bold text-xs pl-8">
        <ThemeToggle />
        <div className="flex gap-2">
          <div className="text-blue-600">
            <Icon icon="ant-design:mobile-outlined" width={40} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold">Phone</h2>
            <p>(xxx) xxxxxx</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-blue-600">
            <Icon icon="bx:chat" width={40} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold">Email</h2>
            <p>fnny04@gmail.com</p>
          </div>
        </div>
      </section>
    </header>
  );
};
