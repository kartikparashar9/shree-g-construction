"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {

    const faqs = [
        {
            question: "What services does Shreeji Construction provide?",
            answer:
                "We specialize in reliable infrastructure development, Narmada water pipeline connections, site planning, and sustainable construction solutions.",
        },
        {
            question: "Do you handle government-approved Narmada connections?",
            answer:
                "Yes, we have extensive experience and authorization to work on government-regulated Narmada pipeline projects.",
        },
        {
            question: "What makes Shreeji Construction different from others?",
            answer:
                "Our client-first approach, transparent communication, and use of certified materials ensure quality and satisfaction in every project.",
        },
        {
            question: "Can I get a site visit or consultation before the project begins?",
            answer:
                "Absolutely! We offer site inspections and consultations to understand your needs and provide accurate project planning.",
        },
    ];

      const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    return (
        <>
            {/* Footer Start */}
            <div className="w-full bg-[#111] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-10 items-center">
                        {/* Social Icons */}
                        <div className="flex gap-3 justify-center lg:justify-end">
                            {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full"
                                >
                                    <i className={`fab fa-${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 text-white">
                        {/* Logo and Description */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                <img src="/shreeji-logo.png" className="h-30" alt="" />
                                <span>Shreeji Construction</span>
                            </h3>
                            <p className="mb-4">
                                Shreeji Construction specializes in water supply, Narmada connections, and reliable infrastructure services.
                            </p>
                        </div>

                        {/* About Us Links */}
                        <section className="">
                            <div className="">
                                <h2 className="text-xl font-semibold mb-4">
                                    FAQ'S
                                </h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className=""
                                        >
                                            <button
                                                className="flex justify-between items-center w-full text-left font-semibold text-lg"
                                                onClick={() => toggle(index)}
                                            >
                                                {faq.question}
                                                <span className="ml-4 text-blue-600">
                                                    {openIndex === index ? "-" : "+"}
                                                </span>
                                            </button>
                                            {openIndex === index && (
                                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Business Hours */}
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
                            <div className="mb-3">
                                <h6 className="text-gray-400">Mon - Friday:</h6>
                                <p>09.00 am to 07.00 pm</p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-gray-400">Saturday:</h6>
                                <p>10.00 am to 06.00 pm</p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-gray-400">Vacation:</h6>
                                <p>All Sunday is our vacation</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="hover:underline">
                                    <i className="fas fa-map-marker-alt mr-2"></i> 128 Brijeshwari Extn., Pipliyahana, Indore
                                </a>
                                <a href="mailto:info@example.com" className="hover:underline">
                                    <i className="fas fa-envelope mr-2"></i> shreejiconstruction.bkp@gmail.com
                                </a>
                                <a href="tel:+919752020111" className="hover:underline">
                                    <i className="fas fa-phone mr-2"></i> +919752020111
                                </a>
                                <a href="tel:+917879601493" className="hover:underline">
                                    <i className="fas fa-print mr-2"></i> +917879601493
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full bg-gray-900 py-4 text-white text-sm">
                <div className="container mx-auto px-4 flex justify-center md:flex-row justify-between items-center gap-2">
                    <p className="text-center md:text-left">
                        <i className="fas fa-copyright"></i>{" "}
                        <span className="border-b border-gray-500">Shreeji Construction</span>, All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
}
