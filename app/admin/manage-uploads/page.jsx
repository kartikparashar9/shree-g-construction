

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../_component/Sidebar";
import { useRouter } from 'next/navigation';


export default function ProductTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
  
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("/api/work");
      setData(response.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete("/api/work", { data: { id } });
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting:", error);
    }
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex h-screen w-screen bg-neutral-50 overflow-hidden">
      <Sidebar />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full p-4">
        <h1 className="text-2xl font-bold mb-4">Project Work</h1>

        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Project Name</th>
              <th className="px-6 py-3">Project No</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Zone</th>
              <th className="px-6 py-3">Area</th>
              <th className="px-6 py-3">Work</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Operations</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((entry, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{entry.projectName}</td>
                <td className="px-6 py-4">{entry.projectNumber}</td>
                <td className="px-6 py-4">{entry.type}</td>
                <td className="px-6 py-4">{entry.zone}</td>
                <td className="px-6 py-4">{entry.area}</td>
                <td className="px-6 py-4">{entry.workCategory}</td>
                <td className="px-6 py-4">
                  <img
                    src={entry.imageUrls}
                    alt="project"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" onClick={() => router.push(`/admin/edit?id=${entry.id}`)}
>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <p className="text-sm">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

