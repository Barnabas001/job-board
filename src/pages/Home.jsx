import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full text-white">
        {/* HERO SECTION */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Hire Smarter. <br />
            Get Hired Faster.
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            A modern job platform connecting top talent with forward-thinking
            companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <Link
            to="/jobs"
            className="group backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="text-5xl mb-6">🚀</div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Job Seeker
              </h2>

              <p className="text-blue-100 mb-8 flex-grow">
                Discover opportunities, apply in seconds, and track your career
                growth.
              </p>

              <span className="inline-flex items-center justify-center bg-white text-blue-700 font-semibold py-3 rounded-xl group-hover:scale-105 transition">
                Explore Jobs
              </span>
            </div>
          </Link>

          <Link
            to="/dashboard"
            className="group backdrop-blur-lg bg-black/20 border border-white/20 rounded-3xl p-8 sm:p-10 hover:bg-black/30 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="text-5xl mb-6">🧠</div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Recruiter</h2>

              <p className="text-blue-100 mb-8 flex-grow">
                Post jobs, manage applicants, and hire high-quality talent
                faster.
              </p>

              <span className="inline-flex items-center justify-center border border-white text-white font-semibold py-3 rounded-xl group-hover:bg-white group-hover:text-blue-700 transition">
                Start Hiring
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
