import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function page() {
  return (
    <>
      <main className="flex flex-col justify-center items-center m-auto">
        <div className="mb-8 mt-8 md:mt-10 md:mb-10 xl:mt-14 xl:mb-14">
          <h1 className="text-[40px] font-bold leading-[42px] tracking-wide md:text-[44px] md:leading-[50px] xl:text-[56px] xl:leading-[60px]">
            E-commerce
          </h1>
        </div>
        <div>
          <Image 
          className="md:hidden rounded-xl border-2 border-[#dcdcdc]"
          alt="E-commerce"
          src={"/preview.jpg"}
          width={350}
          height={250}
          />
          <Image 
          className="hidden md:flex xl:hidden rounded-xl border-2 border-[#dcdcdc]"
          alt="E-commerce"
          src={"/preview.jpg"}
          width={670}
          height={500}
          />
          <Image 
          className="hidden xl:flex rounded-xl border-2 border-[#dcdcdc]"
          alt="E-commerce"
          src={"/preview.jpg"}
          width={1100}
          height={700}
          />
        </div>
        <div className="text-center mt-8 break-all md:mt-10 md:mb-10 xl:mt-16 xl:mb-14  w-[350px] md:w-[680px] xl:w-[1100px]">
          <p className="text-[15px] leading-[30px] text-[#33323D] md:text-[17px] md:leading-9 xl:text-[22px] xl:leading-[40px]">
            Realistic Challenge: The E-commerce project simulates a real-world
            scenario, which is invaluable for developers aiming to build their
            portfolio or prepare for job interviews. The complexity and depth of
            the project provide a comprehensive test of frontend skills.
          </p>
        </div>
        <div className="flex gap-6 mt-8 mb-8 md:gap-8 md:mt-10 md:mb-10 xl:mt-14 xl:mb-20">
          <button className="border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700 md:text-[16px] md:pt-5 md:pb-5 xl:pt-8 xl:pb-8 xl:pl-[70px] xl:pr-[70px] xl:text-[22px]">
            <a href="https://github.com/Bachidze/GuruLevel">Code</a>
          </button>
          <button className="border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700 md:text-[16px] md:pt-5 md:pb-5 xl:pt-8 xl:pb-8 xl:pl-[70px] xl:pr-[70px] xl:text-[22px]">
            <a href="https://guru-level.vercel.app/">Live</a>
          </button>
        </div>
      </main>
    </>
  );
}
