'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';


interface SwiperComponentProps {}

const SwiperComponent: React.FC<SwiperComponentProps> = ({}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1000) {
        setSlidesPerView(2.7);
      } else {
        setSlidesPerView(1.2);
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
    <section className='mt-12 mb-24 w-[90%] m-auto'>
        
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
        <Link href={'/ecommerce'}>
        <img className='min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]' src="/preview.jpg" alt="Ecommerce" />
        </Link>
       
      </SwiperSlide>
      <SwiperSlide>
        <Link href={'/gallery'}>
        <img className='min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc]  md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]' src="/galleryslideshow.jpg" alt="Slide" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <img className='min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc]  md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]' src="/entertaiment.jpg" alt="entertainment" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc]  md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]' src="/desktop-preview.jpg" alt="desktop" />
      </SwiperSlide>
    </Swiper>
    </section>
</>
  );
};

export default SwiperComponent;
