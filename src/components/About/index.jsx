import { RiInformationFill } from "@remixicon/react";
import Image from "next/image";

export default function About() {
  return (
    <section className="about section" id="about">
       <div className="about-container section-container grid gap-6 gap-y-14 md:grid-cols-2 lg:grid-cols-2 lg:items-center lg:gap-x-20">
          <div className="about-data text-center lg:text-left lg:w-[400px] md:justify-self-end">
             <h2 className="section-title lg:text-left">MORE ABOUT US</h2>
             <p className="about-description mb-10 lg:mt-14">Enjoy award-winning JBL sound with wireless listening freedom and a sleek, streamlined design with comfortable cushioned earcups that deliver premium playback for the user.</p>
             <a href="#" className="button font-normal">Know More <RiInformationFill className="ri-information-fill text-main" /></a>
          </div>
          <Image src="/img/about-img.png" width={280} height={280} className="about-img justify-self-center md:justify-self-start lg:w-[500px]" alt="about image" quality={100} />
       </div>
    </section>
  );
}