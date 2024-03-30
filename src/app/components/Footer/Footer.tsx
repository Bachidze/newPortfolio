'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      <section className="bg-[#33323D] flex flex-col justify-center items-center pt-14 pb-14">
        <motion.div
        initial={{
            y:80
        }}
        whileInView={{
            y:0
        }}
        transition={{
            duration:.5
        }}
        >
          <Link href={'/'}><img src="/WhieDoubleArrow.svg" alt="Arrow2" /></Link>
        </motion.div>
        <div className="text-center text-white pt-10 pb-10 flex flex-col gap-8">
          <Link href={"/"}>
            <motion.h2 
            initial={{
                y:70
            }}
            whileInView={{
                y:0
            }}
            transition={{
                duration:0.6
            }}
            className="text-[12px] leading-[14.1px]">HOME</motion.h2>
          </Link>
          <Link href={"/portfolio"}>
            <motion.h2 
            initial={{
                y:70
            }}
            whileInView={{
                y:0
            }}
            transition={{
                duration:0.8
            }}
            className="text-[12px] leading-[14.1px]">PORTFOLIO</motion.h2>
          </Link>
          <Link href={"/contact"}>
            <motion.h2 
            initial={{
                y:70
            }}
            whileInView={{
                y:0
            }}
            transition={{
                duration:1
            }}
            className="text-[12px] leading-[14.1px]">CONTACT US</motion.h2>
          </Link>
        </div>
        <div className="flex gap-4">
          <motion.img
          initial={{
            y:50
          }}
          whileInView={{
            y:0
          }}
          transition={{
            duration:1
          }}
          src="/WhiteRename.svg" alt="icon" />
          <motion.img
          initial={{
            y:50
          }}
          whileInView={{
            y:0
          }}
          transition={{
            duration:1.2
          }}
          src="/WhiteTwitter.svg" alt="icon" />
          <motion.img
          initial={{
            y:50
          }}
          whileInView={{
            y:0
          }}
          transition={{
            duration:1.4
          }}
          src="/WhiteLinkdein.svg" alt="icon" />
        </div>
      </section>
    </>
  );
}
