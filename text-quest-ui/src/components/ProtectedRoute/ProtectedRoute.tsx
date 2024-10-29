import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authenticated = false;

  if (!authenticated) {
    <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
