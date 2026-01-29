import { useState } from "react";
import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import JobFilters from "../components/JobFilters";
// import { Link } from "react-router-dom";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesType = type ? job.type === type : true;

    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>

      <JobFilters
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
      />

      {filteredJobs.length === 0 ? (
        <p className="text-gray-500">No jobs found.</p>
      ) : (
        <div>
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
