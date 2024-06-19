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
            centeredSlides={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              }
            }}>

            <SwiperSlide className="favorite-article swiper-slide w-[220px] justify-items-center filter blur-sm transition-all duration-500" style={{ display: "grid"}}>
                <Image src="/img/favorite-1.png" className="favorite-img mb-6 lg:w-[500px] transition-all duration-500" alt="favorite image" width={220} height={220} style={{ scale: ".8" }} quality={100}/>
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Black Model</span>
            </SwiperSlide>
            <SwiperSlide className="favorite-article swiper-slide w-[220px] justify-items-center filter blur-sm transition-all duration-500" style={{ display: "grid" }}>
                <Image src="/img/favorite-2.png" className="favorite-img mb-6 lg:w-[500px] transition-all duration-500" alt="favorite image" width={220} height={220} style={{ scale: ".8" }} quality={100}/>
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">White Model</span>
            </SwiperSlide>
            <SwiperSlide className="favorite-article swiper-slide w-[220px] justify-items-center filter blur-sm transition-all duration-500" style={{ display: "grid" }}>
                <Image src="/img/favorite-3.png" className="favorite-img mb-6 lg:w-[500px] transition-all duration-500" alt="favorite image" width={220} height={220} style={{ scale: ".8" }} quality={100}/>
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Red Model</span>
            </SwiperSlide>
            <SwiperSlide className="favorite-article swiper-slide w-[220px] justify-items-center filter blur-sm transition-all duration-500" style={{ display: "grid" }}>
                <Image src="/img/favorite-4.png" className="favorite-img mb-6 lg:w-[500px] transition-all duration-500" alt="favorite image" width={220} height={220} style={{ scale: ".8" }} quality={100}/>
                <span className="favorite-model gradient-bg py-2 px-6 rounded-full text-primary">Teal Model</span>
            </SwiperSlide>
             
          </Swiper>
       </div>
    </section>
  );
}