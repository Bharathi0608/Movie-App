import { Navigate } from "react-router-dom";
import { useMovieContext } from "../../contexts/MovieContext";


function ProtectedRoute({ children }) {
  const { user } = useMovieContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
