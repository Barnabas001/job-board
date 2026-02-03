import useApplications from "../context/useApplications";
import { jobs } from "../data/jobs";
import { Link } from "react-router-dom";

export default function Applications() {
  const { applications } = useApplications();

  // Merge application data with job data
  const appliedJobs = applications
    .map((app) => {
      const job = jobs.find((j) => j.id === app.jobId);
      if (!job) return null;

      return {
        ...job,
        status: app.status,
        appliedDate: app.date,
      };
    })
    .filter(Boolean);

  if (appliedJobs.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">No applications yet</h2>
        <p className="text-gray-600 mb-4">You haven’t applied to any jobs.</p>
        <Link
          to="/jobs"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Browse Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>

      <div className="space-y-4">
        {appliedJobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>

            <div className="flex items-center justify-between mt-3">
              <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
                {job.status}
              </span>

              <Link to={`/jobs/${job.id}`} className="text-blue-600 text-sm">
                View Job
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
