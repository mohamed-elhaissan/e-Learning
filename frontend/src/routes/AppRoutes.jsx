import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage.jsx";
import { RegisterPage } from "../Pages/RegisterPage.jsx";
import TermsOfuse from "../Pages/TermsOfuse.jsx";
import Privacy from "../Pages/Privacy.jsx";
import Home from "../Pages/Home.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/terms" element={<TermsOfuse />} />
        <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};
