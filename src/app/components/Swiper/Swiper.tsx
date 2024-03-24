'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


interface SwiperComponentProps {}

const SwiperComponent: React.FC<SwiperComponentProps> = ({}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1000) {
        setSlidesPerView(3.2);
      } else {
        setSlidesPerView(1.6);
      }
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
<>
    <section className='mt-12 mb-24'>
        
    <Swiper
      autoplay={{ delay: 2500 }}
      modules={[Pagination, Autoplay]}
      loop
      spaceBetween={50}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='w-[400px] h-[200px] rounded-xl xl:w-[450px] xl:h-[300px]' src="/preview.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[200px] rounded-xl xl:w-[450px] xl:h-[300px]' src="/galleryslideshow.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[200px] rounded-xl xl:w-[450px] xl:h-[300px]' src="/entertaiment.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[400px] h-[200px] rounded-xl xl:w-[450px] xl:h-[300px]' src="/desktop-preview.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
    </section>
</>
  );
};

export default SwiperComponent;
