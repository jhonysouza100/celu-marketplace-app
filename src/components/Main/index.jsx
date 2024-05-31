import { RiFacebookCircleFill, RiInstagramFill, RiPlayCircleFill, RiYoutubeFill } from "@remixicon/react";
import Image from "next/image";

export default function Main() {
  return (
    <section className="home section" id="home">
			<div className="home-container section-container grid gap-y-10 pt-28 pb-4 lg:relative">
				<div className="home-content relative grid justify-self-center">
					<Image className="home-img sm:w-[220px] md:w-[320px] lg:w-[500px]" width={180} height={180} src='/img/home-img.png' alt="home image"  />
					<h1 className="home-title text-9xl md:text-[16rem] lg:text-[25rem] flex gap-x-1 lg:gap-x-4 text-main absolute justify-self-center">
						<span>J</span>
						<span className="z-[-1]">B</span>
						<span>L</span>
					</h1>
          {/* <!-- tooltip component --> */}
					<div className="home-tooltip absolute top-[-0.5rem] right-6 lg:right-[6rem]">
						<Image className="home-tooltip-img lg:w-auto" width={60} height={60} src='/img/tooltip-right.svg' alt="home tooltip image" />
						<span className="home-tooltip-text gradient-bg py-1 px-3 text-primary font-medium rounded-full absolute translate-x-[60px] translate-y-[-40px] whitespace-nowrap lg:translate-x-[82px] lg:translate-y-[-52px] lg:text-base">$150</span>
					</div>
				</div>
				<a href="#" class="home-button button font-normal justify-self-center lg:absolute lg:bottom-[4.5rem]">Buy Now <RiPlayCircleFill className="ri-play-circle-fill text-main"/></a>
        {/* <!-- social component --> */}
        <div className="home-social grid ml-4 sm:ml-6 justify-items-center gap-y-24 absolute top-56 left-[-1.5rem] md:top-0 md:bottom-0 md:place-content-center">
           <span className="home-social-text relative rotate-90 text-sm font-medium lg:text-base after:content-[''] after:w-12 after:h-[1px] after:bg-secondary after:absolute after:top-0 after:bottom-0 after:right-[-64px] after:mt-auto after:mb-auto">Follow Us</span>
           <div className="home-social-links grid gap-y-6">
              <a href="#" target="_blank" className="home-social-link text-xl lg:text-2xl text-secondary transition-colors duration-300 hover:text-main"><RiInstagramFill className="ri-instagram-fill" /></a>
              <a href="#" target="_blank" className="home-social-link text-xl lg:text-2xl text-secondary transition-colors duration-300 hover:text-main"><RiFacebookCircleFill className="ri-facebook-circle-fill" /></a>
              <a href="#" target="_blank" className="home-social-link text-xl lg:text-2xl text-secondary transition-colors duration-300 hover:text-main"><RiYoutubeFill className="ri-youtube-fill" /></a>
           </div>
        </div>
			</div>
		</section>
  );
}