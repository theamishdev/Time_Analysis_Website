import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
