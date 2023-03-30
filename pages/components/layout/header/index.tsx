import { Button } from "antd";
import Link from "next/link";
import React from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import Image from "next/image";

import Header_Logo from "@/resources/images/header-Logo.png";
type Props = {};

type imgProps = { src: number; width: number; quality: number };

const myLoader = ({ src, width, quality }: imgProps) => {
  return `https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/c4/0c/49/c40c49f7-11b7-e747-9414-7416a6631754/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Navigation({}: Props) {
  return (
    <>
      <header className="shadow-md font-mono p-2">
        <div className="container mx-auto">
          <nav className="flex items-center ">
            <Link href="/" className="flex gap-1 items-center mr-40">
              <figure className="w-10 h-10">
                <Image
                  src={Header_Logo}
                  width={40}
                  height={40}
                  alt="App Logo"
                />
              </figure>
              <p className="text-black uppercase text-base  text-center  font-semibold ">
                purchase
                <br />
                today
              </p>
            </Link>

            <ul className=" flex-1 flex items-center gap-10  ">
              <li>
                <Link
                  className="text-[16px]  hover:text-red-300 hover:ease-out hover:font-semibold"
                  href={`/`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[16px]  hover:text-red-300 hover:ease-out hover:font-semibold"
                  href={`/`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[16px]  hover:text-red-300 hover:ease-out hover:font-semibold"
                  href={`/`}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  className="text-[16px]  hover:text-red-300 hover:ease-out hover:font-semibold"
                  href={`/`}
                >
                  Cart
                </Link>
              </li>
            </ul>
            <Button
              className="ml-14 border-2 px-4 py-1 rounded-md text-red-900 font-semibold hover:ring-2  hover:ring-pink-600"
              type="default"
              size="middle"
            >
              Login
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}
