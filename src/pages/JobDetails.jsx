import { useParams } from "react-router-dom";
import { useState } from "react";
import { jobs } from "../data/jobs";
import Modal from "../components/Modal";
import ApplyForm from "../components/ApplyForm";
import useApplications from "../context/useApplications";

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  const [open, setOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const { applyToJob, getStatus } = useApplications();
  const status = getStatus(job.id);

  if (!job) return <p className="p-6">Job not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">{job.company}</p>

      <p className="mb-6">{job.description}</p>

      <button
        onClick={() => {
          applyToJob(job.id);
          setApplied(true);
        }}
        disabled={status}
        className={`px-6 py-3 rounded-lg text-white ${
          status ? "bg-gray-400" : "bg-blue-600"
        }`}
      >
        {status ? `Status: ${status}` : "Apply Now"}
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ApplyForm
          job={job}
          onSuccess={() => {
            setApplied(true);
            setOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}
