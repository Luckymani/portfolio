import React, { useState, useEffect, useRef } from "react";
import "../css/headder.css";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

function Headder() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);

	const [opened, setOpened] = useState(false);
	const navRef = useRef(null);
	const menuBtn = useRef(null);

	useEffect(() => {
		function resizeFunction() {
			if (window.innerWidth > 680) {
				setOpened(false);
			}
		}
		resizeFunction();
		window.addEventListener("resize", resizeFunction);

		return () => {
			window.removeEventListener("resize", resizeFunction);
		};
	}, []);

	useEffect(() => {
		function clickFunction(event) {
			if (!menuBtn.current.contains(event.target) && !navRef.current.contains(event.target)) {
				setOpened(false);
			}
		}

		window.addEventListener("click", clickFunction);
		return () => {
			window.removeEventListener("click", clickFunction);
		};
	});

	const navmenuVariants = {
		animate: opened
			? {
					clipPath: "circle(130% at 83% 25px)",
					transition: {
						duration: 0.5,
						delayChildren: 0.6,
						staggerChildren: 0.1,
					},
			  }
			: {
					clipPath: "circle(2px at 83% 25px)",

					transition: {
						duration: 0.35,
						staggerChildren: 0.09,
						staggerDirection: -1,
						when: "afterChildren",
					},
			  },
	};
	const linkVariants = {
		animate: opened
			? {
					x: 0,
					opacity: 1,
			  }
			: {
					x: "40px",
					opacity: 0,
					transition: {
						duration: 0.2,
					},
			  },
	};

	const navbarVariants = {
		initial: {},
		animate: {
			transition: {
				staggerChildren: 0.11,
			},
		},
	};
	const navbarLinkVariants = {
		initial: {
			opacity: 0,
			x: "40px",
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				// duration: 0.5,
				type: "spring",
			},
		},
	};
	function handleScroll(val) {
		// console.log(val);
		scroller.scrollTo(val, {
			duration: 800,
			delay: 0,
			smooth: "easeInOutQuart",
			offset: -90,
		});
	}

	return (
		<section className={`headder`}>
			<div className="logo">
				<img src={"/images/logo.png"} alt="logo" />
				<span>Code Adict</span>
			</div>
			<div className={`menu_btn_wrapper  ${opened && "active"}`} onClick={() => setOpened(!opened)} ref={menuBtn}>
				<svg width="46" height="46" viewBox="-1 -2 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="line line1" d="M13.5 43.6161L42 15.1161C45 12.4494 50.5725 9.26076 54 16.1159C56 20.116 58.5 44.6159 51 45.1162C49.8027 45.196 24.3333 45.6162 10 45.1162" stroke="black" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
					<path className="line line2" d="M10 29H50" stroke="black" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
					<path className="line line3" d="M13.5 14.8571L42 43.3571C45 46.0237 50.5725 49.2124 54 42.3572C56 38.3572 58.5 13.8573 51 13.357C49.8027 13.2771 24.3333 12.857 10 13.357" stroke="black" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			{loaded && (
				<motion.ul className="nav_links" variants={navbarVariants} initial="initial" animate="animate">
					<motion.li variants={navbarLinkVariants} whileHover={{ scaleX: 1.25, transition: { type: "spring" } }} onClick={() => handleScroll("home")}>
						Home
					</motion.li>
					<motion.li variants={navbarLinkVariants} whileHover={{ scaleX: 1.25, transition: { type: "spring" } }} onClick={() => handleScroll("about")}>
						About
					</motion.li>
					<motion.li variants={navbarLinkVariants} whileHover={{ scaleX: 1.25, transition: { type: "spring" } }} onClick={() => handleScroll("features")}>
						Features
					</motion.li>
					<motion.li variants={navbarLinkVariants} whileHover={{ scaleX: 1.25, transition: { type: "spring" } }} onClick={() => handleScroll("testimonials")}>
						Testimonials
					</motion.li>
					<motion.li variants={navbarLinkVariants} whileHover={{ scaleX: 1.25, transition: { type: "spring" } }} onClick={() => handleScroll("contact")}>
						contact
					</motion.li>
				</motion.ul>
			)}
			<motion.ul className={`nav_links mobile ${opened && "opened"}`} variants={navmenuVariants} initial="false" animate="animate" ref={navRef}>
				<motion.li variants={linkVariants} whileHover={{ scaleX: 1.2, transformOrigin: "left center", transition: { type: "spring", ease: "easeInOut" } }}>
					Home
				</motion.li>
				<motion.li variants={linkVariants} whileHover={{ scaleX: 1.2, transformOrigin: "left center", transition: { type: "spring", ease: "easeInOut" } }}>
					About
				</motion.li>
				<motion.li variants={linkVariants} whileHover={{ scaleX: 1.2, transformOrigin: "left center", transition: { type: "spring", ease: "easeInOut" } }}>
					Features
				</motion.li>
				<motion.li variants={linkVariants} whileHover={{ scaleX: 1.2, transformOrigin: "left center", transition: { type: "spring", ease: "easeInOut" } }}>
					Testimonials
				</motion.li>
				<motion.li variants={linkVariants} whileHover={{ scaleX: 1.2, transformOrigin: "left center", transition: { type: "spring", ease: "easeInOut" } }}>
					contact
				</motion.li>
			</motion.ul>
		</section>
	);
}

export default Headder;
