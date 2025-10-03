import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { slides } from '../data';

const Projectsmobile = () => {
    return (
        <>
        <Element name='projects'>
        <section className='md:hidden w-full' id='projects'>
            <motion.h1 
initial={{ opacity:0, y:100 }}
whileInView={{ opacity:1, y:0}}
transition={{
  type: "spring",
  stiffness: 100,
  delay: 0.2,
  damping: 20,
}}
className="text-center text-4xl font-semibold pt-[42px] pb-[42px] pr-[24px] pl-[24px] mt-5 text-black dark:text-white">My Recent Projects</motion.h1>

<div className="w-full gap-10 grid grid-cols-1 pb-[42px] pr-[24px] pl-[24px]">
{slides.map((slide, idx) => (
<motion.div 
initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, delay: 0.1 }}
      key={idx}
 className="flex justify-center items-center gap-5 w-full flex-col border-2 border-amber-500 p-5 rounded-2xl hover:border-amber-600">
    <img src={slide.img} alt='' className='w-full hover:scale-105 hover:translate-y-1 transition-transform duration-300 ease-out rounded-2xl'/>
    <div className="flex items-start justify-center gap-2 flex-col">
      <h2 className="text-xl text-gradient font-semibold">{slide.name}
     </h2>
      <p className="text-sm text-black dark:text-white">{slide.detail}</p>
    </div>
    <a href={slide.link} target='_blank'><motion.button
                      initial={{ opacity:0, y:-50 }}
                      whileInView={{ opacity:1, y:0}}
                      transition={{
                        
                        stiffness: 50,
                        delay: 0.5,
                        damping: 15,  //for smooth animation
                      }}
                      className='mt-3 bg-amber-500 cursor-pointer text-black px-5 py-1 flex flex-row flex-items-center justify-center rounded-sm'>Explore Link</motion.button></a>
</motion.div>
))}
</div>
        </section>
        </Element>
        </>
    )
}

export default Projectsmobile