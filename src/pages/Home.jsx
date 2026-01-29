import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-centerpx-4">
      <h1 className="text-4xl font-bold mb-4">Find Your Next Opportunity</h1>
      <p className="text-gray-600 mb-6 max-w-xl">
        Browse verified job listings from top companies and apply with ease.
      </p>
      <Link
        to="/jobs"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Browse Jobs
      </Link>
    </div>
  );
}
