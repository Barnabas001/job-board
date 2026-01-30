import { useState } from "react";

export default function ApplyForm({ job, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    coverLetter: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Name and email are required.");
      return;
    }

    // Mock submit
    setTimeout(() => {
      onSuccess();
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Apply for {job.title}</h2>

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <div className="space-y-3">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
        />

        <textarea
          name="coverLetter"
          placeholder="Cover Letter (optional)"
          rows="4"
          value={form.coverLetter}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full"
      >
        Submit Application
      </button>
    </form>
  );
}
