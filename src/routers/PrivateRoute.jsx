import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";

const PrivateRoute = ({children}) => {

  const { isLoggedIn, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!isLoggedIn) return <Navigate to="/" />

  return children;
};

export default PrivateRoute;
