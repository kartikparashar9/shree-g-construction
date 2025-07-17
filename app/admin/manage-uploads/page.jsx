"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import Sidebar from '../_component/Sidebar';

export default function Manage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const projects = [
    {
      id: 1,
      name: 'Residential Building',
      projectNo: 'RB-101',
      type: 'Building',
      imageUrl: 'https://via.placeholder.com/300',
      operations: 'Edit/Delete',
    },
    {
      id: 2,
      name: 'Office Tower',
      projectNo: 'OT-202',
      type: 'Commercial',
      imageUrl: 'https://via.placeholder.com/300',
      operations: 'Edit/Delete',
    },
    {
      id: 3,
      name: 'Bridge Construction',
      projectNo: 'BC-303',
      type: 'Infrastructure',
      imageUrl: 'https://via.placeholder.com/300',
      operations: 'Edit/Delete',
    },
  ];

  const handleEdit = (id) => {
    alert(`Edit project with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (confirm(`Are you sure you want to delete project with ID: ${id}?`)) {
      alert(`Project with ID: ${id} deleted.`);
    }
  };

  return (
    <>
      <div className="flex h-screen w-screen bg-neutral-50 group/design-root overflow-hidden width-full">
        <Sidebar />
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
          <link
            rel="stylesheet"
            as="style"
            onLoad="this.rel='stylesheet'"
            href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Work+Sans%3Awght%40400%3B500%3B700%3B900"
          />
          <title>Stitch Design</title>
        </Head>

        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
          style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between border-b border-solid border-b-[#f0f2f4] px-10 py-3">
              <div className="flex items-center gap-4 text-[#111418]">
                <div className="size-4">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className="text-[#111418] text-lg font-bold">Shree G Constructor</h2>
              </div>
            </header>

            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <p className="text-[#111418] tracking-light text-[32px] font-bold bg-red-100 px-4 py-2 rounded-lg">
                    Projects
                  </p>
                </div>

                <div className="px-4 py-3 @container">
                  <div className="flex overflow-hidden rounded-lg border border-[#dce0e5] bg-white">
                    <table className="flex-1">
                      <thead>
                        <tr className="bg-grey-50">
                          <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium bg-blue-100">
                            Project Name
                          </th>
                          <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium bg-blue-100">
                            Project No.
                          </th>
                          <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium bg-blue-100">
                            Type
                          </th>
                          <th className="px-4 py-3 text-left text-[#111418] w-14 text-sm font-medium bg-blue-100">
                            Project Image
                          </th>
                          <th className="px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium bg-blue-100">
                            Operations
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((project) => (
                          <tr key={project.id} className="border-b border-[#dce0e5]">
                            <td className="px-4 py-3 text-left text-sm font-medium text-[#111418]">
                              {project.name}
                            </td>
                            <td className="px-4 py-3 text-left text-sm font-medium text-[#111418]">
                              {project.projectNo}
                            </td>
                            <td className="px-4 py-3 text-left text-sm font-medium text-[#111418]">
                              {project.type}
                            </td>
                            <td className="px-4 py-3 text-left text-sm font-medium text-[#111418]">
                              <img
                                src={project.imageUrl}
                                alt={project.name}
                                className="w-12 h-12 object-cover rounded-full cursor-pointer hover:scale-105 transition"
                                onClick={() => openModal(project.imageUrl)}
                              />
                            </td>
                            <td className="px-4 py-3 text-left text-sm font-medium text-[#111418]">
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                                onClick={() => handleEdit(project.id)}
                              >
                                Edit
                              </a>{' '}
                              /{' '}
                              <button
                                className="text-red-500"
                                onClick={() => handleDelete(project.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                    onClick={closeModal}
                  >
                    <div
                      className="bg-white p-6 rounded-lg shadow-lg max-w-2xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={modalImage}
                        alt="Full Project"
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                      <button
                        onClick={closeModal}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                <style>
                  {`
                    @container(max-width:120px) {.table-aa2e3d57-fcdd-44f6-90d7-5e4d0b37af70-column-120 {display: none;}}
                    @container(max-width:240px) {.table-aa2e3d57-fcdd-44f6-90d7-5e4d0b37af70-column-240 {display: none;}}
                    @container(max-width:360px) {.table-aa2e3d57-fcdd-44f6-90d7-5e4d0b37af70-column-360 {display: none;}}
                    @container(max-width:416px) {.table-aa2e3d57-fcdd-44f6-90d7-5e4d0b37af70-column-416 {display: none;}}
                    @container(max-width:536px) {.table-aa2e3d57-fcdd-44f6-90d7-5e4d0b37af70-column-536 {display: none;}}
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
