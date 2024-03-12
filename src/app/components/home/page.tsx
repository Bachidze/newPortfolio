"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <>
      <main className="w-[90%] max-w-[1920px] m-auto mt-14 mb-8">
        <section>
          <motion.h1
            initial={{
              y:'-100%'
            }}
            whileInView={{
              y:0
            }}
            transition={{
              duration:.7
            }}
          className="text-[40px] font-bold leading-[42px] tracking-wide">
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{
              x:'-100%'
            }}
            whileInView={{
              x:0
            }}
            transition={{
              duration:1.2
            }}
          className="mt-6 text-[15px] leading-[30px] text-[#33323D] break-all sm:mt-[50px]">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in any
            company. But I’m also happy to hear about opportunites that don’t
            fit that description. I’m a hard-working and positive person who
            will always approach each task with a sense of purpose and attention
            to detail. Please do feel free to check out my online profiles below
            and get in touch using the form.
          </motion.p>
        </section>
        <section>
          <div className="mt-14">
            <motion.h1
              initial={{
                y:'-100%'
              }}
              whileInView={{
                y:0
              }}
              transition={{
                duration:.7
              }}
            className="text-[40px] font-bold leading-[42px] tracking-wider">
              Experience
            </motion.h1>
          </div>
          <div className="w-[90%] m-auto mt-14">
            <nav>
              <ul className="flex flex-col gap-5">
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1
                  }}
                className="list-disc">
                  I recently completed a comprehensive 10-month module at
                  Re:Educate
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                className="list-disc">
                  I worked at Webdoors as a Junior React/Next developer for a
                  year.
                </motion.li>
              </ul>
            </nav>
          </div>
        </section>
        <section>
          <div className="mt-12">
            <motion.h1
            initial={{
              y:'-50%'
            }}
            whileInView={{
              y:0
            }}
            transition={{
              duration:.7
            }}
            className="text-[40px] font-bold leading-[42px] tracking-widest">
              Skills
            </motion.h1>
          </div>
          <motion.div className="w-[90%] m-auto mt-12">
            <nav>
              <ul className="list-disc flex flex-col  gap-5">
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  HyperText Markup Language
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Cascading Style Sheets
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Syntactically Awesome Style Sheets
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Javascript
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  TypeScript
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  React
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Next
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Node
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Framer Motion
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Redux Toolkit
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  MongoDB
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  Material-UI
                </motion.li>
                <motion.li
                  initial={{
                    x: "-30%",
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  React-Toastify
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        </section>
        <section className="mt-6 sm:mt-20">
          <div className="flex gap-4">
            <motion.img 
             initial={{
              x: "-250%",
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            src="/github.svg" alt="Github" />
            <motion.img 
             initial={{
              x: "-300%",
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            src="/twitter.svg" alt="Twitter" />
            <motion.img 
             initial={{
              x: "-350%",
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            src="/linkedin.svg" alt="Linkdein" />
          </div>
        </section>
      </main>
      <footer>
        <section className="flex w-[90%] m-auto justify-between mb-8">
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0}}
            transition={{ duration: 1.5 }}
            className="border w-[50%]"
          />
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="border w-[50%]"
          />
        </section>
      </footer>
    </>
  );
}
