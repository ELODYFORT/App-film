import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx"; // Assure-toi que le fichier s'appelle `App.js` et non `app.tsx`
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"), // Il faut que ton `index.html` contienne un élément avec cet ID
);
