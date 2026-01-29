import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SavedJobsProvider } from "./context/SavedJobsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SavedJobsProvider>
      <App />
    </SavedJobsProvider>
  </React.StrictMode>,
);
