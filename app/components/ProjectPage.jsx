"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import GovernmentProjectCard from "./GovernmentCard";
import PrivateProjectCard from "./PrivateCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

  const getProjects = async () => {
    try {
      const res = await axios.get("/api/work");
      setProjects(res.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading projects...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  const isGovernmentPage = pathname.includes("government");
  const isPrivatePage = pathname.includes("private");

  const filteredProjects = projects.filter((project) => {
    const type = (project.type || "").toLowerCase();
    if (isGovernmentPage) return type === "government";
    if (isPrivatePage) return type === "private";
    return true;
  });

  return (
    <div className="bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">No projects found.</p>
      ) : (
        filteredProjects.map((project) => {
          const type = (project.type || "").toLowerCase();
          const key = project.id || project._id;

          if (type === "private") {
            return <PrivateProjectCard key={key} project={project} />;
          } else if (type === "government") {
            return <GovernmentProjectCard key={key} project={project} />;
          } else {
            return null;
          }
        })
      )}
    </div>
  );
}
