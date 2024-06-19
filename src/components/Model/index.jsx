import { RiPlayCircleFill } from "@remixicon/react";
import Image from "next/image";

export default function Models() {
  return (
    <section className="model section" id="model">
       <h2 className="section-title">MODEL SPECIFICATIONS</h2>
       <div className="model-container section-container grid gap-6 pt-8 gap-y-10">
          <div className="model-content relative justify-self-center">
             <Image width={220} height={220} className="model-img sm:w-[280px] lg:w-[500px]" src="/img/model-img.png" alt="model image" quality={100} />
             {/* <!-- tooltip --> */}
             <div className="model-tooltip absolute model-tooltip-1 scale-x-[-1] top-12 left-16 sm:top-20 sm:left-20 lg:top-[7.5rem] lg:left-[8.5rem]">
                <Image width={60} height={60} src="/img/tooltip-right.svg" alt="model tooltip" className="model-tooltip-img lg:w-auto" quality={100} />
                <span className="model-tooltip-text scale-x-[-1] translate-x-[40px] translate-y-[-40px] sm:translate-x-[60px] sm:translate-y-[-40px] lg:translate-y-[-56px] lg:translate-x-[82px]">Best Comfort</span>
             </div>
             <div className="model-tooltip absolute model-tooltip-2 scale-x-[-1] top-0 sm:top-4 right-6 lg:transform-none lg:top-[6.5rem] lg:right-[-1.5rem]">
                <Image width={60} height={60} src="/img/tooltip-right.svg" alt="model tooltip" className="model-tooltip-img lg:w-auto" quality={100} />
                <span className="model-tooltip-text scale-x-[-1] lg:scale-[1] translate-x-[40px] translate-y-[-40px] sm:translate-x-[60px] sm:translate-y-[-40px] lg:translate-x-[82px] lg:translate-y-[-56px]">Easy Adjustment</span>
             </div>
             <div className="model-tooltip absolute model-tooltip-3 bottom-8 left-12 sm:bottom-[1.8rem] sm:left-14 lg:left-0 lg:bottom-[6rem] lg:scale-x-[-1]">
                <Image width={60} height={60} src="/img/tooltip-right.svg" alt="model tooltip" className="model-tooltip-img lg:w-auto" quality={100} />
                <span className="model-tooltip-text translate-x-[42px] translate-y-[-40px] sm:translate-x-[60px] sm:translate-y-[-40px] lg:translate-x-[82px] lg:translate-y-[-56px] lg:scale-x-[-1]">Fast Charge</span>
             </div>
             <div className="model-tooltip absolute model-tooltip-4 bottom-24 right-16 sm:bottom-28 sm:right-20 lg:bottom-[10rem] lg:right-[7rem]">
                <Image width={60} height={60} src="/img/tooltip-right.svg" alt="model tooltip" className="model-tooltip-img lg:w-auto" quality={100} />
                <span className="model-tooltip-text translate-x-[42px] translate-y-[-40px] sm:translate-x-[60px] sm:translate-y-[-40px] lg:translate-x-[82px] lg:translate-y-[-56px]">Custom Audio</span>
             </div>
          </div>
          <a href="#" className="model-button button font-normal justify-self-center">Buy Now <RiPlayCircleFill className="ri-play-circle-fill text-main" /></a>
       </div>
    </section>
  );
}