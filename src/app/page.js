import { RiPlayCircleFill } from "@remixicon/react";
import Image from "next/image";

function page() {
  return (
		<>
		<section className="home section" id="home">
			<div className="home-container section-container grid gap-y-10 pt-28 pb-4 relative">
				<div className="home-content relative grid justify-self-center">
					<Image className="home-img sm:w-[220px] md:w-[320px] lg:w-[500px]" width={180} height={180} src='/img/home-img.png' alt="home image"  />
					<h1 className="home-title text-9xl md:text-[16rem] lg:text-[25rem] flex gap-x-1 lg:gap-x-4 text-main absolute justify-self-center">
						<span>J</span>
						<span className="z-[-1]">B</span>
						<span>L</span>
					</h1>
					<div className="home-tooltip absolute top-[-0.5rem] right-6 lg:right-[6rem]">
						<Image className="home-tooltip-img lg:w-auto" width={60} height={60} src='/img/tooltip-right.svg' alt="home tooltip image" />
						<span className="home-tooltip-text gradient-bg py-1 px-3 text-primary font-medium rounded-full absolute translate-x-[60px] translate-y-[-40px] whitespace-nowrap lg:translate-x-[82px] lg:translate-y-[-52px] lg:text-base">$150</span>
					</div>
				</div>
				<a href="#" class="home-button button font-normal justify-self-center lg:absolute lg:bottom-[4.5rem]">Buy Now <RiPlayCircleFill className="ri-play-circle-fill text-main"/></a>
			</div>
		</section>

    </>
  );
}

export default page;