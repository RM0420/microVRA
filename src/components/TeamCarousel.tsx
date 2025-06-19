"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description?: string;
  imageUrl: string;
  objectPosition?: string;
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
    <div className="w-full overflow-hidden">
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab("board")}
          className={`py-3 px-4 md:px-6 font-medium text-sm md:text-lg whitespace-nowrap flex-shrink-0 ${
            activeTab === "board"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-600 hover:text-green-500"
          }`}
        >
          Board of Directors
        </button>
        <button
          onClick={() => setActiveTab("volunteers")}
          className={`py-3 px-4 md:px-6 font-medium text-sm md:text-lg whitespace-nowrap flex-shrink-0 ${
            activeTab === "volunteers"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-600 hover:text-green-500"
          }`}
        >
          Volunteer Leaders
        </button>
      </div>

      <div className="space-y-12 md:space-y-16 overflow-hidden">
        {activeTab === "board" && (
          <div className="space-y-8">
            {boardMembers.map((member, index) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-center md:items-center bg-gray-50 p-4 md:p-6 rounded-lg shadow-md overflow-hidden"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div
                  className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6 lg:mr-8 flex justify-center md:justify-start flex-shrink-0"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 100}
                >
                  <div className="w-full max-w-xs md:max-w-none aspect-[4/5] rounded overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={`${member.name} - ${member.title}`}
                      width={400}
                      height={500}
                      className={`w-full h-full ${
                        member.name === "Anderson Chan"
                          ? "object-contain"
                          : "object-cover"
                      } ${
                        member.objectPosition &&
                        ["top", "center", "bottom", "left", "right"].includes(
                          member.objectPosition
                        )
                          ? `object-${member.objectPosition}`
                          : ""
                      } rounded`}
                      style={
                        member.objectPosition &&
                        !["top", "center", "bottom", "left", "right"].includes(
                          member.objectPosition
                        )
                          ? { objectPosition: member.objectPosition }
                          : undefined
                      }
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 min-w-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 break-words">
                    {member.name}
                  </h2>
                  <p className="text-lg md:text-xl font-semibold text-green-600 mb-4 break-words">
                    {member.title}
                  </p>
                  {member.description && (
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed break-words">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "volunteers" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {volunteerLeaders.map((member, index) => (
              <div
                key={member.id}
                className="flex flex-col items-center bg-gray-50 p-4 md:p-6 rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.title}`}
                    width={160}
                    height={160}
                    className={`w-full h-full object-cover ${
                      member.objectPosition
                        ? `object-${member.objectPosition}`
                        : "object-center"
                    }`}
                    sizes="(max-width: 768px) 128px, 160px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 text-center break-words">
                  {member.name}
                </h3>
                <p className="text-sm md:text-md font-medium text-green-600 text-center break-words">
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
