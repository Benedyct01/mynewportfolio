import React from 'react'
import { motion } from 'motion/react'
import { experiences } from '../data'
import { Element } from 'react-scroll'

const Experience = () => {
  return (
    <>
    <Element name='experience'>
    <section className='w-full' id='experience'>
    <motion.h1 
initial={{ opacity:0, y:100 }}
whileInView={{ opacity:1, y:0}}
transition={{
  type: "spring",
  stiffness: 100,
  delay: 0.5,
  damping: 20,
}}
className="text-center text-4xl font-semibold pt-[42px] md:pb-[42px] pr-[24px] pl-[24px] mt-5 text-black dark:text-white">Work Experience</motion.h1>





<div className="container px-2 py-10 mx-auto mb-8 md:mt-3">
        <div className="grid grid-cols-1 gap-8  md:grid-cols-2 p-5 lg:px-15">
          {experiences.map((experience, idx) => (
        <motion.div
      className="px-4 sm:px-6 lg:px-12 py-8 transition-colors duration-[1000ms] ease-in-out transform border-2 dark:border border-amber-500 rounded-xl group dark:border-gray-200 dark:feature-card feature-card-light hover:border-amber-600 min-h-[300px]"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.75, delay: 0.1 }}
      key={idx}
    >
      
      <div className="flex flex-col sm:-mx-4  sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={experience.logo}
          alt=""
        />

          <h1 className=" mt-4 sm:mx-4 sm:mt-0text-xl dark:text-white font-semibold font-poppins capitalize md:text-2xl transition-colors duration-[1000ms] ease-in-out dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#fbbf24] dark:group-hover:to-[#f59e0b] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:webkit group-hover:bg-gradient-to-r group-hover:from-[#42164d] group-hover:to-[#2c2923] group-hover:text-transparent group-hover:bg-clip-text group-hover:webkit">
            {experience.company}
          </h1>
                </div>

            <h3 className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-white transition-colors duration-[1000ms] ease-in-out">{experience.position}</h3>
          <p className="text-sm font-poppins font-normal dark:text-gray-500 mt-3 group-hover:text-gray-400 transition-colors duration-[1000ms] ease-in-out">
            {experience.duration}
          </p>

      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-white group-hover:font-light font-poppins transition-colors duration-[1000ms] ease-in-out">
      {experience.p1} <br></br>
      {experience.p2} <br></br>
      {experience.p3}
      </p>
    </motion.div>
))}
        </div>
      </div>
    </section>
    </Element>
    </>
  )
}

export default Experience