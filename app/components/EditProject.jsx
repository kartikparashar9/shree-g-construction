


"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "../admin/_component/Sidebar";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const EditProject = () => {
  const [formData, setFormData] = useState({
    id: "",
    projectName: "",
    projectNumber: "",
    type: "GOVERNMENT",
    zone: "",
    wardNumber: "",
    area: "",
    workCategory: "",
    description: "",
  });

  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`/api/edit-work/${id}`);
      const project = response.data;
      setFormData({
        id: project.id,
        projectName: project.projectName,
        projectNumber: project.projectNumber,
        type: project.type,
        zone: project.zone,
        wardNumber: project.wardNumber,
        area: project.area,
        workCategory: project.workCategory,
        description: project.description,
      });
      setExistingImages(project.imageUrls || []);
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      alert("❌ You can upload up to 10 images only.");
      return;
    }
    setNewImages(files);
  };

  const getImageNameFromUrl = (url) => {
    const parts = url.split("/");
    return decodeURIComponent(parts[parts.length - 1].split("?")[0]);
  };

  const deleteImageFromSupabase = async (url) => {
    const fileName = getImageNameFromUrl(url);
    const { error } = await supabase.storage.from("shree").remove([fileName]);
    if (error) {
      console.error("Delete error:", error.message);
      throw error;
    }
  };

  const uploadImagesToSupabase = async () => {
    const urls = [];

    for (const file of newImages) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("shree")
        .upload(fileName, file);

      if (uploadError) {
        console.error("Upload error:", uploadError.message);
        throw new Error(`Failed to upload ${file.name}`);
      }

      const { data } = supabase.storage.from("shree").getPublicUrl(fileName);
      if (!data?.publicUrl) throw new Error(`Failed to get URL for ${file.name}`);
      urls.push(data.publicUrl);
    }

    return urls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let uploadedImages = [];
      if (newImages.length > 0) {
        uploadedImages = await uploadImagesToSupabase();
      }

      const payload = {
        ...formData,
        imageUrls: [...existingImages, ...uploadedImages],
      };

      await axios.put("/api/work", payload);
      alert("✅ Project updated successfully!");
      router.push("/admin/contact");
    } catch (error) {
      console.error("Update error:", error);
      alert("❌ Failed to update project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-100">
        <Sidebar/>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Edit Project
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Project Name", name: "projectName" },
                { label: "Project Number", name: "projectNumber" },
                { label: "Zone", name: "zone" },
                { label: "Ward Number", name: "wardNumber" },
                { label: "Area", name: "area" },
                { label: "Work Category", name: "workCategory" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label className="block font-medium mb-1 text-gray-700">{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 ring-blue-300"
                  />
                </div>
              ))}
            </div>

            {/* Select Type */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="GOVERNMENT">Government</option>
                <option value="PRIVATE">Private</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Enter project description"
                className="w-full border rounded-lg p-3 resize-none"
              />
            </div>

            {/* Existing Images Preview with Delete */}
            {existingImages.length > 0 && (
              <div>
                <h3 className="text-gray-700 font-medium mb-2">Existing Images</h3>
                <div className="flex flex-wrap gap-2">
                  {existingImages.map((url, idx) => (
                    <div key={idx} className="relative">
                      <img
                        src={url}
                        alt="existing"
                        className="w-20 h-20 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={async () => {
                          const confirmDelete = confirm("Delete this image?");
                          if (!confirmDelete) return;

                          try {
                            await deleteImageFromSupabase(url);
                            setExistingImages((prev) =>
                              prev.filter((imageUrl) => imageUrl !== url)
                            );
                          } catch (err) {
                            alert("❌ Failed to delete image.");
                          }
                        }}
                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload New Images */}
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-xl text-center">
              <p className="font-bold mb-2 text-gray-800">Upload New Images (optional)</p>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => document.getElementById("imageInput").click()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Select New Images
              </button>

              {newImages.length > 0 && (
                <ul className="mt-4 text-left text-sm list-disc ml-6 text-gray-700">
                  {newImages.map((file, idx) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-green-700 transition"
              >
                {loading ? "Updating..." : "Update Project"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProject;
