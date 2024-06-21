// components/AudioPlayer.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@tremor/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const AudioPlayer: React.FC = () => {
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const audioRef3 = useRef<HTMLAudioElement | null>(null);
  const audioRef4 = useRef<HTMLAudioElement | null>(null);
  const audioRef5 = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    // ここで認証を行う

    audioRef1.current = new Audio("/secret/audio/meow.mp3");
    audioRef2.current = new Audio("/secret/audio/dosu.mp3");
    audioRef3.current = new Audio("/secret/audio/burudo-za-.mp3");
    audioRef4.current = new Audio("/secret/audio/baikinman.mp3");
    audioRef5.current = new Audio("/secret/audio/wii.mp3");
  }, []);

  const playSound = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const playAll = () => {
    audioRef1.current?.play();
    audioRef2.current?.play();
    audioRef3.current?.play();
    audioRef4.current?.play();
    audioRef5.current?.play();
  };

  const pauseAll = () => {
    audioRef1.current?.pause();
    audioRef2.current?.pause();
    audioRef3.current?.pause();
    audioRef4.current?.pause();
    audioRef5.current?.pause();
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4">
        <div className="flex justify-center space-x-4 sm:w-1/2">
          <Button variant="secondary" onClick={() => playSound(audioRef1)}>
            にゃーお
          </Button>
          <Button variant="secondary" onClick={() => playSound(audioRef5)}>
            うぁ～
          </Button>
          <Button variant="secondary" onClick={() => playSound(audioRef2)}>
            どすっ
          </Button>
        </div>
        <div className="flex justify-center pt-4 space-x-4 sm:w-1/2">
          <Button variant="secondary" onClick={() => playSound(audioRef3)}>
            ブルドーザー
          </Button>
          <Button variant="secondary" onClick={() => playSound(audioRef4)}>
            バイキンマン
          </Button>
        </div>
      </div>
      <div className="flex justify-center ">
        <Button variant="secondary" onClick={pauseAll}>
          再生一時停止
        </Button>
      </div>
      <div onClick={() => playAll()} className="flex justify-center items-center ">
        <Image
          src="/secret/photo/happyouBaikinman.jpg"
          alt="好きなブルドーザー発表バイキソマン"
          width={500} // ここには適切な値を設定してください
          height={300} // ここには適切な値を設定してください
        />
      </div>
    </>
  );
};

export default AudioPlayer;
