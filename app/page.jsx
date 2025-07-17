'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutPage from './about/page';
import ServicePage from './service/page';
import Contact from './contact-us/page';
import ProjectsPage from './projects/page';
import AllProjectsPage from './projects/page';

const slides = [
  {
    image: '/carousel-1.jpg',
    heading: 'Safe Water For Healthy Life',
    subheading: 'Clean & Pure',
    text: 'Access to clean drinking water is essential. Join us to make it universal.',
  },
  {
    image: '/carousel-2.jpg',
    heading: 'Hydration for a Better Tomorrow',
    subheading: 'Healthy Lifestyle',
    text: 'Delivering purified water to every household, every day.',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div>
      {/* Hero / Slider Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${i}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
              <h4 className="text-xl md:text-2xl font-semibold mb-2 tracking-wide uppercase">
                {slide.subheading}
              </h4>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                {slide.heading}
              </h1>
              <p className="max-w-xl text-base md:text-lg mb-6">{slide.text}</p>
              <div className="flex gap-4">
                <Link
                  href="#services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
                <Link
                  href="#contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-gray-200"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-gray-200"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition ${
                current === i ? 'bg-white scale-110' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* SPA Style Sections */}
      <AboutPage />
      <ServicePage />
      <AllProjectsPage />
      <Contact />
    </div>
  );
}
