import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
	const { isOnline, setIsOnline } = useContext(UserContext);

	return (
		<div>
			<p>Statut : {isOnline ? "en ligne" : "hors ligne"}</p>
			<button onClick={() => setIsOnline(!isOnline)}>Basculer le statut</button>
		</div>
	);
}

export default UserProfile;
