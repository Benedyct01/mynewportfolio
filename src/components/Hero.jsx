import React, { Suspense } from 'react'
import { Speech } from './Speech'
import { Canvas } from "@react-three/fiber"
import Shape from './Shape'
import { Link, Element } from 'react-scroll' 


const Hero = () => {
      
  return (
    <>
    <Element name='home'>
         <div className='absolute inset-0 -z-10'>
          <div className="absolute dark:hidden max-md:top-110 top-0 -left-1/4 w-1/2 h-[250px] max-md:h-1/4 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-27"></div>
        </div>
        <div className='container flex flex-row-reverse max-md:flex-col mx-auto mt-5 px-6 py-20 md:py-24'>
  <div className='relative flex  w-[50%] max-md:w-[100%] justify-center items-center mx-auto max-md:top-[100px]'>
    <div className="absolute z-[-10] overflow-clipz">
      <Canvas style={{ width: '400px', height: '450px' }}>
        <Suspense fallback="loading...">
          <Shape />
        </Suspense>
      </Canvas>
    </div>
    <div className="heroImg absolute z-10">
      <img src="/me.png" alt="Your Image" className='w-[300px] h-[350px]' />
    </div>
  </div>
  <div className='flex flex-col gap-8 lg:gap-12 xl:gap-16 max-md:mt-[300px]'>
    <div className='flex flex-col space-y-6 lg:space-y-7'>
      <div className="flex flex-row items-center max-sm:mx-auto">
                  <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2'>Hi!</span>
                  <h2 className='inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-semibold text-[11px] sm:text-sm backdrop-blur-sm border border-neutral-800/50'>
                  <i className='bx bx-globe mr-1'></i>Web Developer/Research Writer</h2>
                </div>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
                  <Speech />
                </h1>
                <p className='text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light tracking-tight'>I believe great websites are more than just code on a screen. They are experiences that connect people and ideas. With a focus on clean development, thoughtful design, and seamless performance, I specialize in building better systems, products and futures that bring visions to life.</p>
                <div className='flex gap-3 items-center'>
                  <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12">
                  </div>
                    <p className='uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium'>Osinachi Ekwueme</p>
                </div>
                <div className="flex flex-row  gap-3 lg:gap-4">
                <Link
                to='projectsmobile'
                smooth={true} 
                  spy={true} 
                  duration={500}
                 className='md:hidden'><button className='px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/50 dark:hover:shadow-amber-500/20 flex items-center transiiton group cursor-pointer'>
                <i className='bx bx-code-alt mr-2 min-[400px]:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform '></i>
                <span className='max-lg:text-sm'>Projects</span></button></Link>
                <Link
                to='proj'
                smooth={true} 
                  spy={true}
                  offset={144} 
                  duration={500}
                className='max-md:hidden'><button className='px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/50 dark:hover:shadow-amber-500/20 flex items-center transiiton group cursor-pointer'>
                <i className='bx bx-code-alt mr-2 min-[400px]:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform '></i>
                <span className='max-lg:text-sm'>Projects</span></button></Link>
                <a href="https://drive.google.com/file/d/1QAGl-XrNEmokdlboh3K_WD5pfFm3Ce58/view?usp=drivesdk" download="Osinachi's_CV" target='_blank'><button className='px-3 min-[400px]:px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white  font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:bg-neutral-700 text-neutral-800 flex items-center transiiton group border border-neutral-300 dark:border-neutral-700 cursor-pointer'>
                <i className='bx bx-book-open mr-2 min-[400px]:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100  opacity-transform'></i>
                <span className='max-lg:text-sm'>Curriculum Vitae</span></button></a>
              </div>
      </div>
      </div>
      {/* <div className="hidden md:block fixed bottom-8 left-8 lg:bottom-10 animate-bounce">
          <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xs lg:text-sm flex items-center shadow-lg">
            <i className='bx bx-check-circle mr-1 text-amber-500 '></i>Responsive
          </div>
        </div> */}
        <div className=" absolute top-25 right-[10%] sm:right-[15%] lg:right-[20%] animate-bounce delay-300">
          <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xs lg:text-sm flex items-center shadow-lg dark:bg-white dark:text-neutral-900 md:mt-10">
            <i className='bx bx-check-circle mr-1 text-amber-500 '></i>Accessible
          </div>
        </div>
        </div>
        </Element>    
    </>
  )
}

export default Hero