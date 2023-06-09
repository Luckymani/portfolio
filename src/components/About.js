import React, { useState } from "react";
import "../css/about.css";
import Skills from "./Skills";
import Services from "./Services";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aboutVariants = {
	initial: {},
	animate: {
		transition: { staggerChildren: 0.1 },
	},
};

const btt = {
	initial: {
		y: "15px",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { type: "spring" },
	},
};
function About() {
	const [aboutref, aboutInView] = useInView({ threshold: 0.2 });
	const [skills, setSkills] = useState(true);
	const [services, setServices] = useState(false);

	function handleDownload() {
		// console.log("button clicked");
		const url = "/files/manikanta-w2.pdf";
		const link = document.createElement("a");
		link.href = url;
		link.download = "manikanta reasume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	return (
		<section className="about">
			<motion.div className="about_deatils" ref={aboutref} variants={aboutVariants} initial="initial" animate={aboutInView ? "animate" : "initial"}>
				<div className="about_img">
					<span>
						<img alt="about_img" src="/images/about image.png"></img>
					</span>
				</div>
				<div className="about_text">
					<motion.h2 variants={btt}>About me</motion.h2>
					<motion.p variants={btt}>I'm a web designer and developer with a focus on the MERN stack , but still exploring other technologies and frameworks that catch my interest! also interested in work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!</motion.p>
					<motion.button variants={btt} onClick={() => handleDownload()}>
						download cv <img className="download_icon" src="/images/download.png" alt="download icon"></img>
					</motion.button>
				</div>
			</motion.div>
			<div className="about_info">
				<ul className="navigator">
					<motion.li
						className={`${skills && "skillactive"}`}
						whileHover={{ scaleX: 1.1, letterSpacing: "1.5px" }}
						onClick={() => {
							setSkills(true);
							setServices(false);
						}}>
						skills
					</motion.li>
					<motion.li
						className={`${services && "serviceactive"}`}
						whileHover={{ scaleX: 1.1, letterSpacing: "1.5px" }}
						onClick={() => {
							setSkills(false);
							setServices(true);
						}}>
						services
					</motion.li>
				</ul>
				{skills && <Skills />}
				{services && (
					<AnimatePresence>
						<Services />
					</AnimatePresence>
				)}
			</div>
		</section>
	);
}

export default About;
