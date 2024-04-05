import React from "react";
import Image from "next/image";
export default function CoffeRoaster() {
  return (
    <>
      <main className="flex flex-col justify-center items-center m-auto">
        <div className="mb-8 mt-8 md:mt-10 md:mb-10 xl:mt-14 xl:mb-14">
          <h1 className="text-[40px] font-bold leading-[42px] tracking-wide md:text-[44px] md:leading-[50px] xl:text-[56px] xl:leading-[60px]">
            CoffeeRoaster App
          </h1>
        </div>
        <div>
          <Image
            className="md:hidden rounded-xl border-2 border-[#dcdcdc]"
            alt="E-commerce"
            src={"/cofferoasterphoto.jpg"}
            width={350}
            height={250}
          />
          <Image
            className="hidden md:flex xl:hidden rounded-xl border-2 border-[#dcdcdc]"
            alt="E-commerce"
            src={"/cofferoasterphoto.jpg"}
            width={670}
            height={500}
          />
          <Image
            className="hidden xl:flex rounded-xl border-2 border-[#dcdcdc]"
            alt="E-commerce"
            src={"/cofferoasterphoto.jpg"}
            width={1100}
            height={700}
          />
        </div>
        <div className="text-center mt-8 break-all md:mt-10 md:mb-10 xl:mt-16 xl:mb-14  w-[350px] md:w-[680px] xl:w-[1100px]">
          <p className="text-[15px] leading-[30px] text-[#33323D] md:text-[17px] md:leading-9 xl:text-[22px] xl:leading-[40px]">
            Roast Profile Selection: Allowing users to select different roast
            profiles for their coffee beans, such as light, medium, or dark
            roast. Custom Roasting Parameters: Providing options for users to
            customize roasting parameters such as temperature, duration, and
            agitation. Real-time Monitoring: Implementing a real-time monitoring
            feature to show the progress of the roasting process, including
            temperature curves and color changes. User Profiles: Allowing users
            to create accounts to save their favorite roast profiles and track
            their roasting history. Educational Resources: Offering educational
            content about coffee roasting techniques, bean varieties, and flavor
            profiles. To complete the &#34;CoffeeRoaster App&#34; challenge, developers
            would need to design and implement the frontend interface using
            HTML, CSS, and JavaScript. They may also need to integrate the
            frontend with backend services or APIs if the app requires dynamic
            data or user authentication features. Building projects like
            CoffeeRoaster App on Frontend Mentor can be an excellent opportunity
            for developers to enhance their frontend development skills, explore
            new technologies, and create portfolio-worthy projects that showcase
            their abilities to potential employers or clients, particularly in
            the realm of food and beverage applications.
          </p>
        </div>
        <div className="flex gap-6 mt-8 mb-8 md:gap-8 md:mt-10 md:mb-10 xl:mt-14 xl:mb-20">
          <button className="border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700 md:text-[16px] md:pt-5 md:pb-5 xl:pt-8 xl:pb-8 xl:pl-[70px] xl:pr-[70px] xl:text-[22px]">
            <a href="https://github.com/Bachidze/cofferoastersAPP">Code</a>
          </button>
          <button className="border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700 md:text-[16px] md:pt-5 md:pb-5 xl:pt-8 xl:pb-8 xl:pl-[70px] xl:pr-[70px] xl:text-[22px]">
            <a href="">Live</a>
          </button>
        </div>
      </main>
    </>
  );
}
