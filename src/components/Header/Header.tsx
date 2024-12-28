"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  const closeMenu = () => {
    setisClick(false);
  };

  return (
    <main>
      <nav className="bg-black border-x-2 shadow-slate-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src={"/photos/logo.jpg"}
                  alt="Logo"
                  width={70}
                  height={100}
                  className=""
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-8 lg:space-x-16">
                <Link
                  href={"https://github.com/mhamzazai/"}
                  target="_blank"
                  className="text-white hover:bg-white
                              hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin"
                >
                  Go To GitHub
                </Link>
                <Link
                  href={"https://www.npmjs.com/~mhamzazai"}
                  target="_blank"
                  className="text-white hover:bg-white
                                 hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin"
                >
                  Go To Npm
                </Link>
                <Link
                  href={"/About"}
                  className="text-white
                                 hover:bg-white hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin"
                >
                  About MySelf
                </Link>
                <Link
                  href={"/"}
                  className="text-white hover:bg-white
                                 hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin"
                >
                  Home
                </Link>
                <Link
                  href={"/Blogs"}
                  className="text-white hover:bg-white
                                 hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin"
                >
                  Blogs
                </Link>
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <i
                className={`${
                  isClick
                    ? "ri-close-large-line text-3xl text-white"
                    : "ri-menu-3-line  text-3xl text-white"
                }`}
                onClick={toggleNavbar}
              ></i>
            </div>
          </div>
        </div>

        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-3 sm:px-4 flex flex-col text-center bg-slate-950">
              <Link
                href="https://github.com/mhamzazai/"
                target="_blank"
                className="text-white hover:bg-white hover:text-black rounded-sm
                            hover:scale-95 transition-all text-xl font-semibold font-sans border
                            bg-black"
                onClick={closeMenu}
              >
                Go To GitHub
              </Link>
              <Link
                href="https://www.npmjs.com/~mhamzazai"
                target="_blank"
                className="text-white hover:bg-white hover:text-black rounded-sm text-xl
                            hover:scale-95 transition-all font-semibold font-sans border bg-black"
                onClick={closeMenu}
              >
                Go To Npm
              </Link>
              <Link
                href="/About"
                className="text-white hover:bg-white hover:text-black rounded-sm text-xl
                            hover:scale-95 transition-all font-semibold font-sans border bg-black"
                onClick={closeMenu}
              >
                About MySelf
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-sm text-xl
                            hover:scale-95 transition-all font-semibold font-sans border bg-black"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/Blogs"
                className="text-white hover:bg-white hover:text-black rounded-sm text-xl
                            hover:scale-95 transition-all font-semibold font-sans border bg-black"
                onClick={closeMenu}
              >
                Blogs
              </Link>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}
