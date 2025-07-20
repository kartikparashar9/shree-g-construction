"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'; // ✅ Correct for App Router
import axios from 'axios'; // don't forget this

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [feedback, setFeedback] = useState(""); 
  const router = useRouter(); // ✅ Now works

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/sign-in", data);
      if (response.status === 200) {
        setFeedback("Signed in successfully ✅");
        setData({ email: "", password: "" });
        router.push('/'); // ✅ works correctly now
      }
    } catch (error) {
      setFeedback("Failed to sign in ❌");
      console.error("Server error:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">SIGN IN</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
                value={data.email}
                onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
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
                onChange={(e) => setData(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Create Your New Account? <a href="/sign-up" className="text-blue-600 hover:underline">Register Now</a>
          </p>

          {feedback && (
            <p className="text-center text-sm mt-4 text-red-500">{feedback}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;