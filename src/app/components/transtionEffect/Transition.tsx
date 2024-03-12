'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function Transition() {
  return (
    <>
      <motion.div
    initial={{x:'100%',width:"100%"}}
    animate={{x:'0%',width:'0%'}}
    transition={{duration:2.2,ease:'easeInOut'}}
    className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black'>
    </motion.div>
    <motion.div
    initial={{x:'100%',width:"100%"}}
    animate={{x:'0%',width:'0%'}}
    transition={{duration:1.7,ease:'easeInOut'}}
    className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[gray]'>
    </motion.div>
    <motion.div
    initial={{x:'100%',width:"100%"}}
    animate={{x:'0%',width:'0%'}}
    transition={{duration:1,ease:'easeInOut'}}
    className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black'>
    </motion.div>
    </>
  )
}
