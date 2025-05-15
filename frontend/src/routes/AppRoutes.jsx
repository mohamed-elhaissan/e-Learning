import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
