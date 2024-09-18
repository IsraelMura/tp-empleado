import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage, NotFoundPage, EmployeesPage, EmployeePage, EmployeeFormPage } from "../pages";
import { PrivateLayout, PublicLayout } from "../layouts";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/empleados" element={<EmployeesPage />} />
          <Route path="/empleado/:id" element={<EmployeePage />} />
          <Route path="/empleado/agregar" element={<EmployeeFormPage />} />
          <Route path="/empleado/editar/:id" element={<EmployeeFormPage />} />
        </Route>

        <Route path="*" element={
          <NotFoundPage/>
        }/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
