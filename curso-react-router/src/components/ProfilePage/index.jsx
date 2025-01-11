import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks";

const ProfilePage = () => {
	const {auth} = useAuthContext();

	if (!auth.user) {	
		return <Navigate to="/login" />;
	}

  return (
	<div>
	  <h1>Profile</h1>

		<p>Welcome, {auth?.user}</p>
	</div>
  );
};

export { ProfilePage };