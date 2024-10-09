import React from "react";

export default function SNSButton() {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">SNS</h2>
        <p className="text-lg text-gray-500">
          質問や入部希望、部室見学などは以下のSNSからお願いします。
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="https://twitter.com/shimaneU_keion"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <i className="fab fa-twitter fa-3x"></i>
          <span className="ml-4 text-xl font-semibold">Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/shimadai_keion/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
        >
          <i className="fab fa-instagram fa-3x"></i>
          <span className="ml-4 text-xl font-semibold">Instagram</span>
        </a>
      </div>
      <p className="mt-8 text-center text-gray-500">↑各アイコンをクリックで、SNSに飛べます。</p>
    </div>
  );
}
