import { Route, Routes } from "react-router-dom";
import { LandingPage, About, Contact } from "src/pages";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
