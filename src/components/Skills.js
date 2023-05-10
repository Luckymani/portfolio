import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};
const skill = {
	initial: {
		width: 0,
	},
	animate: {
		width: "100%",
		transition: {
			type: "spring",
			stiffness: 60,
		},
	},
};
function Skills() {
	const [skillRef, skillInView] = useInView({ threshold: 0.2 });

	return (
		<AnimatePresence>
			<motion.div className="skill_wrapper" ref={skillRef} variants={skillVariants} initial="initial" animate={skillInView ? "animate" : "initial"} exit={{ x: "100%", opacity: 0 }}>
				<motion.div variants={skill} className="skills">
					<div className="skill_info python">
						<p>Python</p>
						<p>90%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar python"></div>
						</div>
					</div>
				</motion.div>
				<motion.div variants={skill} className="skills ">
					<div className="skill_info javascript">
						<p>Javascript</p>
						<p>95%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar javascript"></div>
						</div>
					</div>
				</motion.div>
				<motion.div variants={skill} className="skills">
					<div className="skill_info node">
						<p>Node.js</p>
						<p>90%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar node"></div>
						</div>
					</div>
				</motion.div>
				<motion.div variants={skill} className="skills">
					<div className="skill_info express">
						<p>Express.js</p>
						<p>95%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar express"></div>
						</div>
					</div>
				</motion.div>
				<motion.div variants={skill} className="skills">
					<div className="skill_info mongoDB">
						<p>Mongo DB</p>
						<p>85%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar mongoDB"></div>
						</div>
					</div>
				</motion.div>
				<motion.div variants={skill} className="skills">
					<div className="skill_info html">
						<p>Html</p>
						<p>100%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar html"></div>
						</div>
					</div>
				</motion.div>
				<motion.div variants={skill} className="skills">
					<div className="skill_info css">
						<p>Css</p>
						<p>95%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar css"></div>
						</div>
					</div>
				</motion.div>
				<motion.div variants={skill} className="skills">
					<div className="skill_info php">
						<p>Php</p>
						<p>50%</p>
					</div>
					<div className="skill_progress">
						<div className="holder">
							<div className="progress_bar php"></div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

export default Skills;
