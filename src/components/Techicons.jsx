import React from 'react';
import { motion} from 'framer-motion';

const Techicons = () => {
    return (
        <>
        <section className="flex gap-20 items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] justify-center max-sm:pr-1 max-sm:pl-1 max-sm:gap-1 max-sm:justify-between md:mt-10">
    <motion.img 
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.8,
      damping: 20,
    }}
    src="/html.png" alt="" className='w-12 max-sm:w-10'/>
    <motion.img 
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.9,
      damping: 20,
    }}
    src="/css3.png" alt="" className='w-11 max-sm:w-10'/>
    <motion.img 
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.10,
      damping: 20,
    }}
    src="/js.png" alt="" className='w-10 max-sm:w-9'/>
    <motion.img 
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.11,
      damping: 20,
    }}
    src="/vsstudio.png" alt="" className='w-10 max-sm:w-6'/>
    <motion.img 
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
    src="/github.png" alt="" className='w-10 max-sm:w-9'/>
  </section>
        </>
    )
}

export default Techicons