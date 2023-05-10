import React from "react";
import "../css/testmonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const array = [
	{
		id: 0,
		name: "bhadri",
		image_url: "/images/bhadri.jpg",
		content: "[Web Developer's Name] was amazing in creating my business website. They exceeded my expectations, delivering a visually stunning site with seamless navigation and engaging content. Professional, knowledgeable, and responsive, [Web Developer's Name] was dedicated to perfection. Highly recommend!",
	},
	{
		id: 1,
		name: "bhadri",
		image_url: "/images/bhadri.jpg",
		content: "[Web Developer's Name] was amazing in creating my business website. They exceeded my expectations, delivering a visually stunning site with seamless navigation and engaging content. Professional, knowledgeable, and responsive, [Web Developer's Name] was dedicated to perfection. Highly recommend!",
	},
	{
		id: 2,
		name: "bhadri",
		image_url: "/images/bhadri.jpg",
		content: "[Web Developer's Name] was amazing in creating my business website. They exceeded my expectations, delivering a visually stunning site with seamless navigation and engaging content. Professional, knowledgeable, and responsive, [Web Developer's Name] was dedicated to perfection. Highly recommend!",
	},
	{
		id: 3,
		name: "bhadri",
		image_url: "/images/bhadri.jpg",
		content: "[Web Developer's Name] was amazing in creating my business website. They exceeded my expectations, delivering a visually stunning site with seamless navigation and engaging content. Professional, knowledgeable, and responsive, [Web Developer's Name] was dedicated to perfection. Highly recommend!",
	},
];

function Testmonials() {
	return (
		<section className="testmonials" id="testimonials">
			<h2>Testmonials</h2>
			<div className="testimonial_wrapper">
				<Swiper
					spaceBetween={20}
					slidesPerGroup={1}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						prevEl: ".prev",
						nextEl: ".next",
					}}
					modules={[Autoplay, Pagination, Navigation]}>
					{array.map((value) => {
						return (
							<SwiperSlide key={value.index}>
								<div className="content">
									<img src={value.image_url} alt="client_image" />
									<p>{value.content}</p>
								</div>
							</SwiperSlide>
						);
					})}
					<div className="navigation">
						<button onClick={() => Swiper.slidePrev()} className="prev">
							<span>
								<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.2297 7.39002L9.02592 1.03576L9.42379 13.1536L0.2297 7.39002Z" fill="#D9D9D9" />
									<path d="M6.2297 7.39002L15.0259 1.03576L15.4238 13.1536L6.2297 7.39002Z" fill="#D9D9D9" />
								</svg>
							</span>
						</button>
						<button onClick={() => Swiper.slideNext()} className="next">
							<span>
								<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.2297 7.39002L9.02592 1.03576L9.42379 13.1536L0.2297 7.39002Z" fill="#D9D9D9" />
									<path d="M6.2297 7.39002L15.0259 1.03576L15.4238 13.1536L6.2297 7.39002Z" fill="#D9D9D9" />
								</svg>
							</span>
						</button>
					</div>
				</Swiper>
			</div>
		</section>
	);
}

export default Testmonials;
