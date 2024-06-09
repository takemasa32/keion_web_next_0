import "./../globals.css";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export const metadata = {
  title: "お楽しみ",
  content: " viewport-fit=cover",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <Head>
        <link rel="icon" href="./../favicon.ico" />
      </Head>
      <body>
        <div className="flex flex-col min-h-screen bg-white">
          <SpeedInsights />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
