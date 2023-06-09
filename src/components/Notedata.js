import React, { useContext, useEffect, useRef } from "react";
import { userContext } from "../App";

import "../css/Notedata.css";

function Notedata() {
	const { currentState, dispatch } = useContext(userContext);

	const divref = useRef(null);
	const wrapperref = useRef(null);
	useEffect(() => {
		if (!currentState) return;
		const handleClick = (e) => {
			if (!divref.current.contains(e.target) && wrapperref.current.contains(e.target)) {
				dispatch("close");
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);
	return (
		<div className="notedata" ref={wrapperref}>
			<div className="wrapper" ref={divref}>
				<div className="image_wrapper">
					<h1>{currentState.data.title}</h1>
					<img src={currentState.data.image} alt="image"></img>
					<div className="close-btn">
						<img src="/images/close.png" alt="icon" onClick={() => dispatch("close")}></img>
					</div>
				</div>
				<p>{currentState.data.content}</p>
			</div>
		</div>
	);
}

export default Notedata;
