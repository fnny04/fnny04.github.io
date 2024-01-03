import { FC, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="flex dark:bg-dark-blue-200 bg-gray-600 3xl:px-80 2xl:px-60 xl:px-32 lg:px-10 w-full h-[500px] bottom-0 pt-20">
      <section className="flex">
        <div className="flex flex-col w-[30%] text-white ">
          <Image src="/logo.webp" width={416} height={65} alt="Supernova" />
          <p className="text-sm font-thin py-8">
            Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget
            eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu
            tempus, eget elementum dolor ullamcorper sodales ultrices eros.
          </p>
          <p className="text-sm font-semibold py-2">Subscribe to our newsletter</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Input Your Email"
              className="block w-full border border-gray-600 p-2 z-10 rounded-md bg-white bg-opacity-10 focus:bg-opacity-90 focus:text-black"
            />
            <button className=" bg-blue-600 rounded-md p-2 z-40 pr-2">Subscribe</button>
          </div>
          <p className="pt-12 text-xs font-extralight">
            All rights reserved. Supernova Palapa Nusantara. 2022
          </p>
        </div>

        <div className="flex w-[70%] px-20 gap-x-32 font-bold w-full justify-end ">
          <div className="flex flex-col gap-y-6 ">
            <Link className="text-white hover:text-blue-600" href="#">
              Home
            </Link>
            <Link className="text-white hover:text-blue-600" href="#services">
              Services
            </Link>
            <Link className="text-white hover:text-blue-600" href="#case-studies">
              Case Studies
            </Link>
            <Link className="text-white hover:text-blue-600" href="#about">
              About Us
            </Link>
            <Link className="text-white hover:text-blue-600" href="#news">
              News and Insight
            </Link>
            <div className="flex flex-col gap-6 py-6">
              <Link className="text-white hover:text-blue-600" href="#">
                Term & Condition
              </Link>
              <Link className="text-white hover:text-blue-600" href="#">
                Privacy-police
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <Link className="text-white hover:text-blue-600" href="#">
              Facebook
            </Link>
            <Link className="text-white hover:text-blue-600" href="#">
              Linkedin
            </Link>
            <Link className="text-white hover:text-blue-600" href="#">
              Twitter
            </Link>
            <Link className="text-white hover:text-blue-600" href="#">
              Instagram
            </Link>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-white hover:text-blue-600 cursor-default">Contact Us</p>
            <div className="flex flex-col gap-y-2">
              <p className="text-blue-600">(xxx) xxxxxxxx</p>
              <p className="text-blue-600">info@supernovacorp.ltd/</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
