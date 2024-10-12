"use client";
import React from "react";
import Image, { ImageProps } from "next/image";

const CustomImage = (props: ImageProps) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/image/keionMiniLogo.JPG"; // デフォルトのロゴ画像のパス
  };

  return <Image {...props} onError={handleImageError} />;
};

export default CustomImage;
