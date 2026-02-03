import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";

export default function RecruiterDashboard() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recruiter Dashboard</h1>

      <p className="text-gray-600 mb-6">
        Manage your posted jobs and view applicants.
      </p>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 bg-white">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>

            <Link
              to={`/dashboard/job/${job.id}/applicants`}
              className="inline-block mt-3 text-sm text-blue-600"
            >
              View Applicants →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
