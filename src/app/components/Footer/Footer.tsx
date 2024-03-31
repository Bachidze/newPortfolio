'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
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
          <Link href={'/'}>
            <Image alt="image" src={"/WhieDoubleArrow.svg"} width={60} height={60} />
            </Link>
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
          <motion.div
              initial={{
                y: 50,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <a href="https://github.com/Bachidze">
                <Image alt="Gihub" src={"/WhiteRename.svg"} height={25} width={25} />
              </a>
            </motion.div>

            <motion.div
              initial={{
                y: 50,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <a href="https://github.com/Bachidze">
                <Image
                  alt="Gihub"
                  src={"/WhiteTwitter.svg"}
                  height={25}
                  width={25}
                />
              </a>
            </motion.div>

            <motion.div
              initial={{
                y: 50,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <a href="https://www.linkedin.com/in/giorgi-bachidze-11b68426b/">
                <Image
                  alt="Gihub"
                  src={"/WhiteLinkdein.svg"}
                  height={25}
                  width={25}
                />
              </a>
            </motion.div>
        </div>
      </section>
    </>
  );
}
