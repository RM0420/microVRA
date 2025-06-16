"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description?: string;
  imageUrl: string;
}

interface TeamCarouselProps {
  boardMembers: TeamMember[];
  volunteerLeaders: TeamMember[];
}

export default function TeamCarousel({
  boardMembers,
  volunteerLeaders,
}: TeamCarouselProps) {
  const [activeTab, setActiveTab] = useState<"board" | "volunteers">("board");

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("board")}
          className={`py-3 px-6 font-medium text-lg ${
            activeTab === "board"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-600 hover:text-green-500"
          }`}
        >
          Board of Directors
        </button>
        <button
          onClick={() => setActiveTab("volunteers")}
          className={`py-3 px-6 font-medium text-lg ${
            activeTab === "volunteers"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-600 hover:text-green-500"
          }`}
        >
          Volunteer Leaders
        </button>
      </div>

      <div className="space-y-16">
        {activeTab === "board" && (
          <div>
            {boardMembers.map((member, index) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-6 rounded-lg shadow-md mb-8"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div
                  className="md:w-1/3 mb-6 md:mb-0 md:mr-8"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 100}
                >
                  <div className="w-full aspect-[4/5] rounded overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={`${member.name} - ${member.title}`}
                      width={400}
                      height={500}
                      className={`w-full h-full ${
                        member.name === "Anderson Chan"
                          ? "object-contain"
                          : "object-cover object-top"
                      } rounded`}
                      style={
                        member.name === "Anderson Chan"
                          ? { objectPosition: "center top" }
                          : undefined
                      }
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-xl font-semibold text-green-600 mb-4">
                    {member.title}
                  </p>
                  {member.description && (
                    <p className="text-gray-700 text-base leading-relaxed">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "volunteers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerLeaders.map((member, index) => (
              <div
                key={member.id}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-40 h-40 mb-4 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.title}`}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-md font-medium text-green-600 text-center">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
