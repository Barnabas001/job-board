import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) return <p className="p-6">Job not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">{job.company}</p>

      <div className="mb-6 text-sm text-gray-500">
        {job.location} • {job.type} • {job.level}
        <p className="leading-relaxed mb-6">{job.description}</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
}
