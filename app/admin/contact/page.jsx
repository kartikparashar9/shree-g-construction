


"use client";
import Head from "next/head";
import Sidebar from "../_component/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/contact");
        setData(data.data || []);
        console.log("first", data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <Head>
        <title>Contact Details</title>
      </Head>

      <div className="flex flex-col sm:flex-row min-h-screen bg-neutral-50 overflow-x-hidden">
        <Sidebar />

        <main
          className="flex-1 bg-white px-4 sm:px-8 py-6 overflow-auto"
          style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
        >
          <h1 className="text-2xl font-bold mb-6 text-[#111518]">
            Contact Details
          </h1>

          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <>
              <div className="overflow-x-auto rounded-md shadow-md">
                <table className="min-w-full border-collapse bg-white text-sm text-left">
                  <thead className="bg-gray-100 text-black">
                    <tr>
                      <th className="p-3 min-w-[120px]">Name</th>
                      <th className="p-3 min-w-[140px]">Mobile</th>
                      <th className="p-3 min-w-[180px]">Email</th>
                      <th className="p-3 min-w-[250px]">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((entry, i) => (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="p-3 text-[#111518]">{entry.name}</td>
                        <td className="p-3 text-[#60768a]">{entry.mobile}</td>
                        <td className="p-3 text-[#60768a]">{entry.email}</td>
                        <td className="p-3 text-[#60768a]">{entry.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Previous
                </button>
                <p className="text-sm">
                  Page {currentPage} of {totalPages}
                </p>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
