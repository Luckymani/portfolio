import React from "react";
import "../css/services.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const serviceVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

const singleVariants = {
	initial: {
		y: "30px",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 150, staggerChildren: 0.3 },
	},
};

const imageVariants = {
	initial: {
		transform: "translate(-50%,-50%) scale(0)",
	},
	animate: {
		transform: "translate(-50%,-50%) scale(1)",
		transition: { duration: 1, type: "spring" },
	},
};
const restVariants = {
	initial: {
		y: "20px",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { type: "spring" },
	},
};
const Services = () => {
	const [servicesRef, servicesInView] = useInView({ threshold: 0.2 });

	return (
		<motion.div className="services" ref={servicesRef} variants={serviceVariants} initial="initial" animate={servicesInView ? "animate" : "initial"}>
			<motion.div className="service" variants={singleVariants}>
				<motion.img src="/images/mobile-app.png" alt="Mobile App Development" variants={imageVariants} transformOrigin="center center" />
				<div>
					<motion.h2 variants={restVariants}>App Development</motion.h2>
					<motion.p variants={restVariants}>I create custom mobile apps for iOS and Android that are scalable, secure, and user-friendly.</motion.p>
					<motion.button variants={restVariants}>Learn More</motion.button>
				</div>
			</motion.div>
			<motion.div className="service" variants={singleVariants}>
				<motion.img src="/images/web-development.jpeg" alt="Website Development" variants={imageVariants} />
				<div>
					<motion.h2 variants={restVariants}>Website Development</motion.h2>
					<motion.p variants={restVariants}>I develop custom websites that are scalable, secure, and user-friendly to help you achieve your business goals.</motion.p>
					<motion.button variants={restVariants}>Learn More</motion.button>
				</div>
			</motion.div>
			<motion.div className="service" variants={singleVariants}>
				<motion.img src="/images/ux-ui design.jpeg" alt="UI/UX Design" variants={imageVariants} />
				<div>
					<motion.h2 variants={restVariants}>UI/UX Design</motion.h2>
					<motion.p variants={restVariants}>I design engaging and intuitive user interfaces and experiences that drive customer engagement and business growth.</motion.p>
					<motion.button variants={restVariants}>Learn More</motion.button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
