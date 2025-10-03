import React from 'react'
import Header from './Header'
import Skyscraper from '/public/Skyscraper.jpg'
import Skyscraperdark from '/public/Skyscraperdark.png'
import { Speech, Speech1 } from './Speech'


const Hero = () => {
  
 
  return (
    <>
    
      {/* <img  className="image not-dark:hidden" style={{
          backgroundImage: `url(${Skyscraperdark})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
          backgroundPosition: '40% 40%',
        }}/>
        <img className="hsection perspective dark:hidden" style={{
          backgroundImage: `url(${Skyscraper})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
          backgroundPosition: 'center center',
        }}/> */}
        
        
      <div className='isolate'>
         <div className='absolute inset-0 -z-10'>
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-25"></div>
        </div>
        </div> 
        <div className="flex flex-row container mx-auto mt-5 px-6 py-20 md:py-24 lg:py-28 xl:py-32">
          <div className="flex  md:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="flex flex-col space-y-6 lg:space-y-7">
              <div className="space-y-4 lg:space-y-5">
                <div className="flex flex-row items-center">
                  <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2'>NEW</span>
                  <h2 className='inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50'>
                  <i className='bx bx-trending-up mr-1'></i>Next Generation Design System</h2>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
                  <Speech />
                  <Speech1 />
                </h1>
                <p className='text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum libero.</p>
                <div className='flex gap-3 items-center'>
                  <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12">
                  </div>
                    <p className='uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium'>Transition seamlessly</p>
                </div>
              </div>
              <div className="flex flex-row  gap-3 lg:gap-4">
                <button className='px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/50 dark:hover:shadow-amber-500/20 flex items-center transiiton group'>
                <i className='bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform '></i>
                <span className='max-lg:text-sm'>Start Coding</span></button>
                <button className='px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white  font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:bg-neutral-700 text-neutral-800 flex items-center transiiton group border border-neutral-300 dark:border-neutral-700'>
                <i className='bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100  opacity-transform'></i>
                <span className='max-lg:text-sm'>Documentation</span></button>
              </div>
            </div>
            <div className='flex justify-center items-center mx-auto'>
              <div className="heroImg">
                <img src="/me.png" alt="" className='w-[300px] h-[300px]' />
              </div>
              </div>
            <div className="flex-1 w-full justify-end">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-indigo-900 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between mb-3 lg:mb-4">
                    <div className="flex items-center gap-2">
                      <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500'></span>
                      <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500'></span>
                      <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500'></span>
                  </div>
                  <div className='text-xs text-neutral-500 dark:text-neutral-400 '>dark-mode.jsx</div>
                    </div>
                  <div className="h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                    <img src="Skyscraper.jpg" alt="house" className='w-full h-full object-cover object-left-top dark:hidden' />
                    <img src="Skyscraperdark.png" alt="house" className='w-full h-full object-cover bg-center object-left-top dark:block' />
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-amber-500 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse"><i className='bx bx-brightness-half text-xl lg:text-2xl'></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-8 left-8 lg:bottom-10 animate-bounce">
          <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xs lg:text-sm flex items-center shadow-lg">
            <i className='bx bx-check-circle mr-1 text-amber-500 '></i>Responsive
          </div>
        </div>
        <div className="hidden md:block absolute top-25 right-[15%] lg:right-[20%] animate-bounce delay-300">
          <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xs lg:text-sm flex items-center shadow-lg">
            <i className='bx bx-check-circle mr-1 text-amber-500 '></i>Accessible
          </div>
        </div>
      
      <p>dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum dolor sit amet consectetur adipisicing elit. Dolor, dolore. Non porro, dolorum ipsam fugit explicabo at quia praesentium deserunt suscipit consectetur eligendi quibusdam velit. Corporis facere dolorem rerum </p>
    
    </>

  )
}

export default Hero