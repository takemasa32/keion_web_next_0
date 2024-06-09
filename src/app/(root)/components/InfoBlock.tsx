// InfoBlock.tsx
import React from "react";

interface InfoBlockProps {
  icon: string;
  title: string;
  description: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ icon, title, description }) => {
  const formattedDescription = description.split("\\n").map((line, index) => (
    <p key={index} className="text-gray-500">
      {line}
    </p>
  ));

  return (
    <div className="flex divide-x rounded-lg border bg-gray-50">
      <div className="flex items-center p-2 text-indigo-500 md:p-4 ">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="mb-2 text-gray-800 text-lg font-semibold md:text-xl">{title}</h3>
        {formattedDescription}
      </div>
    </div>
  );
};

export default InfoBlock;
