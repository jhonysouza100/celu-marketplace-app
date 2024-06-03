"use client"
import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "@remixicon/react";

export default function ScrollUp() {

	const [isSCroll, setIsScroll] = useState(false)
	const scrollUp = () => {
		// when the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the a tag with the scrollup
		window.scrollY >= 350 ? setIsScroll(true) : setIsScroll(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollUp);
    return () => {
			// limpia el evento de desplazamiento cuando el componente se desmonta para evitar posibles problemas de memoria.
			window.addEventListener("scroll", scrollUp);
    };
  });


	return (
		<a href="#" className={`scrollup ${isSCroll && 'isshow'} fixed right-4 bottom-[-50%] gradient-bg inline-flex text-primary text-xl p-1 rounded z-50 transition-all duration-300 hover:translate-y-[-0.5rem] lg:right-12`}><RiArrowUpSLine className="ri-arrow-up-s-line" /></a >
	)
}
