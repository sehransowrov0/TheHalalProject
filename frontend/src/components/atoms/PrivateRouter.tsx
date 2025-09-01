// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("token"); // check if logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

