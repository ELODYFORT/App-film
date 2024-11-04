import React, { useState } from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";
// import MovieContext from "./MovieContext";
import MovieList from "./MovieList";

function App() {
	const [isOnline, setIsOnline] = useState(false); // Création de l'état
	const [movies] = useState([
		{
			movie_id: 1,
			title: "Harry Potter and the Sorcerer's Stone",
			release_year: 2001,
		},
		{
			movie_id: 2,
			title: "Harry Potter and the Chamber of Secrets",
			release_year: 2002,
		},
		{
			movie_id: 3,
			title: "Harry Potter and the Prisoner of Azkaban",
			release_year: 2004,
		},
	]); // Liste de films
	return (
		<UserContext.Provider value={{ isOnline, setIsOnline }}>
			<MovieContext.Provider value={{ movies }}>
				<UserProfile />
				<MovieList />
			</MovieContext.Provider>
		</UserContext.Provider>
	);
}
export default App;
