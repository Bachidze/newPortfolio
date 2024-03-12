import Footer from "@/app/components/Footer/Footer";
import Transition from "@/app/components/transtionEffect/Transition";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Transition />

      <main className="w-[90%] max-w-[1920px] m-auto mt-6 mb-8">
        <section>
          <div className="flex justify-center">
            <img className="w-[311px] h-[271px]" src="/Compiuter.svg" alt="" />
          </div>
          <div className="w-[94%] m-auto mt-6">
            <h1 className="text-[40px] leading-[42px] font-bold tracking-tight">
              Hey, I’m Giorgi Bachidze and I love building beautiful websites
            </h1>
            <div className="flex   items-center bg-[#203A4C] w-[200px] mt-8">
              <div className="bg-[#1b2831] w-[48px] h-[48px] flex justify-center items-center">
                <img src="/down-arrows.svg" alt="Arrow" />
              </div>
              <div className="pl-9">
                <h2 className="text-[12px] leading-[14.1px] text-white font-normal">
                  <a href="#">ABOUT ME</a>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <div className="flex justify-center">
            <img src="/Portfolio.svg" alt="Portfolio" />
          </div>
          <div className="mt-8 mb-8 flex flex-col justify-center">
            <div className="relative">
              <div className="border border-[grey] opacity-45 w-[50%] m-auto absolute left-0"></div>
              <div className="border border-[grey] opacity-45 w-[50%] m-auto absolute right-0"></div>
            </div>
            <div className="w-[94%] m-auto mt-8">
              <h1>About Me</h1>
              <p className="mt-6 text-[15px] leading-[30px] text-[#33323D] break-all sm:mt-[50px]">
                I’m a junior front-end developer looking for a new role in an
                exciting company. I focus on writing accessible HTML, using
                modern CSS practices and writing clean JavaScript. When writing
                JavaScript code, I mostly use React, but I can adapt to whatever
                tools are required. I’m based in London, UK, but I’m happy
                working remotely and have experience in remote teams. When I’m
                not coding, you’ll find me outdoors. I love being out in nature
                whether that’s going for a walk, run or cycling. I’d love you to
                check out my work.
              </p>
            </div>
            <div className="w-[94%] m-auto">
              <div className="border border-[gray] w-[210px] h-[48px] pl-8 pr-8 pt-[17px] pb-[17px] mt-6 flex justify-center">
                <h2 className="text-[12px] leading-[14.1px] font-normal text-[#33323D]">
                  GO TO PORTFOLIO
                </h2>
              </div>
            </div>
              <div className="relative mt-8">
                <div className="border border-[grey] opacity-45 w-[50%] m-auto absolute left-0"></div>
                <div className="border border-[grey] opacity-45 w-[50%] m-auto absolute right-0"></div>
              </div>
          </div>
        </section>
        <section className="mt-28">
          <div>
          <h1 className="text-[40px] leading-[42px] font-bold tracking-tight text-center">Interested in doing a project together?</h1>
          </div>
          <div className="w-[94%] m-auto flex justify-center mt-5 mb-20">
              <div className="border border-[gray] w-[162] h-[48px] pl-8 pr-8 pt-[17px] pb-[17px] mt-6">
                <h2 className="text-[12px] leading-[14.1px] font-normal text-[#33323D]">
                CONTACT ME
                </h2>
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
