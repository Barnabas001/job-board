import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobApplicants from "./pages/JobApplicants";
import PostJob from "./pages/PostJob";

/* Layouts */
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== Public Routes ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/applications" element={<Applications />} />

        {/* ===== Recruiter Dashboard ===== */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<RecruiterDashboard />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="job/:id/applicants" element={<JobApplicants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
