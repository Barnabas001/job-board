import { useContext } from "react";
import ApplicationsContext from "./ApplicationsContext";

export default function useApplications() {
  return useContext(ApplicationsContext);
}
