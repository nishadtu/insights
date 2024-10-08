import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../../services/UserAuthContext";
import route from "../routeNames";

const ProtectedRoute = ({ children }) => {
	const { user } = useAdminAuth();
	if (!user) {
		return <Navigate to={route.login} />;
	}
	return children;
};

export default ProtectedRoute;
