"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TopLoadingProps {
  text: string;
  time?: number;
}

const TopLoading: React.FC<TopLoadingProps> = ({ text, time }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setLoading(false);
      },
      time ? time : 2000
    ); // 2秒後にローディングを非表示にする

    return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリアする
  }, [time]);

  const words = text.split("");

  const textAnimate = words.map((word, index) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        key={index}
        className="text-white text-4xl sm:text-6xl md:text-8xl font-bold"
      >
        {word}
      </motion.div>
    );
  });

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <svg
              className="absolute top-10 left-10 w-16 h-16 opacity-50 animate-spin-slow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L12 22M2 12L22 12" />
            </svg>
            <svg
              className="absolute bottom-10 right-10 w-16 h-16 opacity-50 animate-spin-slow-reverse"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L12 22M2 12L22 12" />
            </svg>
            <svg
              className="absolute top-1/2 left-1/2 w-32 h-32 opacity-30 animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L12 22M2 12L22 12" />
            </svg>
          </div>
          <div className="relative z-10 flex space-x-1">{textAnimate}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopLoading;
