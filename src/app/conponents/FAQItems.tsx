import React from "react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="anm_mod right delay relative rounded-lg bg-gray-100 p-5 pt-8">
    <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
      <svg
        xmlns="https://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.732 1 3 3 0 104.865 0 1 1 0 11-1.732-1A1 1 0 0010 7z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <h3 className="mb-3 text-gray-800 text-lg font-semibold md:text-xl">
      {question}
    </h3>
    <p className="text-gray-500">{answer}</p>
  </div>
);

export default FAQItem;
