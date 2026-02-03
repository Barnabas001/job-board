import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded bg-white">
      <h2 className="font-semibold">{job.title}</h2>
      <p className="text-sm text-gray-600">{job.company}</p>

      <div className="mt-3 flex gap-3">
        {job.source === "internal" ? (
          <Link to={`/jobs/${job.id}`} className="text-blue-600 underline">
            View Details
          </Link>
        ) : (
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            View on {job.source}
          </a>
        )}
      </div>
    </div>
  );
}
