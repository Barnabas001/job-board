import ApplicationsContext from "./ApplicationsContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useLocalStorage("applications", []);

  const applyToJob = (jobId) => {
    if (applications.find((app) => app.jobId === jobId)) return;

    setApplications((prev) => [
      ...prev,
      { jobId, status: "Applied", date: new Date().toISOString },
    ]);
  };

  const getStatus = (jobId) => applications.find((app) => app.jobId)?.status;

  return (
    <ApplicationsContext.Provider
      value={{ applications, applyToJob, getStatus }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
}
