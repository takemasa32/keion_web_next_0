"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <p className="flex items-center title-font font-medium text-white mb-4 md:mb-0 cursor-pointer">
              <Image
                src="/image/keionMiniLogo.JPG"
                alt="軽音楽部ロゴ"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-3 text-xl">島根大学 軽音楽部</span>
            </p>
          </Link>
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white md:hidden ml-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:ml-auto w-full md:w-auto`}
        >
          <Link href="/">
            <p className="block md:inline-block mr-5 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              ホーム
            </p>
          </Link>
          <Link href="/events">
            <p className="block md:inline-block mr-5 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              イベント
            </p>
          </Link>
          <Link href="/sns">
            <p className="block md:inline-block mr-5 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              お問い合わせ
            </p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
