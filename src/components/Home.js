import React, { useState, useEffect } from "react";
import "../css/home.css";
import UseTypeWritter from "../ownHooks/useTypeWritter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import navigator from "../function snippet/social_media";

const contentVariants = {
	initial: {},
	animate: {
		transition: { delayChildren: 0.2, staggerChildren: 0.18 },
	},
};
const contentChildrenVariants = {
	initial: {
		y: "25px",
		opacity: 0,
		transition: { duration: 0.2 },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { type: "spring" },
	},
};

const iconVariants = {
	initial: {},
	animate: {
		transition: { delayChildren: 0.8, staggerChildren: 0.2 },
	},
};
const iconsVariants = {
	initial: {
		x: "-15px",
		opacity: 0,
	},
	animate: {
		x: 0,
		rotate: 360,
		opacity: 1,
		transition: { type: "spring", damping: 10, stiffness: 100 },
	},
};

const profileVariants = {
	initial: {},
	animate: {},
};
const imageVariants = {
	initial: {
		scale: 0,
	},
	animate: {
		scale: 1,
		transition: { delay: 0.2, duration: 0.6, type: "spring" },
	},
};
const topTagVariants = {
	initial: {
		opacity: 0,
		x: "70px",
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: { delay: 0.5, duration: 0.7 },
	},
};
const bottomTagVariants = {
	initial: {
		opacity: 0,
		x: "-70px",
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: { delay: 0.5, duration: 0.7 },
	},
};

function Home() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);

	const [ref, inView] = useInView({ threshold: 0.2 });
	const [icons, iconsInView] = useInView({ threshold: 0.2 });
	const [mobileicons, minView] = useInView({ threshold: 0.2 });
	const [profileRef, profileInView] = useInView({ threshold: 0.2 });

	return (
		<section className="home" id="home">
			{/* {console.log("homecomponent rendered")} */}
			<span className="background_headding">MERN STACK DEVELOPER</span>
			<motion.ul className="social_media_icons" ref={icons} variants={iconVariants} initial="initial" animate={iconsInView ? "animate" : "initial"}>
				<motion.li variants={iconsVariants}>
					<img alt="linkedin icon" src="/images/linkedin icon.png" onClick={() => navigator("linkedin")}></img>
				</motion.li>
				<motion.li variants={iconsVariants}>
					<img
						alt="github icon"
						src="/images/github icon.png"
						onClick={() => {
							navigator("github");
						}}></img>
				</motion.li>
				<motion.li variants={iconsVariants}>
					<img
						alt=" youtube icons"
						src="/images/youtube icon.png"
						onClick={() => {
							navigator("youtube");
						}}></img>
				</motion.li>
				<motion.li variants={iconsVariants}>
					<img
						alt="instagram icon"
						src="/images/instagram icon.png"
						onClick={() => {
							navigator("instagram");
						}}></img>
				</motion.li>
			</motion.ul>
			{loaded && (
				<motion.div className="content" ref={ref} variants={contentVariants} initial="initial" animate={inView ? "animate" : "initial"}>
					<motion.h1 variants={contentChildrenVariants}>Hello,</motion.h1>

					<motion.h1 variants={contentChildrenVariants}>
						I am
						<span className="name"> Manikanta</span>
					</motion.h1>

					<motion.h1 variants={contentChildrenVariants}>
						proficient in
						<UseTypeWritter textArray={["web development", "ui-ux design"]} speed={200} spaceBetween={2000} />
					</motion.h1>
					<motion.p variants={contentChildrenVariants}>Transform your business with a well-designed website. As a web developer, I specialize in user-friendly websites that deliver results. With high-quality experience, I help businesses thrive. Let's build a standout website together.</motion.p>
					<motion.p variants={contentChildrenVariants}>I don't just build websites, I create digital experiences</motion.p>
					<motion.button variants={contentChildrenVariants} className="contact_button" onClick={() => navigator("whatsapp")}>
						contact me<img alt="whatsapp icon" src="/images/whatsapp icon.png"></img>
					</motion.button>
				</motion.div>
			)}

			<motion.div className="profile" ref={profileRef} variants={profileVariants} initial="initial" animate={profileInView ? "animate" : "initial"}>
				<motion.div className="profile_img" variants={imageVariants}>
					{/* {console.log(profileInView)} */}
					<motion.div className="tag1" variants={topTagVariants}>
						<p>web developer</p>
						<img alt="tag_image" src="/images/web development icon.png"></img>
					</motion.div>
					<motion.div className="tag2" variants={bottomTagVariants}>
						<img alt="tag_image" src="/images/uiux icon.png"></img>
						<p>ui/ux designer</p>
					</motion.div>

					<img alt="profileimage" src="/images/profile image.png"></img>
				</motion.div>
				<div className="profile_data">
					<div className="experience">
						<span>
							<span>1 +</span>
						</span>
						<p>year</p>
						<p>experience</p>
					</div>
					<div className="projects">
						<span>
							<span>2 +</span>
						</span>
						<p>projects</p>
						<p>completed</p>
					</div>
				</div>
				<motion.ul className="social_media_icons" ref={mobileicons} variants={iconVariants} initial="initial" animate={minView ? "animate" : "initial"}>
					<motion.li variants={iconsVariants}>
						<img alt="linkedin icon" src="/images/linkedin icon.png" onClick={() => navigator("linkedin")}></img>
					</motion.li>
					<motion.li variants={iconsVariants}>
						<img alt="github icon" src="/images/github icon.png" onClick={() => navigator("github")}></img>
					</motion.li>
					<motion.li variants={iconsVariants}>
						<img
							alt=" youtube icons"
							src="/images/youtube icon.png"
							onClick={() => {
								navigator("youtube");
							}}></img>
					</motion.li>
					<motion.li variants={iconsVariants}>
						<img
							alt="instagram icon"
							src="/images/instagram icon.png"
							onClick={() => {
								navigator("instagram");
							}}></img>
					</motion.li>
				</motion.ul>
			</motion.div>
		</section>
	);
}

export default Home;
