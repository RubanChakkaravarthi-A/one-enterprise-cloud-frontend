import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import EmployeeRegistration from "../pages/EmployeeRegistration";
import EmployeeDirectory from "../pages/EmployeeDirectory";


function AppRoutes() {

  return (

    <Routes>


      <Route
        path="/"
        element={<LandingPage />}
      />


      <Route
        path="/register"
        element={<EmployeeRegistration />}
      />

      <Route
  path="/employees"
  element={<EmployeeDirectory />}
/>

    </Routes>

  );

}


export default AppRoutes;