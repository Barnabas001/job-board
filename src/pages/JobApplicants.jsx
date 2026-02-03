import { useParams } from "react-router-dom";
// import { jobs } from "../data/jobs";
import useApplications from "../context/useApplications";

const STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-800",
  reviewed: "bg-blue-100 text-blue-800",
  shortlisted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export default function JobApplicants() {
  const { id } = useParams();
  const { applications, updateStatus } = useApplications();

  const jobApplications = applications.filter(
    (app) => String(app.jobId) === String(id),
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Applicants for Job #{id}</h1>

      {jobApplications.length === 0 ? (
        <p className="text-gray-500">No applications yet.</p>
      ) : (
        <div className="space-y-4">
          {jobApplications.map((app) => (
            <div
              key={app.id}
              className="border rounded-lg p-4 flex justify-between items-center shadow-sm"
            >
              {/* Applicant Info */}
              <div>
                <h2 className="font-semibold text-lg">{app.name}</h2>
                <p className="text-sm text-gray-600">{app.email}</p>
                {app.resume && (
                  <a
                    href={app.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 text-sm underline"
                  >
                    View Resume
                  </a>
                )}
              </div>

              {/* Status + Actions */}
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm capitalize ${
                    STATUS_COLORS[app.status] || STATUS_COLORS.pending
                  }`}
                >
                  {app.status}
                </span>

                <select
                  value={app.status}
                  onChange={(e) => updateStatus(app.id, e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
