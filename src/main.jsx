import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import EvaluationProvider from "./context/EvaluationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EvaluationProvider>
      <App />
    </EvaluationProvider>
  </React.StrictMode>
);
