"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

// Import Swiper styles for core, navigation, pagination, and effects
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

interface CarouselImage {
  src: string;
  position: string;
}

interface EventImageCarouselProps {
  images: CarouselImage[];
  imageAlt: string;
}

/**
 * A sophisticated image carousel powered by Swiper.js, featuring a creative slide-in
 * animation, autoplay, and interactive navigation controls.
 */
export default function EventImageCarousel({
  images,
  imageAlt,
}: EventImageCarouselProps) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-lg mx-auto h-96 flex items-center justify-center bg-gray-200 rounded-lg">
        <p className="text-red-500">
          No images were provided for this carousel.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-125%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -500],
          },
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        className="w-full h-96 rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${image.src}')`,
                backgroundPosition: image.position,
              }}
              role="img"
              aria-label={`${imageAlt} - Image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Custom Pagination Container */}
      <div className="swiper-pagination-custom absolute !bottom-4 !left-1/2 !-translate-x-1/2 z-10 flex space-x-2 [&_.swiper-pagination-bullet]:!bg-white/70 [&_.swiper-pagination-bullet-active]:!bg-white"></div>
    </div>
  );
}
