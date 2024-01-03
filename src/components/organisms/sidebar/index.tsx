"use client";
import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button } from "@/components";
import { signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import { TSidebarMenu } from "./type";
export const Sidebar: FC = (): ReactElement => {
  const SidebarMenu: TSidebarMenu = [
    { name: "Dashboard", link: "/dashboard", icon: <Icon icon="ic:round-dashboard" width={25} /> },
    {
      name: "Case Study",
      link: "/dashboard/case-study",
      icon: <Icon icon="fluent:document-search-32-filled" width={25} />,
    },
    {
      name: "News and Insight",
      link: "/dashboard/news-insight",
      icon: <Icon icon="fluent:news-20-filled" width={25} />,
    },
    {
      name: "Service",
      link: "#",
      icon: <Icon icon="ic:outline-miscellaneous-services" width={25} />,
    },
  ];
  const pathname = usePathname();

  const selectedMenu = (url: string) =>
    clsx(
      "flex items-center text-sm p-2 rounded-lg hover:bg-gray-100 hover:text-[#1D122D] gap-x-2 group font-semibold",
      {
        "bg-gray-300 text-[#1D122D]": pathname === url,
      },
    );
  return (
    <aside className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#1D122D] py-6">
      <div className="w-full flex flex-col gap-y-4">
        <figure>
          <Image
            src="/logo.webp"
            alt="supernova_logo"
            width={300}
            height={300}
            quality={100}
            priority
            className="mx-auto w-3/4 object-cover py-4"
          />
        </figure>
        <hr className="border-t-violet-900" />
        <div className="px-4">
          <ul className="flex flex-col gap-y-2  mt-8">
            {SidebarMenu.map((menu, idx) => (
              <li key={idx} className="text-gray-100">
                <Link href={menu.link} className={selectedMenu(menu.link)}>
                  {menu.icon}
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" mt-60">
            <Button
              onClick={() => signOut()}
              className="text-white text-start font-bold flex gap-x-2 hover:bg-gray-300 hover:text-[#1D122D] w-full p-2 rounded-lg"
            >
              <Icon icon="ri:logout-circle-line" width={25} />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
