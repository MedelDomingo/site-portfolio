import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import HashRouter, Routes, and Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobFullStackPage from "./pages/JobFullStackPage.jsx";
import JobProjectManagerPage from "./pages/JobProjectManagerPage.jsx";
import JobServerAdminPage from "./pages/JobServerAdminPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define your routes as components */}
        <Route path="/" element={<App />} />
        <Route path="/job-1" element={<JobFullStackPage />} />
        <Route path="/job-2" element={<JobProjectManagerPage />} />
        <Route path="/job-3" element={<JobServerAdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
