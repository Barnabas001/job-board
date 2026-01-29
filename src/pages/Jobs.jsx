import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";

export default function Jobs() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Available Jobs</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 hover:shadow transition"
          >
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">
              {job.location} • {job.type}
            </p>

            <Link
              to={`/jobs/${job.id}`}
              className="inline-block mt-4 text-blue-600 font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
