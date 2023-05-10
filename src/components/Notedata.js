import React, { useContext } from "react";
import { userContext } from "../App";

import "../css/Notedata.css";

function Notedata() {
	const { currentState, dispatch } = useContext(userContext);

	return (
		<div className="notedata">
			<div className="wrapper">
				<h1>{currentState.data.title}</h1>
				<img src={currentState.data.image} alt="image"></img>
				<p>{currentState.data.content}</p>
			</div>
		</div>
	);
}

export default Notedata;
