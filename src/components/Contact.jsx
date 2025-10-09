import React from 'react';
import { motion} from 'framer-motion';
import { ContactUs } from './ContactUs';
import { Element } from 'react-scroll';

const Contact = () => {
    return (
        <>
        <Element name='contact'>
        <section className='w-full' id='contact'>
    <div className="flex justify-between w-full items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px] gap-5 max-md:flex-col">
<motion.div 
initial={{ opacity:0, x:-100 }}
whileInView={{ opacity:1, x:0}}
transition={{
  type: "spring",
  stiffness: 100,
  delay: 0.2,
  damping: 20,
}}
className="flex flex-col w-[50%] max-md:w-full">
  <h1 className="text-start text-3xl font-semibold pb-[24px] m-auto text-black dark:text-white">Let's Work Together</h1>
  <p className='mb-7 text-black dark:text-white'>Reach out to me, for any enquiries or requests. I am available to process your needs. You may do so, on the social media apps, or simply send an email.</p>
  <div className="flex flex-row justify-center gap-3 items-center w-full max-md:flex-col">
  <motion.img 
    initial={{ opacity: 0, x:100 }}
    whileInView={{ opacity:1, x: 0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
    src="/me.jpeg" alt="" className='w-[100px] justify-end h-[100px] rounded-full object-cover' />
<a href="https://drive.google.com/file/d/1QAGl-XrNEmokdlboh3K_WD5pfFm3Ce58/view?usp=drivesdk" download="Osinachi's_CV" target='_blank'><motion.button
    initial={{ opacity:0, y:-100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20, //for smooth animation
    }}
    className='bg-amber-500 hover:bg-amber-600 cursor-pointer text-black px-5 py-1 justify-start rounded-full'>Download CV</motion.button></a>
</div>
  <motion.div
  initial={{ opacity: 0, scale:0 }}
  whileInView={{ opacity:1, scale: 1}}
  transition={{
    type: "spring",
    stiffness: 100,
    delay: 0.7,
    damping: 20,
  }}
  className="flex justify-center items-center mt-5 gap-5">
    <a href='https://wa.me/2348104697466' target="_blank" rel="noopener noreferrer"><img src="/whatsapp.svg" alt="" className='w-[10px]h-[10px] not-dark:invert-100' /></a>
    <a href='https://www.facebook.com/share/18fu79FPDJ/?mibextid=wwXIfr' target="_blank" rel="noopener noreferrer"><img src="/facebook-f.svg" alt="" className='w-[20px]h-[20px] not-dark:invert-100' /></a>
    <a href='https://www.instagram.com/sinabenedict?igsh=MTVkeXV3NWEwdDdreA%3D%3D&utm_source=qr'target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="" className='w-[20px]h-[20px] not-dark:invert-100' /></a>
    <a href='http://linkedin.com/in/osinachi-ekwueme-b38453184'target="_blank" rel="noopener noreferrer"><img src="/linkedin.svg" alt="" className='w-[20px]h-[20px] not-dark:invert-100' /></a>
    <a href='https://x.com/consort_28686?s=21' target="_blank" rel="noopener noreferrer"><img src="/twitter.svg" alt="" className='w-[20px]h-[20px] not-dark:invert-100'/></a>
  </motion.div>
</motion.div>

<motion.div 
initial={{ opacity:0, x:100 }}
whileInView={{ opacity:1, x:0}}
transition={{
  type: "spring",
  stiffness: 100,
  delay: 0.2,
  damping: 20,
}}
className="flex flex-col w-[50%] gap-5 items-start justify-start max-md:w-full">
  <ContactUs />
</motion.div>
</div>
    </section>
    </Element>
        </>
    )
}

export default Contact