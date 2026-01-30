import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Recruiter</h2>

        <nav className="space-y-3">
          <Link to="/dashboard" className="block hover:text-blue-400">
            Dashboard
          </Link>
          <Link to="/dashboard/post-job" className="block hover:text-blue-400">
            Post Job
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
