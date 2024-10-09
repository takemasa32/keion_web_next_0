"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <p className="flex items-center title-font font-medium text-white cursor-pointer">
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
        </div>
        <nav className="flex flex-col md:flex-row md:items-center md:ml-auto w-full md:w-auto md:justify-end">
          <div className="flex flex-row justify-center w-full md:w-auto">
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
