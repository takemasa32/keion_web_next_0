import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import CustomImage from "./CustomImage"; // カスタムコンポーネントをインポート

import { events as tempEvents } from "@/app/data/events";
interface Event {
  title: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
}

interface EventListProps {
  events?: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const viewEvents = events || tempEvents;
  return (
    <div className="mt-8 sm:mt-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6 sm:mb-8 break-words">
        イベント情報 一覧
      </h1>
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {viewEvents.map((event, index) => (
          <Link href={event.link || "#"} key={index}>
            <div
              className={`relative bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${
                event.link ? "hover:bg-gray-200" : ""
              }`}
            >
              <CustomImage
                src={event.image || "/image/keionMiniLogo.JPG"}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 break-words">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-2 sm:mb-4 break-words">{event.date}</p>
                <p className="text-gray-700 break-words">{event.description}</p>
              </div>
              {event.link && (
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                  <FaExternalLinkAlt className="text-gray-800" />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;
