import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ProtectedRouteOnline = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return children;
  }
  return <Navigate to="/home"></Navigate>;
};

export default ProtectedRouteOnline;
