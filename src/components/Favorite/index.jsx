import Image from "next/image";

export default function Favorite() {
  return (
    <section className="favorite section" id="favorite">
       <h2 className="section-title">CHOSE YOUR FAVORITE</h2>
       <div className="favorite-container pt-8 lg:max-w-[1000px] lg:mx-auto">
          <div className="favorite-swiper swiper">
             <div className="swiper-wrapper">
                <article className="favorite-article swiper-slide w-[220px] grid justify-items-center filter scale-90 transition-all duration-300">
                   <Image src="/img/favorite-1.png" className="favorite-img mb-6 lg:w-[500px]" alt="favorite image" width={220} height={220} />
                   <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Black Model</span>
                </article>
                <article className="favorite-article swiper-slide w-[220px] grid justify-items-center filter blur scale-90 transition-all duration-300">
                   <Image src="/img/favorite-2.png" className="favorite-img mb-6 lg:w-[500px]" alt="favorite image" width={220} height={220} />
                   <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">White Model</span>
                </article>
                <article className="favorite-article swiper-slide w-[220px] grid justify-items-center filter blur scale-90 transition-all duration-300">
                   <Image src="/img/favorite-3.png" className="favorite-img mb-6 lg:w-[500px]" alt="favorite image" width={220} height={220} />
                   <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Red Model</span>
                </article>
                <article className="favorite-article swiper-slide w-[220px] grid justify-items-center filter blur scale-90 transition-all duration-300">
                   <Image src="/img/favorite-4.png" className="favorite-img mb-6 lg:w-[500px]" alt="favorite image" width={220} height={220} />
                   <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Teal Model</span>
                </article>
             </div>
          </div>
       </div>
    </section>
  );
}