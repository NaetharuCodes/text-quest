import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authenticated = true;

  if (!authenticated) {
    {
      console.log("Lets get out of here");
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
