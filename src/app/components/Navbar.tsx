"use client";
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';
import React, { useState } from "react";
import { transform } from "next/dist/build/swc";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setShow(!show);
  };

  const brgr = "/hamburger.svg";
  const close = "/close.svg";

  return (
    <>
      <header className="w-[90%] m-auto max-w-[1920px] mt-8">
        <section className="flex justify-between items-center mb-10">
          <motion.div 
          initial={{
            y:"-100%",
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          >
            <Link href={'/'}><motion.img 
            whileHover={{
              scale:1.2
            }}
            transition={{
              duration:.5
            }}
            src="/DoubleArrow.svg" alt="MainIcon" /></Link>
          </motion.div>
          <motion.div
          initial={{
            y:"-100%"
          }}
          whileInView={{
            y:0
          }}
          transition={{
            duration:2
          }}
          >
            <motion.img 
            whileHover={{
              scale:1.2
            }}
            transition={{
              duration:.5
            }}
            className="cursor-pointer" onClick={toggleMenu} src={show ? close : brgr} alt="Hamburger" />
          </motion.div>
        </section>
        <section className="flex justify-between">
          <motion.div 
            initial={{ y: '50' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="border w-[50%]"
          />
          <motion.div
            initial={{ y: '50' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="border w-[50%]"
          />
        </section>
        <motion.section
          animate={{ y: show ? 10 : '-200%' }}
          transition={{ duration: 1, type: 'spring' }}
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          className="flex max-w-[1920px] absolute right-[19px]  flex-col items-end text-center bg-[#33323D] pt-10 pb-10 pl-20 pr-20 z-50 md:right-[39px] xl:right-[75px] xl:pt-16 xl:pb-16"
        >
          <motion.nav
          initial={{
            y:'-50%'
          }}
          whileInView={{
            y:0
          }}
          transition={{
            duration:0.5
          }}
          className="flex flex-col gap-8 text-white">
            <Link href={"/Home"}><h2 className="text-[12px] leading-[14.1px]">HOME</h2></Link>
            <Link href={"/portfolio"}><h2 className="text-[12px] leading-[14.1px]">PORTFOLIO</h2></Link>
            <Link href={"/contact"}><h2 className="text-[12px] leading-[14.1px]">CONTACT US</h2></Link>
          </motion.nav>
        </motion.section>
      </header>
    </>
  );
}
