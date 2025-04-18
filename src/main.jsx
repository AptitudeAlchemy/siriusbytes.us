import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Projects from "./pages/Projects.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import AppContext from "./AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/siriusbytes.us" element={<App />}>
            <Route path="" element={<HomePage />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions></TermsAndConditions>}
            />
            <Route path="projects" element={<Projects></Projects>} />
            <Route path="services" element={<ServicePage></ServicePage>} />
          </Route>
          <Route path="*" element={<>Error page</>} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  </StrictMode>
);
