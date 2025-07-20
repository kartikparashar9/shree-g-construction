'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaHandHoldingWater, FaSearch } from 'react-icons/fa'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      <div className="w-full bg-white shadow z-50 relative">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap lg:flex-nowrap">
        {/* Brand */}
        <Link href="#" className="flex items-center space-x-2 text-primary text-2xl font-bold">
        <img
            src="/shreeji-logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full scale-[1.3]"
          />
          {/* <span className="hidden lg:inline">Shreeji</span> */}
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl text-gray-800 lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:justify-between lg:w-auto mt-4 lg:mt-0`}
        >
          {/* Nav Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600 py-2">Home</Link>
            <Link href="/about" className="hover:text-blue-600 py-2">About</Link>
            <Link href="/service" className="hover:text-blue-600 py-2">Service</Link>

            {/* Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-600 py-2 flex items-center gap-1"
              >
                Project
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 top-10 mt-1 bg-white border shadow-md rounded-md z-50 ${
                  dropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <Link href="/projects/government-project" className="block px-4 py-2 hover:bg-gray-100">Government Project</Link>
                <Link href="/projects/private-project" className="block px-4 py-2 hover:bg-gray-100">Private Project</Link>
              </div>
            </div>

            <Link href="/contact-us" className="hover:text-blue-600 py-2">Contact</Link>
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center border-l border-blue-600 pl-4 ml-6">
            <div className="flex flex-col text-sm">
              <span className="text-gray-500"></span>
              <a href="tel:+917879601493" className="text-blue-600 font-medium">Call : +917879601493</a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-4 lg:mt-0 lg:ml-6">
            <Link
              href="/sign-in"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm font-medium"
            >
              Sign-in
            </Link>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}
