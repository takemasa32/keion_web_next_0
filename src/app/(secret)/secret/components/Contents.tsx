import React from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import TopLoading from "@/app/(root)/components/TopLoading";
import AudioPlayer from "./AudioPlayer";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="title-font font-medium text-white md:mb-0">
            <h1 className="ml-3 text-xl">非公式コンテンツ</h1>
          </a>
          <nav className="md:ml-auto md:visible collapse flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-300">
              ホーム
            </a>
          </nav>
        </div>
      </header>
      <div className="bg-white">
        <TopLoading text="お楽しみコンテンツ" />
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <AudioPlayer />;
      </div>
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="text-sm text-center md:text-left">© サイト作成者</p>
        </div>
      </footer>
    </>
  );
};

export default NotFoundPage;
