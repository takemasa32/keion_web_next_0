import "./globals.css";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "島根大学 軽音楽部",
  description: "島根大学軽音楽部の紹介ページ",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
