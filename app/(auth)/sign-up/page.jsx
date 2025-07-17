"use client"
import Head from 'next/head';
import React, { useState } from 'react'; 


const signUp = () => {

  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    mobile : ""
  });

  const [feedback, setFeedback] = useState(""); // Success or error message
  const url = "/api/sign-up"; // Your API endpoint

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, data);
      if (response.status === 200) {
        setFeedback("Message sent successfully ✅");
        setData({ firstName: "", lastName: "", email: "", mobile: "", password: "" }); // reset form
      }
    } catch (error) {
      setFeedback("Failed to send message ❌");
      console.error("Server error:", error);
    }
  };



  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

          <form className="space-y-5" onClick={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John"
                value={data.firstName}
                onChange={(e) => setData((prev) => ({ ...prev, firstName: e.target.value }))}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Doe"
                value={data.lastName}
                onChange={(e) => setData((prev) => ({ ...prev, lastName: e.target.value }))}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
                value={data.email}
                onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-600 mb-1">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91215616353"
                value={data.mobile}
                onChange={(e) => setData((prev) => ({ ...prev, mobile: e.target.value }))}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                value={data.password}
                onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Already have an account? <a href="/sign-in" className="text-blue-600 hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default signUp