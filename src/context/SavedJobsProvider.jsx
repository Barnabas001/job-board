import SavedJobsContext from "./SavedJobsContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useLocalStorage("savedJobs", []);

  const toggleSaveJob = (job) => {
    setSavedJobs((prev) =>
      prev.find((j) => j.id === job.id)
        ? prev.filter((j) => j.id !== job.id)
        : [...prev, job],
    );
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, toggleSaveJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
}
