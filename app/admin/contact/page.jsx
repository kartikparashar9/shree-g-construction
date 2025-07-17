import Head from "next/head";
import Sidebar from "../_component/Sidebar";

export default function Contact() {
    const data = [
        {
            name: "Arjun Patel",
            mobile: "+91 98765 43210",
            email: "arjun.patel@email.com",
            msg: "Interested in building a new residential complex.",
        },
        {
            name: "Priya Sharma",
            mobile: "+91 87654 32109",
            email: "priya.sharma@email.com",
            msg: "Looking for renovation services for my office space.",
        },
        {
            name: "Vikram Singh",
            mobile: "+91 76543 21098",
            email: "vikram.singh@email.com",
            msg: "Inquiry about construction of a commercial building.",
        },
        {
            name: "Anjali Verma",
            mobile: "+91 65432 10987",
            email: "anjali.verma@email.com",
            msg: "Seeking information on sustainable building practices.",
        },
        {
            name: "Rohan Kapoor",
            mobile: "+91 54321 09876",
            email: "rohan.kapoor@email.com",
            msg: "Requesting a quote for a small-scale construction project.",
        },
    ];


    return (
        <>

<div className="flex h-screen w-screen bg-neutral-50 group/design-root overflow-hidden width-full">
    <Sidebar />
  <div
   className="min-h-screen bg-white px-4 sm:px-8 py-6"
  style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
            >
            {/* Contact Details */}
                <main className="mt-8">
                    <h1 className="text-2xl font-bold mb-4 text-[#111518]">
                        Contact Details
                    </h1>

                    {/* Table - Horizontal scroll for small devices */}
                    <div className="overflow-x-auto">
                        <table className="w-full border text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left p-3 min-w-[120px] text-black
                                       ">Name</th>
                                    <th className="text-left p-3 min-w-[160px] text-black
                           ">Mobile Number</th>
                                    <th className="text-left p-3 min-w-[200px] text-black
                             ">Email</th>
                                    <th className="text-left p-3 min-w-[300px] text-black
                                          ">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((entry, i) => (
                                    <tr key={i} className="border-t">
                                        <td className="p-3 text-[#111518]">{entry.name}</td>
                                        <td className="p-3 text-[#60768a]">{entry.mobile}</td>
                                        <td className="p-3 text-[#60768a]">{entry.email}</td>
                                        <td className="p-3 text-[#60768a]">{entry.msg}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            </div>
        </>
    );
}
