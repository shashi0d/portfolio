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
					slideShadows: false,
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
					<a href={"https://www.instagram.com/shashi096/"} target="_blank" rel="noreferrer">
						<SvgComponent name="Instagram" />
					</a>
					{/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
				</SwiperSlide>
				<SwiperSlide>
					<a href={"mailto: shashi@zerodistance.io"} target="_blank" rel="noreferrer">
						<SvgComponent name="Mail" />
					</a>
					{/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
				</SwiperSlide>
				<SwiperSlide>
					<a href={"https://pin.it/1hom1KV"} target="_blank" rel="noreferrer">
						<SvgComponent name="Pinterest" />
					</a>
					{/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
				</SwiperSlide>
				<SwiperSlide>
					<a href={"https://www.linkedin.com/in/meetshashi/"} target="_blank" rel="noreferrer">
						<SvgComponent name="LinkedIn" />
					</a>
					{/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
				</SwiperSlide>
			</Swiper>
		</>
	);
}
