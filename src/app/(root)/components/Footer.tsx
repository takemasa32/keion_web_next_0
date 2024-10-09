// Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white mt-auto py-6">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">© 2023-2024 島根大学 軽音楽部</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com/shimaneU_keion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/shimadai_keion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
