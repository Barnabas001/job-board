import JobCard from "../components/JobCard";
import useSavedJobs from "../context/useSavedJobs";

export default function SavedJobs() {
  const { savedJobs } = useSavedJobs();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p className="text-gray-500">You haven't saved any jobs yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {savedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
