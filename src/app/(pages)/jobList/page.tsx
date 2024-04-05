import React from "react";
import Image from "next/image";
export default function JobList() {
  return (
    <>
      <main className="flex flex-col justify-center items-center m-auto">
        <div className="mb-8 mt-8 md:mt-10 md:mb-10 xl:mt-14 xl:mb-14">
          <h1 className="text-[40px] font-bold leading-[42px] tracking-wide md:text-[44px] md:leading-[50px] xl:text-[56px] xl:leading-[60px]">
            JobList App
          </h1>
        </div>
        <div>
          <Image
            className="md:hidden rounded-xl border-2 border-[#dcdcdc]"
            alt="E-commerce"
            src={"/JobList.jpg"}
            width={350}
            height={250}
          />
          <Image
            className="hidden md:flex xl:hidden rounded-xl border-2 border-[#dcdcdc]"
            alt="E-commerce"
            src={"/JobList.jpg"}
            width={670}
            height={500}
          />
          <Image
            className="hidden xl:flex rounded-xl border-2 border-[#dcdcdc]"
            alt="E-commerce"
            src={"/JobList.jpg"}
            width={1100}
            height={700}
          />
        </div>
        <div className="text-center mt-8 break-all md:mt-10 md:mb-10 xl:mt-16 xl:mb-14  w-[350px] md:w-[680px] xl:w-[1100px]">
          <p className="text-[15px] leading-[30px] text-[#33323D] md:text-[17px] md:leading-9 xl:text-[22px] xl:leading-[40px]">
            As of my last update in January 2022, there is not a specific project
            named &#34;JobListApp&#34; associated with Frontend Mentor. However, it is
            possible that a &#34;JobListApp&#34; challenge was added to the platform
            after my last update. If &#34;JobListApp&#34; is indeed a project on
            Frontend Mentor, it would likely involve creating a web application
            that allows users to view and interact with a list of job postings.
            This could include features such as: Displaying a list of job
            postings with details such as job title, company, location, and date
            posted. Allowing users to filter job listings based on criteria such
            as location, job type, or keyword. Implementing search functionality
            to allow users to search for specific job titles or keywords.
            Enabling users to click on a job listing to view more details about
            the job. Providing options for users to apply for jobs or save them
            for later.
          </p>
        </div>
        <div className="flex gap-6 mt-8 mb-8 md:gap-8 md:mt-10 md:mb-10 xl:mt-14 xl:mb-20">
          <button className="border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700 md:text-[16px] md:pt-5 md:pb-5 xl:pt-8 xl:pb-8 xl:pl-[70px] xl:pr-[70px] xl:text-[22px]">
            <a href="https://github.com/Bachidze/job-list">Code</a>
          </button>
          <button className="border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700 md:text-[16px] md:pt-5 md:pb-5 xl:pt-8 xl:pb-8 xl:pl-[70px] xl:pr-[70px] xl:text-[22px]">
            <a href="https://job-list-seven.vercel.app/">
              Live
            </a>
          </button>
        </div>
      </main>
    </>
  );
}
