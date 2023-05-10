import React, { useContext } from "react";
import "../css/features.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { userContext } from "../App";

function Features() {
	const [ref1, ref1InView] = useInView({ threshhold: 0.15 });
	const [ref2, ref2InView] = useInView({ threshhold: 0.15 });
	const [ref3, ref3InView] = useInView({ threshhold: 0.15 });
	const [ref4, ref4InView] = useInView({ threshhold: 0.15 });
	const [ref5, ref5InView] = useInView({ threshhold: 0.15 });
	const [ref6, ref6InView] = useInView({ threshhold: 0.15 });

	const featuresVariants = {
		initial: {},
		animate: {},
	};
	const featureVariants = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { type: "spring", staggerChildren: 0.2 } },
	};
	const singleVariants = {
		initial: { opacity: 0, y: "20px" },
		animate: { opacity: 1, y: 0, transition: { type: "spring" } },
	};
	const imageVariants = {
		initial: {
			opacity: 0,
			transform: "translate(-50%,-50%) scale(0)",
		},
		animate: {
			opacity: 1,
			transform: "translate(-50%,-50%) scale(1)",
		},
	};

	const { currentState, dispatch } = useContext(userContext);
	return (
		<motion.section className="features" id="features" variants={featuresVariants} initial="initial" animate="animate">
			<h2>Features</h2>
			<motion.div className="feature_wrapper item1" ref={ref1} variants={featureVariants} initial="initial" animate={ref1InView ? "animate" : "initial"}>
				<div className="content_wrapper">
					<motion.img alt="feature_image" src="/images/speed.png" variants={imageVariants}></motion.img>
					<motion.p variants={singleVariants}>speed</motion.p>
					<motion.button variants={singleVariants} onClick={() => dispatch("speed")}>
						know more
					</motion.button>
				</div>
			</motion.div>
			<motion.div className="feature_wrapper item2" ref={ref2} variants={featureVariants} initial="initial" animate={ref2InView ? "animate" : "initial"}>
				<div className="content_wrapper">
					<motion.img alt="feature_image" src="/images/responsive.png" variants={imageVariants}></motion.img>
					<motion.p variants={singleVariants}>Responsive</motion.p>
					<motion.button variants={singleVariants}>know more</motion.button>
				</div>
			</motion.div>
			<motion.div className="feature_wrapper item3" ref={ref3} variants={featureVariants} initial="initial" animate={ref3InView ? "animate" : "initial"}>
				<div className="content_wrapper">
					<motion.img alt="feature_image" src="/images/livechat.png" variants={imageVariants}></motion.img>
					<motion.p variants={singleVariants}>Live chat</motion.p>
					<motion.button variants={singleVariants}>know more</motion.button>
				</div>
			</motion.div>
			<motion.div className="feature_wrapper item4" ref={ref4} variants={featureVariants} initial="initial" animate={ref4InView ? "animate" : "initial"}>
				<div className="content_wrapper">
					<motion.img alt="feature_image" src="/images/animation.jpg" variants={imageVariants}></motion.img>
					<motion.p variants={singleVariants}>Animation</motion.p>
					<motion.button variants={singleVariants}>know more</motion.button>
				</div>
			</motion.div>
			<motion.div className="feature_wrapper item5" ref={ref5} variants={featureVariants} initial="initial" animate={ref5InView ? "animate" : "initial"}>
				<div className="content_wrapper">
					<motion.img alt="feature_image" src="/images/database.jpg" variants={imageVariants}></motion.img>
					<motion.p variants={singleVariants}>Database</motion.p>
					<motion.button variants={singleVariants}>know more</motion.button>
				</div>
			</motion.div>
			<motion.div className="feature_wrapper item6" ref={ref6} variants={featureVariants} initial="initial" animate={ref6InView ? "animate" : "initial"}>
				<div className="content_wrapper">
					<motion.img alt="feature_image" src="/images/3d.jpg" variants={imageVariants}></motion.img>
					<motion.p variants={singleVariants}>3d View</motion.p>
					<motion.button variants={singleVariants}>know more</motion.button>
				</div>
			</motion.div>
		</motion.section>
	);
}

export default Features;
