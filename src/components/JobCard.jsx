import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-5 hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>

      <div>
        {job.location} • {job.type}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {job.level}
        </span>

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
