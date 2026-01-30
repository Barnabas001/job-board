import { useState } from "react";

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    level: "Junior",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console("New job posted:", form);
    alert("Job posted");
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows="4"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Post Job
        </button>
      </form>
    </div>
  );
}
