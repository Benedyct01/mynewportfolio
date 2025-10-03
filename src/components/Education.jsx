import React from 'react'
import { motion } from "motion/react"
import { Element } from 'react-scroll'

const Education = () => {
  return (
    <Element name='education'>
      <section className='flex flex-row w-full max-md:flex-col max-md:mt-4 wave' id='education'>
      <div className="w-[40%] justify-end max-md:w-full">
<motion.div 
initial={{ opacity:0, x:100 }}
whileInView={{ opacity:1, x:0}}
transition={{
  type: "spring",
  stiffness: 100,
  delay: 0.7,
  damping: 20,
}}
className="w-full">
    <img src='/certification-animate-floorless.svg' alt='' className='w-full h-[300px] mt-[30%] max-md:pt-[42px] max-md:mt-[0px]'/></motion.div>

    <motion.h1 
initial={{ opacity:0, y:100 }}
whileInView={{ opacity:1, y:0}}
transition={{
  type: "spring",
  stiffness: 100,
  delay: 0.5,
  damping: 20,
}}
className="text-center text-4xl font-semibold pt-[10px] pb-[42px] pr-[24px] pl-[24px] md:text-white dark:text-white">Education</motion.h1>

      </div>



      <div className="w-[50%] justify-start max-md:w-full">
      <div className="w-[100%] flexjustify-between items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px] mb-16">
  <div className="flex flex-col gap-7 max-md:flex-col max-md:justify-center max-md:w-full dark:text-white dark:max-sm:text-black">

  <motion.div
  initial={{ opacity:0, x:-100 }}
  whileInView={{ opacity:1, x:0}}
  transition={{
    type: "spring",
    stiffness: 100,
    delay: 0.7,
    damping: 20,
  }}
  className="w-[100%] flex flex-col gap-2 items-center max-md:justify-center max-md:w-full">
    <img src='/nasrda1.png' alt='' className='w-[70px] h-[70px] rounded-full object-cover mb-2.5'></img>
    <h2 className="text-xl font-semibold  text-center">National Space Research and Development Agency</h2>
    <p className='text-sm text-white text-center leading-[30px] text-[16px]'>Engineering Intern</p>
    <p className='text-sm text-dimWhite text-center leading-[14px] text-[14px]'>Graduated 2020</p>
    <p className='text-sm text-dimWhite text-center leading-[30px] text-[16px]'>Graduated with a certification of completion, on the required Engineering courses in space research and development</p>
  </motion.div>

  <motion.div
  initial={{ opacity:0, x:100 }}
  whileInView={{ opacity:1, x:0}}
  transition={{
    type: "spring",
    stiffness: 100,
    delay: 0.7,
    damping: 20,
  }}
  className="flex flex-col gap-2 items-center max-md:justify-center max-md:w-full">
    <img src='/unn1.png' alt='' className='w-[70px] h-[70px] mb-2.5 rounded-full object-cover'></img>
    <h2 className="text-xl font-semibold text-gradient">University of Nigeria, Nsukka</h2>
    <p className='text-sm text-white text-center leading-[30px] text-[16px]'>Bachelor of Engineering</p>
    <p className='text-sm text-dimWhite text-center leading-[14px] text-[14px]'>Graduated 2023</p>
    <p className='text-sm text-dimWhite text-center leading-[30px] text-[16px]'>Graduated with a Bachelor's Degree certificate, on completing the required Engineering courses in Mechanical Engineering </p>
  </motion.div>
</div>

      </div>
</div>
</section>
</Element>
  )
}

export default Education