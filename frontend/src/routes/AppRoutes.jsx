import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage.jsx";
import { RegisterPage } from "../Pages/RegisterPage.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
