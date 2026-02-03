import ApplicationsContext from "./ApplicationsContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function ApplicationsProvider({ children }) {
  const [applications, setApplications] = useLocalStorage("applications", []);

  const applyToJob = (jobId, applicant) => {
    if (applications.some((app) => app.jobId === jobId)) return;

    setApplications((prev) => [
      ...prev,
      {
        jobId,
        applicant,
        status: "Applied",
        date: new Date().toISOString(),
      },
    ]);
  };

  const getStatus = (jobId) => {
    return applications.find((app) => app.jobId === jobId)?.status;
  };

  const updateStatus = (id, status) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app)),
    );
  };

  return (
    <ApplicationsContext.Provider
      value={{ applications, applyToJob, getStatus, updateStatus }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
}
