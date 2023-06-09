import React, { useEffect, useState } from "react";
import "../css/Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const array = [
	{
		id: 0,
		title: "recipes collection website",
		image_url: "/project images/recipes collection website.png",
		description: "This is my major project that i have developed using MERN stack.for my final year project. It offers a user-friendly solution for organizing and discovering recipes. Find and store your favorite dishes with ease, from appetizers to desserts. Simplify your cooking experience and unleash your culinary creativity using my recipes collection web application.",
		project_link: "https://recipes-collection-website.netlify.app",
		className: "recipes",
	},
	{
		id: 1,
		title: "password management",
		image_url: "/project images/password management system.jpg",
		description: "this is my password management system website developed using MERN stack. This platform offers a secure and user-friendly solution for organizing and protecting your passwords. With advanced encryption and robust security measures, your sensitive information is safe. Experience the convenience and peace of mind it brings to your online security.",
		project_link: "https://password-management-system.netlify.app",
		className: "password",
	},
	{
		id: 2,
		title: "portfolio version1",
		image_url: "/project images/portfolio version1.svg",
		description: "this is my portfolio version1! This platform showcases my work, skills, and achievements in a visually appealing manner. Designed to establish a professional online presence, It reflects my unique style and philosophy while highlighting my problem-solving skills and value to clients. ",
		project_link: "https://mani-portfolio.netlify.app",
		className: "portfolio1",
	},
	{
		id: 3,
		title: "portfolio version2",
		image_url: "/project images/portfolio version2.png",
		description: "this is upgraded version of previous portfolio.where design and some layouts are changed and added projects page by removing testimonials.  Designed to establish a professional online presence, It reflects my unique style and philosophy while highlighting my problem-solving skills and value to clients.",
		project_link: "https://manikanta-portfolio.netlify.app",
		className: "portfolio2",
	},
];

function Projects() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		function runfunction() {
			setWidth(window.innerWidth);
			console.log(width);
		}
		window.addEventListener("resize", runfunction);
		return () => window.removeEventListener("resize", runfunction);
	}, [width]);

	return (
		<section className="project" id="projects">
			<h2>Projects</h2>
			<div className="projects_wrapper">
				<Swiper
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						700: {
							slidesPerView: 2,
						},
						930: {
							slidesPerView: 3,
						},
						1210: {
							slidesPerView: 4,
						},
					}}
					spaceBetween={30}
					loop={true}
					autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
					slidesPerGroup={1}
					modules={[Autoplay, Pagination, Navigation]}
					loopFillGroupWithBlank={true}
					navigation={{ prevEl: ".prev", nextEl: ".next" }}>
					{array.map((value, index) => {
						return (
							<SwiperSlide key={index}>
								<div className={`single_project ${value.className}`} key={index}>
									<img src={value.image_url}></img>
									<p>{value.title}</p>
									<p className="content">{value.description}</p>
									<button>
										<a href={value.project_link}>visit website</a>
									</button>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className="navigation">
					<button className="prev">
						<span>
							<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.2297 7.39002L9.02592 1.03576L9.42379 13.1536L0.2297 7.39002Z" fill="#D9D9D9" />
								<path d="M6.2297 7.39002L15.0259 1.03576L15.4238 13.1536L6.2297 7.39002Z" fill="#D9D9D9" />
							</svg>
						</span>
					</button>
					<button className="next">
						<span>
							<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.2297 7.39002L9.02592 1.03576L9.42379 13.1536L0.2297 7.39002Z" fill="#D9D9D9" />
								<path d="M6.2297 7.39002L15.0259 1.03576L15.4238 13.1536L6.2297 7.39002Z" fill="#D9D9D9" />
							</svg>
						</span>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Projects;
