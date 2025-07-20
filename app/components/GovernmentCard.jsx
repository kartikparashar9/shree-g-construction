"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GovernmentProjectCard({ project }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  const description = project?.description || "";
  const isLong = description.length > 100;
  const displayedDescription = showFullDescription
    ? description
    : isLong
    ? description.slice(0, 100) + "..."
    : description;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-64"
      >
        {Array.isArray(project?.imageUrls) && project.imageUrls.length > 0 ? (
          project.imageUrls.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img
              src="/no-image.jpg"
              alt="No image available"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
        )}
      </Swiper>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          PROJECT NAME: {project.projectName}
        </h2>
        <h2 className="text-xl font-semibold text-gray-800">
          PROJECT NUMBER: {project.projectNumber}
        </h2>
        <p className="mt-2 text-gray-600 text-sm">TYPE: {project.type}</p>
        <p className="mt-2 text-gray-600 text-sm">AREA: {project.area}</p>
        <p className="mt-2 text-gray-600 text-sm">ZONE: {project.zone}</p>
        <p className="mt-2 text-gray-600 text-sm">WARD NUMBER: {project.wardNumber}</p>
        <p className="mt-2 text-gray-600 text-sm">WORK CATEGORY: {project.workCategory}</p>

        <hr className="my-4 border-gray-300" />

        <div className="text-gray-600 text-sm">
          <p className="mb-2">{displayedDescription}</p>
          {isLong && (
            <button
              onClick={toggleDescription}
              className="text-blue-600 font-medium hover:underline"
            >
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
