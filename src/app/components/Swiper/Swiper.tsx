"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

interface SwiperComponentProps {}

const SwiperComponent: React.FC<SwiperComponentProps> = ({}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1600) {
        setSlidesPerView(3.2);
      }else if (window.innerWidth >= 1000){
        setSlidesPerView(2.7)
      }
      else if (window.innerWidth >= 600) {
        setSlidesPerView(2);
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
      <section className="mt-12 mb-24 w-[90%] m-auto max-w-[1920px]">
        <Swiper
          autoplay={{ delay: 2000 }}
          modules={[Pagination, Autoplay]}
          loop
          spaceBetween={50}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Link href={"/ecommerce"}>
              <Image
                className="min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]"
                alt="E-commerce"
                src={"/preview.jpg"}
                width={300}
                height={200}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/gallery"}>
              <Image
                className="min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]"
                alt="E-commerce"
                src={"/galleryslideshow.jpg"}
                width={300}
                height={200}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/entertainmentWebApp"}>
            <Image
              className="min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]"
              alt="E-commerce"
              src={"/entertaiment.jpg"}
              width={300}
              height={200}
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/restAPI'}>
            <Image
              className="min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={300}
              height={200}
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/passwordGenerator'}>
            <Image
              className="min-w-[300px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[430px] xl:h-[300px]"
              alt="E-commerce"
              src={"/paaswordgeneratoimage.jpg"}
              width={300}
              height={200}
            />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default SwiperComponent;
