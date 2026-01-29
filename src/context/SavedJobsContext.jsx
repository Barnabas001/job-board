import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const savedJobsContext = createContext();

export function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useLocalStorage("savedJobs", []);

  const toggleSavedJob = (job) => {
    setSavedJobs((prev) =>
      prev.find((j) => j.id === job.id)
        ? prev.filter((j) => j.id !== job.id)
        : [...prev, job],
    );
  };

  return (
    <savedJobsContext.Provider value={{ savedJobs, toggleSavedJob }}>
      {children}
    </savedJobsContext.Provider>
  );
}

export const useSavedJobs = () => useContext(savedJobsContext);
