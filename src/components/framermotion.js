import React from "react";
import "../css/framermotion.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Framermotion() {
	const frames = {
		initial: {},
		animate: {
			scale: [1, 2, 2, 2.5, 2, 2, 1],
			borderRadius: ["30%", "30%", "30%", "50%", "30%", "30%", "30%"],
			rotate: [0, 180, 0, 0, 0, -180, 0],
			transition: { duration: 1.5 },
		},
	};
	return (
		<section className="framer-motion">
			<motion.div className="box_wrapper">
				<motion.div className="box" variants={frames} animate="animate" initial="initial"></motion.div>
			</motion.div>
		</section>
	);
}

export default Framermotion;
