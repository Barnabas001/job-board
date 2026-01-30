import { Link } from "react-router-dom";
import useSavedJobs from "../context/useSavedJobs";
import useApplications from "../context/useApplications";

export default function JobCard({ job }) {
  const { savedJobs, toggleSavedJob } = useSavedJobs();
  const isSaved = savedJobs.some((j) => j.id === job.id);
  const { getStatus } = useApplications();
  const status = getStatus(job.id);

  return (
    <div className="border rounded-lg p-5 hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>

      <div className="text-sm text-gray-500 mt-1">
        {job.location} • {job.type}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => toggleSavedJob()}
          className={`text-sm font-medium ${isSaved ? "text-red-600" : "text-gray-500"}`}
        >
          {isSaved ? "Saved ❤️" : "Save 🤍"}
        </button>

        {status && <span className="text-xs text-green-600">{status}</span>}

        <Link
          to={`/jobs/${job.id}`}
          className="text-blue-600 font-medium text-sm"
        >
          View →
        </Link>
      </div>
    </div>
  );
}
