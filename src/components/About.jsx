import React from 'react'
import { motion } from "motion/react";
import { Element } from 'react-scroll'
const About = () => {
  return (
    <>
    <Element name='about'>
    <section id='about'>
<div className="w-[100%] lg:w-[50%] mx-auto pr-5 pl-5 flex justify-center items-center gap-2 pt-[64px] pb-[64px] max-md:!items-center max-md:!justify-center max-md:!flex-col text-center max-md:!w-full">
  
  <div className="flex flex-col gap-10 items-center justify-center w-[100%] max-md:w-full">
    <motion.h2
    initial={{ opacity:0, x:-100 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
    className="text-xl font-semibold text-center text-black dark:text-white">Get to know me</motion.h2>
    <motion.h1
    initial={{ opacity:0, x:100 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
     className="text-5xl font-semibold w-full text-center dark:text-white">Osinachi Ekwueme</motion.h1>
    <motion.p
    initial={{ opacity:0, y:-100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.6,
      damping: 20,
    }}
    className="text-sm text-center text-black dark:text-white">Versatile and results-driven professional with experience spanning research, data analysis,
    software & web development, digital marketing, and engineering. Skilled in facilitating
    technology education, and analyzing business data for strategic decision-making. Adept at
    web development, fintech solutions, and market strategy, with a strong background in digital
    transformation for businesses.</motion.p>
    <a href="https://drive.google.com/file/d/1QAGl-XrNEmokdlboh3K_WD5pfFm3Ce58/view?usp=drivesdk" download="Osinachi's_CV" target='_blank'><motion.button
    initial={{ opacity:0, y:-100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,  //for smooth animation
    }}
    className='bg-amber-500 hover:bg-amber-600 cursor-pointer text-black p-4 w-[150px] h-[55px] flex flex-row flex-items-center justify-center'>Download CV</motion.button></a>
  </div>

</div>
    </section>
    </Element>
    </>
  )
}

export default About