import { useContext } from "react";
import SavedJobsContext from "./SavedJobsContext";

export default function useSavedJobs() {
  return useContext(SavedJobsContext);
}
