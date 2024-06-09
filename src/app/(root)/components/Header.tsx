// Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="title-font font-medium text-white md:mb-0">
          <h1 className="ml-3 text-xl">島根大学 軽音楽部</h1>
        </a>
        <nav className="md:ml-auto md:visible collapse flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-300">
            ホーム
          </a>

          <a href="/sns" className="mr-5 hover:text-gray-300">
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
