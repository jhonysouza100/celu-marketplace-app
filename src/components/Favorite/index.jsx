"use client"
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function Favorite() {

  return (
    <section className="favorite section" id="favorite">
       <h2 className="section-title">CHOSE YOUR FAVORITE</h2>
       <div className="favorite-container pt-8 justify-self-center align-self-center lg:mx-auto">
          <Swiper className="swiper"
            loop={true}
            slidesPerView={'auto'}
            grabCursor={true}
            centeredSlides={'auto'}
            breakpoints={{
              768: {
                slidesPerView: 3,
              }
            }}>

            <SwiperSlide className="favorite-article swiper-slide w-[220px] grid justify-items-center filter blur scale-90 transition-all duration-300">
                <Image src="/img/favorite-1.png" className="favorite-img mb-6 lg:w-[500px] scale-90" alt="favorite image" width={220} height={220} />
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Black Model</span>
            </SwiperSlide>
            <SwiperSlide className="favorite-article swiper-slide w-[220px] grid justify-items-center filter blur scale-90 transition-all duration-300">
                <Image src="/img/favorite-2.png" className="favorite-img mb-6 lg:w-[500px]" alt="favorite image" width={220} height={220} />
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">White Model</span>
            </SwiperSlide>
            <SwiperSlide className="favorite-article swiper-slide w-[220px] grid justify-items-center filter blur scale-90 transition-all duration-300">
                <Image src="/img/favorite-3.png" className="favorite-img mb-6 lg:w-[500px]" alt="favorite image" width={220} height={220} />
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Red Model</span>
            </SwiperSlide>
            <SwiperSlide className="favorite-article swiper-slide w-[220px] grid justify-items-center filter blur scale-90 transition-all duration-300">
                <Image src="/img/favorite-4.png" className="favorite-img mb-6 lg:w-[500px]" alt="favorite image" width={220} height={220} />
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Teal Model</span>
            </SwiperSlide>
             
          </Swiper>
       </div>
    </section>
  );
}