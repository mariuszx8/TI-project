import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../firebase-config";

const PrivateRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
