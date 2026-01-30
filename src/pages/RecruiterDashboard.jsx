import jobs from "../data/jobs";

export default function RecruiterDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Job Listings</h1>

      <div className="space-y-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-lg border flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>

            <span className="text-sm text-green-600">Active</span>
          </div>
        ))}
      </div>
    </div>
  );
}
