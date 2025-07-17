'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const features = [
    {
      icon: 'fas fa-hand-holding-water',
      title: 'Trusted Infrastructure Partner',
      description:
        'Delivering strong, reliable construction solutions tailored to your needs.',
    },
    {
      icon: 'fas fa-water',
      title: 'Efficiency',
      description:
        'Proven expertise in Narmada pipeline and water supply project execution.',
    },
    {
      icon: 'fas fa-smile-beam',
      title: 'Customer Satisfaction First',
      description:
        'Focused on clear communication, timely delivery, and lasting trust.',
    },
    {
      icon: 'fas fa-leaf',
      title: 'Standard & Sustainable Products',
      description:
        'We use certified materials that ensure quality and environmental safety.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white w-full flex justify-center h-[100px] md:h-[150px] overflow-hiddenoverflow-hidden">
            <h2 className="text-4xl font-bold text-blue-600 py-25 uppercase">About Us</h2>
        
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative w-full h-80 md:h-[400px]">
            <Image
              src="/shreeji-logo.png"
              alt="About Us"
              fill
              className="object-contain rounded"
            />
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded shadow text-sm md:text-base">
              17+ Years Experience
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Delivering Quality Water Connections, Every Time.
            </h1>
            <p className="mb-6 text-gray-600 text-base md:text-lg">
              At Shreeji Construction, we specialize in reliable Narmada water connections. With 17+ years of experience, we handle government and private projects — from mainline installations to household tap connections.
            </p>

            {/* Features */}
            {[
              {
                icon: 'fas fa-tint',
                title: 'Satisfied Customer',
                description:
                  'Transparent communication, timely execution, and dependable service drive our success.',
              },
              {
                icon: 'fas fa-faucet',
                title: 'Standard Product',
                description:
                  'We use high-quality pipelines and fittings from trusted suppliers that comply with standards.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-100 rounded p-5 mb-4 flex gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shrink-0">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}

            <Link
              href="/service"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 transition text-sm md:text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="bg-blue-600 py-16 text-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
          <div>
            <i className="fas fa-thumbs-up text-3xl mb-2"></i>
            <h4 className="text-lg mb-1">Happy Clients</h4>
            <p className="text-2xl font-bold">1000+</p>
          </div>
          <div>
            <i className="fas fa-users text-3xl mb-2"></i>
            <h4 className="text-lg mb-1">Labour</h4>
            <p className="text-2xl font-bold">53+</p>
          </div>
          <div>
            <i className="fas fa-heart text-3xl mb-2"></i>
            <h4 className="text-lg mb-1">Years Experience</h4>
            <p className="text-2xl font-bold">17+</p>
          </div>
          <div>
            <i className="fas fa-building text-3xl mb-2"></i>
            <h4 className="text-lg mb-1">Projects Completed</h4>
            <p className="text-2xl font-bold">500+</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h4 className="text-blue-600 uppercase mb-2">Our Feature</h4>
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Strengths</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              <div className="text-white bg-blue-600 rounded-full w-14 h-14 mx-auto flex items-center justify-center mb-4 text-xl">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
