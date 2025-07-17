"use client";
import Image from "next/image";
import { FaHandHoldingWater, FaDumpsterFire, FaFilter, FaAssistiveListeningSystems, FaRecycle, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function ServicePage() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="" id="service">

                {/* Header Section */}
                <div className="relative bg-blue-800 py-16 text-white text-center bg-[url('/carousel-1.jpg')] bg-cover bg-center bg-no-repeat">
                    <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg">
                        <Link href="/home" className="hover:text-white transition-all">
                            Home
                            / </Link>{" "}
                        <Link href="/contact" className="hover:text-white transition-all">
                            Contact Us
                            / </Link>{" "}
                        <Link href="/projects" className="hover:text-white transition-all">
                            Projects
                        </Link>{" "}
                    </p>
                </div>

                {/* Services Section */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        {/* <h2 className="text-blue-600 text-xl uppercase mb-2">Our Service</h2> */}
                        <h3 className="text-4xl font-bold mb-12">
                            Expert Solutions for Narmada Water Connections
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Left Services */}
                            <div className="space-y-6">
                                <ServiceCard
                                    title="Residential Waters"
                                    icon={<FaHandHoldingWater size={40} />}
                                    description="We provide high-quality water supply solutions for homes ensuring safety and health."
                                    reverse
                                />
                                <ServiceCard
                                    title="Commercial Waters"
                                    icon={<FaDumpsterFire size={40} />}
                                    description="Tailored water infrastructure solutions for offices, shops, and commercial buildings."
                                    reverse
                                />
                                <ServiceCard
                                    title="Filtration Plants"
                                    icon={<FaFilter size={40} />}
                                    description="Installation and maintenance of advanced water filtration and treatment units."
                                    reverse
                                />
                            </div>

                            {/* Center Image */}
                            <div className="flex items-center justify-center">
                                <Image src="/shreeji-logo.png" alt="Water" width={400} height={400} className="w-full" />
                            </div>

                            {/* Right Services */}
                            <div className="space-y-6">
                                <ServiceCard
                                    title="Water Softening"
                                    icon={<FaAssistiveListeningSystems size={40} />}
                                    description="Solutions for reducing water hardness to protect your appliances and health."
                                />
                                <ServiceCard
                                    title="Market Research"
                                    icon={<FaRecycle size={40} />}
                                    description="We analyze and plan water needs based on site, region, and technical feasibility."
                                />
                                <ServiceCard
                                    title="Project Planning"
                                    icon={<FaProjectDiagram size={40} />}
                                    description="End-to-end project planning with engineering and regulatory compliance."
                                />
                            </div>
                        </div>
                    </div>
            {/* <Footer /> */}
                </section>
            </div>
        </div>
    );
}

function ServiceCard({ title, description, icon, reverse }) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className={`flex items-center ${reverse ? "flex-row-reverse" : ""}`}>
                <div className="text-blue-600">{icon}</div>
                <div className={`ml-4 ${reverse ? "text-right ml-0 mr-4" : ""}`}>
                    <h4 className="text-xl font-semibold mb-2">{title}</h4>
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}
