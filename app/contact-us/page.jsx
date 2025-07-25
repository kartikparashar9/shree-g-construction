"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [feedback, setFeedback] = useState(""); // Success or error message
  const url = "/api/contact"; // Your API endpoint

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, data);
      if (response.status === 200) {
        setFeedback("Message sent successfully ✅");
        setData({ name: "", email: "", mobile: "", message: "" }); // reset form
      }
    } catch (error) {
      setFeedback("Failed to send message ❌");
      console.error("Server error:", error);
    }
  };

  return (
    <div id="contact-us">
      {/* Header section (unchanged) */}
      <div className="relative py-20 text-white text-center bg-[url('/carousel-1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-md">
            Let's Talk 💬
          </h2>
          <p className="text-lg font-medium mb-2">
            Have questions? We’d love to hear from you.
          </p>
          <p className="text-sm text-gray-200">
            <Link href="/home">Home / </Link>
            <Link href="/service">Services / </Link>
            <Link href="/projects">Projects</Link>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-10 shadow-xl rounded-3xl">
            <h3 className="text-sm uppercase text-blue-600 tracking-widest mb-2">
              Let’s Connect
            </h3>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Send Your Message
            </h2>
            <p className="mb-8 text-gray-600">
              Got a question or just want to say hello? We'd love to hear from
              you. Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 p-4 rounded-xl transition-all"
                value={data.name}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 p-4 rounded-xl transition-all"
                value={data.email}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 p-4 rounded-xl transition-all"
                value={data.mobile}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, mobile: e.target.value }))
                }
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 p-4 rounded-xl transition-all"
                value={data.message}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, message: e.target.value }))
                }
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-xl cursor-pointer font-semibold hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
              {feedback && (
                <p className="text-center text-sm font-medium text-green-600 mt-2">
                  {feedback}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info & Map (unchanged) */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-bold mb-1">Address</h4>
                <p className="text-gray-600">
                  128 Brijeshwari Extn., Pipliyahana, Indore, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
              <FaEnvelope className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-bold mb-1">Mail Us</h4>
                <p className="text-gray-600">
                  shreejiconstruction.bkp@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
              <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-bold mb-1">Telephone</h4>
                <p className="text-gray-600">+91 9752020111</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <iframe
                className="w-full h-72 md:h-80 lg:h-96 grayscale-[40%] hover:grayscale-0 transition-all duration-500 ease-in-out"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.228022538557!2d75.9061882!3d22.7041255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e32834bd09c1%3A0xc3d0ee2c3a62d9a!2s128%2C%20Brajeshwari%20Extension%2C%20Pipliyahana%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e0!3m2!1sen!2sin!4v1720804448912!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
