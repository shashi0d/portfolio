import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/swiper-bundle.css";

import "./index.css";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";
import SvgComponent from "../SvgComponent";

export default function SocialLinkCube() {
	return (
		<>
			<Swiper
				effect={"cube"}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={true}
				modules={[Autoplay, EffectCube, Pagination]}
				className="mySwiper swipeElement"
			>
				<SwiperSlide>
					<Link to={"https://www.instagram.com/shashi096/"} target="_blank" className="m-1">
						<SvgComponent name="Instagram" />
					</Link>
					{/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
				</SwiperSlide>
				<SwiperSlide>
					<SvgComponent name="Mail" />
					{/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
				</SwiperSlide>
				<SwiperSlide>
					<SvgComponent name="Pinterest" />
					{/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
				</SwiperSlide>
				<SwiperSlide>
					<SvgComponent name="LinkedIn" />
					{/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
				</SwiperSlide>
			</Swiper>
		</>
	);
}
