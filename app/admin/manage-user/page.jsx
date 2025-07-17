// pages/index.tsx
"use client";
import Head from "next/head";
import Sidebar from "../_component/Sidebar";

export default function Usermanage() {
  return (
    <>
    <Sidebar/>
      <Head>
        <title>Stitch Design</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
        />
        <link rel="icon" href="data:image/x-icon;base64," />
      </Head>

      <main
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f2f4] px-10 py-3">
            <div className="flex items-center gap-4 text-[#121416]">
              <div className="size-4">
                {/* SVG Logo */}
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M39.5563 34.1455V13.8546C39.5563 15.708 ..."
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em]">
                User Management
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-[#121416] text-sm font-medium" href="#">
                  Dashboard
                </a>
                <a className="text-[#121416] text-sm font-medium" href="#">
                  Users
                </a>
                <a className="text-[#121416] text-sm font-medium" href="#">
                  Roles
                </a>
                <a className="text-[#121416] text-sm font-medium" href="#">
                  Settings
                </a>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAI4pKZ9FldywLrU2xbulw5TQP2ZiTDK1XcuQ5T-QFhvfcgdfMT1UnJkJNprBXiK-qt0JqlrZsU27HjdBkFx34jdI95xXMliD_sWFycE2RVBWeXk_IohpRYICO_3oVaWHLar9caDQ6qdjftw0jFcqbrXy7Z14ZCT741oNOEAChvHA0n7XiFBxfcQ2ErFHYDi7CurQhKOzal91anEsYZmv_BTIK0yd5htKG6md7NYyb5COKnCPyz9-0Depb-IvqKB5bczrTwBy-5E_0s")',
                }}
              />
            </div>
          </header>

          {/* Content */}
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#121416] text-[32px] font-bold leading-tight min-w-72">
                  User Details
                </p>
                <button className="h-8 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 bg-[#f1f2f4] text-[#121416] text-sm font-medium">
                  <span className="truncate">Add User</span>
                </button>
              </div>

              <div className="px-4 py-3">
                <div className="flex overflow-hidden rounded-xl border border-[#dde1e3] bg-white">
                  <table className="flex-1">
                    <thead>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">ID</th>
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">First Name</th>
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">Last Name</th>
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">Email</th>
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">Password</th>
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">Mobile No.</th>
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">Role</th>
                        <th className="px-4 py-3 text-left text-[#121416] w-[400px] text-sm font-medium">Create Date</th>
                        <th className="px-4 py-3 text-left text-[#6a7681] w-60 text-sm font-medium">Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* You can map user data dynamically here */}
                      <tr className="border-t border-t-[#dde1e3]">
                        <td className="px-4 py-2 text-[#6a7681] text-sm">1</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm">Sophia</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm">Clark</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm">sophia.clark@email.com</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm">********</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm">123-456-7890</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm">Admin</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm">2023-01-15</td>
                        <td className="px-4 py-2 text-[#6a7681] text-sm font-bold">Edit | Delete</td>
                      </tr>
                      {/* Repeat or map more rows */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
