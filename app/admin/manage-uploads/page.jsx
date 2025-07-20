"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../_component/Sidebar";

export default function ProductTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchData = async () => {
  try {
    const response = await axios.get("/api/work");
    console.log("Full response:", response); // Check this in browser console
    setData(response.data || []);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};
    fetchData();
  }, []);


  async function handleDelete(id) {
        await axios.delete("api/work/" + id)
        handleApi()
    }

  return (
    <div className="flex h-screen w-screen bg-neutral-50 group/design-root overflow-hidden width-full">
      <Sidebar />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            {data.map((entry, i) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{entry.projectName}</td>
                <td className="px-6 py-4">{entry.projectNumber}</td>
                <td className="px-6 py-4">{entry.type}</td>
                <td className="px-6 py-4">{entry.zone}</td>
                <td className="px-6 py-4">{entry.area}</td>
                <td className="px-6 py-4">{entry.workCategory}</td>
                <td className="px-6 py-4">
                  <img src={entry.imageUrls} alt="project" className="h-10 w-10 rounded-full" />
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
                 <button
       onClick={() => handleDelete(entry._id)}
       className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
    Delete
  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
