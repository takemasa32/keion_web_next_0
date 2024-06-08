import React from "react";

export default function SNSButton() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-4 items-center md:mb-8 lg:flex-row lg:justify-between">
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
          SNS
        </h2>
        <p className="max-w-md text-center text-gray-400 lg:text-right">
          質問や入部希望,部室見学などは以下のSNSからお願いします．
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-2 lg:gap-6">
        <a
          href="https://twitter.com/shimaneU_keion"
          target="_blank"
          className="hover:no-underline"
        >
          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
            <i className="fab fa-twitter fa-3x"></i>
          </div>
        </a>
        <a
          href="https://www.instagram.com/shimadai_keion/"
          target="_blank"
          className="hover:no-underline"
        >
          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
            <i className="fab fa-instagram fa-3x"></i>
          </div>
        </a>
      </div>
      <p className="mt-2 max-w-md text-center text-gray-400 lg:text-right">
        ↑各アイコンをクリックで、SNSに飛べます．
      </p>
    </div>
  );
}
