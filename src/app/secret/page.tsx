"use client";
import Head from "next/head";
import React, { useState } from "react";
import { Button } from "@tremor/react";
import Image from "next/image";

const AudioPlayerPage: React.FC = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const playSound = (soundFile: string) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(soundFile);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <div className="bg-white">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4">
        <div className="flex justify-center space-x-4 sm:w-1/2">
          <Button variant="secondary" onClick={() => playSound("/secret/audio/meow.mp3")}>
            にゃーお
          </Button>
          <Button variant="secondary" onClick={() => playSound("/secret/audio/dosu.mp3")}>
            どすっ
          </Button>
        </div>
        <div className="flex justify-center space-x-4 sm:w-1/2">
          <Button variant="secondary" onClick={() => playSound("/secret/audio/burudo-za-.mp3")}>
            ブルドーザー
          </Button>
          <Button variant="secondary" onClick={() => playSound("/secret/audio/baikinman.mp3")}>
            バイキンマン
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Image
          src="/secret/photo/happyouBaikinman.jpg"
          alt="好きなブルドーザー発表バイキソマン"
          width={500} // ここには適切な値を設定してください
          height={300} // ここには適切な値を設定してください
        />
      </div>
    </div>
  );
};

export default AudioPlayerPage;
