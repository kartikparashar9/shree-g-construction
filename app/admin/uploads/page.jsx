"use client"
import React from 'react'
import Sidebar from '../_component/Sidebar'
const handleFileChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    // Do something with the files (e.g., display them or upload to a server)
    console.log(files);
  }
};
   const Uploads = () => {
    return (
<div className='flex h-screen w-screen bg-neutral-50 
 group/design-root overflow-hidden width-full'>
        <Sidebar />
    <main className="relative flex min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden without-scrollbar">
      <div className="layout-container flex h-full grow flex-col without-scrollbar">
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="w-full max-w-[960px] py-5">
            <div className="p-4">
              <p className="text-[#141414] text-[32px] font-bold leading-tight min-w-72">Upload Your Project</p>
            </div>

            {/* Form Fields */}
            <form className="space-y-6 px-4">
              {[
                { label: "Project Name", type: "text" },
                { label: "Project Number", type: "text" },
                {
                  label: "Type",
                  type: "select",
                  options: ["Select type", "Goverment", "Private"],
                },
                { label: "Zone", type: "text" },
                { label: "Ward Number", type: "text" },
                { label: "Area", type: "text" },
                { label: "Work Category", type: "text" },
                {
                  label: "Description",
                  type: "textarea",
                },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block">
                    <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                      {field.label}
                    </p>
                    {field.type === "select" ? (
                      <select className="form-input w-full h-14 rounded-xl border border-[#dbdbdb] bg-neutral-50 text-[#141414] p-[15px]">
                        {field.options.map((opt, idx) => (
                          <option key={idx} value={opt.toLowerCase()}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        className="form-input w-full min-h-36 rounded-xl border border-[#dbdbdb] bg-neutral-50 text-[#141414] p-[15px]"
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        className="form-input w-full h-14 rounded-xl border border-[#dbdbdb] bg-neutral-50 text-[#141414] p-[15px]"
                      />
                    )}
                  </label>
                </div>
              ))}

              {/* Upload Section */}
<div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dbdbdb] px-6 py-14">
  <div className="text-center">
    <p className="text-lg font-bold text-[#141414]">Upload Images</p>
    <p className="text-sm text-[#141414]">Drag and drop or browse to upload images</p>
  </div>
  
  {/* Hidden File Input */}
  <input 
    type="file" 
    id="fileUpload" 
    className="hidden" 
    multiple
    accept="image/*" 
    onChange={handleFileChange} 
  />
  
  {/* Upload Button */}
  <button
    type="button"
    className="rounded-xl bg-[#ededed] px-4 h-10 text-sm font-bold text-[#141414]"
    onClick={() => document.getElementById('fileUpload').click()} // Trigger file input on button click
  >
    Upload
  </button>
</div>


              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="rounded-xl bg-black px-4 h-10 text-sm font-bold text-neutral-50"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Uploads
