export async function fetchExternalJobs() {
  const res = await fetch("https://remotive.com/api/remote-jobs");
  const data = await res.json();

  return data.jobs.map((job) => ({
    id: `ext-${job.id}`,
    title: job.title,
    company: job.company_name,
    location: job.candidate_required_location,
    description: job.description,
    url: job.url,
    source: "external",
  }));
}
