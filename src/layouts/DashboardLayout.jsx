import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Recruiter Dashboard</h1>

          <nav className="flex gap-6 text-sm">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/post-job"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Post Job
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
