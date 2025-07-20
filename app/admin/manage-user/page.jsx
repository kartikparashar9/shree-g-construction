"use client";
import Head from "next/head";
import Sidebar from "../_component/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Usermanage() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const { data } = await axios.get("/api/sign-up");
      console.log(data);
      setData(data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex h-screen w-screen bg-neutral-50 group/design-root overflow-hidden width-full">
        <Sidebar />
        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Firstname</th>
                <th className="px-6 py-3">Lastname</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Mobile No.</th>
                <th className="px-6 py-3">Password</th>
                <th className="px-6 py-3">Operation</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3 text-[#111518]">{i + 1}</td>
                  <td className="p-3 text-[#111518]">{entry.firstName}</td>
                  <td className="p-3 text-[#60768a]">{entry.lastName}</td>
                  <td className="p-3 text-[#60768a]">{entry.email}</td>
                  <td className="p-3 text-[#60768a]">{entry.mobile}</td>
                  <td className="p-3 text-[#60768a]">{entry.password}</td>
                  <td className="p-3 text-[#60768a]">
                    <a href="#">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
