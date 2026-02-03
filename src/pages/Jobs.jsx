import { useEffect, useState } from "react";
import { internalJobs } from "../data/internalJobs";
import { fetchExternalJobs } from "../services/externalJobsApi";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const [externalJobs, setExternalJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExternalJobs()
      .then(setExternalJobs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const jobs = [...internalJobs, ...externalJobs];

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Available Jobs</h1>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
