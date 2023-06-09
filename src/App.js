import React, { useReducer } from "react";
import "./css/App.css";
import Headder from "./components/Headder";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Features from "./components/Features.js";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import deatilsObject from "./function snippet/featuresdata.js";
import Notedata from "./components/Notedata.js";

const initialState = { notify: false };
const reducer = (state, action) => {
	switch (action) {
		case "speed":
			return { notify: true, data: deatilsObject.speed };
		case "graphics":
			return { notify: true, data: deatilsObject.graphics };
		case "animation":
			return { notify: true, data: deatilsObject.animation };
		case "livechat":
			return { notify: true, data: deatilsObject.livechat };
		case "database":
			return { notify: true, data: deatilsObject.database };
		case "responsive":
			return { notify: true, data: deatilsObject.responsive };

		case "close":
			return { notify: false, data: "no data" };
		default:
			return { notify: false, data: "no data" };
	}
};
export const userContext = React.createContext();
function App() {
	const [currentState, dispatch] = useReducer(reducer, initialState);

	return (
		<userContext.Provider value={{ currentState, dispatch }}>
			<>
				{currentState.notify && <Notedata></Notedata>}
				<div className="App">
					<Headder />
					<Home />
					<About />
					<Features />
					<Projects />
					<Contact />
				</div>
			</>
		</userContext.Provider>
	);
}

export default App;
