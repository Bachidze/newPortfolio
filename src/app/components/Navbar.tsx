"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const controls = useAnimation();
  const [active, setActive] = useState(0);

  const toggleMenu = () => {
    setShow(!show);
  };


  const handleInputClick = (itemNum: number) => {
    if (active === itemNum) {
      return
    } else {
      setActive(itemNum);
    }
  };
  const brgr = "/hamburger.svg";
  const close = "/close.svg";

  return (
    <>
      <header className="w-[90%] m-auto max-w-[1920px] mt-8">
        <section className="flex justify-between items-center mb-10">
          <div className="flex  gap-6 items-center">
            <motion.div
              initial={{
                y: "-100%",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2,
              }}
            >
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/DoubleArrow.svg"}
                  width={60}
                  height={60}
                />
              </Link>
            </motion.div>
              <motion.div
                initial={{
                  y: "-90%",
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                }}
              className="relative">
                <Link href={'/'} className="hidden md:flex text-[40px] font-bold leading-[42px] tracking-wide">
                  Giorgi Bachidze
                </Link>
              </motion.div>
          </div>
          
          <div className="flex w-[25%] justify-between">
              <motion.div
              initial={{
                x:'-100%'
              }}
              whileInView={{
                x:0
              }}
              whileHover={{
                border:'1px solid black',
                padding:5
              }}
              transition={{
                duration:0.1
              }}
              >
              <Link  href={"/"}>
                <h2 style={{color:active === 1 ? 'black' : '', borderBottom:active === 1 ?'2px solid black':'', transition:'.2s'}} onClick={() => handleInputClick(1)} className="text-[18px] leading-[28px] font-medium">HOME</h2>
              </Link>
              </motion.div>
              <motion.div
              whileHover={{
                border:'1px solid black',
                padding:5
              }}
              transition={{
                duration:0.1
              }}
              >
              <Link href={"/portfolio"}>
                <h2 style={{color:active === 2 ? 'black' : '', borderBottom:active === 2 ?'2px solid black':'', transition:'.2s'}} onClick={() => handleInputClick(2)} className="text-[18px] leading-[28px] font-">PORTFOLIO</h2>
              </Link>
              </motion.div>
              <motion.div
              initial={{
                x:'100%'
              }}
              whileInView={{
                x:0
              }}
              whileHover={{
                border:'1px solid black',
                padding:5
              }}
              transition={{
                duration:0.1
              }}
              >
              <Link href={"/contact"}>
                <h2 style={{color:active === 3 ? 'black' : '', borderBottom:active === 3 ?'2px solid black':'', transition:'.2s'}} onClick={() => handleInputClick(3)} className="text-[18px] leading-[28px] font-">CONTACT US</h2>
              </Link>
              </motion.div>
          </div>

          <motion.div
            initial={{
              y: "-100%",
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            className="cursor-pointer xl:hidden"
            onClick={toggleMenu}
          >
            <Image
              src={show ? close : brgr}
              alt="Hamburger"
              width={25}
              height={25}
            />
          </motion.div>
        </section>
        <section className="flex justify-between">
          <motion.div
            initial={{ y: "50" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="border w-[50%]"
          />
          <motion.div
            initial={{ y: "50" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="border w-[50%]"
          />
        </section>

        <section className="max-w-[1920px] relative xl:hidden">
          <motion.div
            animate={{ y: show ? 10 : "-200%" }}
            transition={{ duration: 1, type: "spring" }}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className="flex max-w-[1920px] absolute  right-0 flex-col items-end text-center bg-[#33323D] pt-10 pb-10 pl-20 pr-20 z-50  xl:pt-16 xl:pb-16"
          >
            <motion.nav
              initial={{
                y: "-50%",
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col gap-8 text-white"
            >
              <Link href={"/"}>
                <h2 className="text-[12px] leading-[14.1px]">HOME</h2>
              </Link>
              <Link href={"/portfolio"}>
                <h2 className="text-[12px] leading-[14.1px]">PORTFOLIO</h2>
              </Link>
              <Link href={"/contact"}>
                <h2 className="text-[12px] leading-[14.1px]">CONTACT US</h2>
              </Link>
            </motion.nav>
          </motion.div>
        </section>
      </header>
    </>
  );
}
