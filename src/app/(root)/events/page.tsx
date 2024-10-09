"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { events } from "@/app/data/events";

const EventsPage = () => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/image/keionMiniLogo.JPG"; // デフォルトのロゴ画像のパス
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-black mb-8">イベント情報</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Link href={event.link || "#"} key={index}>
              <div
                className={`relative bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${
                  event.link ? "hover:bg-gray-200" : ""
                }`}
              >
                <Image
                  src={event.image || "/image/keionMiniLogo.JPG"}
                  alt={event.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  onError={handleImageError}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
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
    </div>
  );
};

export default EventsPage;
