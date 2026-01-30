import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SavedJobsProvider } from "./context/SavedJobsProvider";
import { ApplicationProvider } from "./context/ApplicationsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SavedJobsProvider>
      <ApplicationProvider>
        <App />
      </ApplicationProvider>
    </SavedJobsProvider>
  </React.StrictMode>,
);
