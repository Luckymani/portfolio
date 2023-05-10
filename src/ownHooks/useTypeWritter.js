import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
function UseTypeWritter({ textArray, speed, spaceBetween }) {
	const [displayText, setDisplayText] = useState("");
	const [transition, setTransition] = useState(false);
	const [hideText, setHideText] = useState(false);
	const [currentElement, setCurrentElement] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		function typeNextCharacter() {
			setHideText(false);
			setTransition(false);
			const nextCharacter = textArray[currentElement][currentIndex];
			setDisplayText((prevText) => prevText + nextCharacter);
			setCurrentIndex((prevIndex) => prevIndex + 1);
			console.log("charchange");
		}

		function nextIndex() {
			setTransition(true);
			function sample() {
				const timeoutId = setTimeout(() => {
					setHideText(true);
				}, 210);
				return () => clearTimeout(timeoutId);
			}
			sample();
			const timeoutId = setTimeout(() => {
				setCurrentIndex(0);
				setDisplayText("");
				setCurrentElement((prevIndex) => prevIndex + 1);
				console.log("indexChange");
			}, 500);
			return () => clearTimeout(timeoutId);
		}

		if (currentElement < textArray.length) {
			if (currentIndex < textArray[currentElement].length) {
				const timeoutId = setTimeout(typeNextCharacter, speed);
				return () => clearTimeout(timeoutId);
			} else if (currentIndex >= textArray[currentElement].length) {
				const timeoutId = setTimeout(nextIndex, spaceBetween);
				return () => clearTimeout(timeoutId);
			}
		} else {
			console.log("hello");
			setCurrentElement(0);
		}
	}, [currentIndex, currentElement]);
	// console.log(currentElement, currentIndex);
	return (
		<span className={`proficient ${hideText && "hide"}`}>
			{displayText}
			{transition && <motion.div initial={{ width: "0%" }} animate={{ width: ["0%", "100%", "0%"], transition: { duration: 0.55 } }} className="transition"></motion.div>}
		</span>
	);
}

export default UseTypeWritter;
