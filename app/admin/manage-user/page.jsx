


"use client";
import Head from "next/head";
import Sidebar from "../_component/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Usermanage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null); // store id to confirm delete
  const itemsPerPage = 6;

  async function getData() {
    try {
      const res = await axios.get("/api/user");
      setData(res.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete("/api/user", { data: { id: deleteId } });
      setDeleteId(null); // close popup
      getData();
    } catch (error) {
      alert("Failed to delete user.");
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>User Management</title>
      </Head>

      <div className="flex h-screen w-screen bg-neutral-50 overflow-hidden">
        <Sidebar />
        <div className="relative overflow-x-auto w-full p-4">
          <h1 className="text-2xl font-bold mb-4">User Management</h1>

          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">First Name</th>
                <th className="px-6 py-3">Last Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Mobile</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((entry, i) => (
                <tr key={entry.id} className="border-t">
                  <td className="px-6 py-3">{(currentPage - 1) * itemsPerPage + i + 1}</td>
                  <td className="px-6 py-3">{entry.firstName}</td>
                  <td className="px-6 py-3">{entry.lastName}</td>
                  <td className="px-6 py-3">{entry.email}</td>
                  <td className="px-6 py-3">{entry.mobile}</td>
                  <td className="px-6 py-3">
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => setDeleteId(entry.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <p className="text-sm">Page {currentPage} of {totalPages}</p>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Custom Delete Confirmation Box */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to delete this user?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleDeleteConfirm}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
