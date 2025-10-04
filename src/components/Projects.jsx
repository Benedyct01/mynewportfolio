import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { slides } from '../data'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef();
  const panel = useRef([]);

  panel.current = [];
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume reverse",
        scroller: container.current,
      });

      gsap.utils.toArray(panel.current).forEach((panel, index) => {
        gsap.to(panel, {
          backgroundPosition: "-100px",
          duration: 3,
          scrollTrigger: {
            trigger: panel,
            toggleActions: "play reverse play reverse",
          },
        });
        gsap.to(`.bullet-${index + 1}`, {
          scale: 1.4,
          scrollTrigger: {
            trigger: panel,
            toggleActions: "play reverse play reverse",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  // Scroll to top when the container is in view
  useEffect(() => {
    if (!container.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            window.scrollTo({
              top: entry.target.offsetTop,
              behavior: 'smooth',
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  
  const addToRef = (el) => {
    if (el && !panel.current.includes(el)) {
      panel.current.push(el);
    }
  };
  return (
    <>
    <Element>
    <div ref={container} className=" bg-[#f2f2f2] dark:bg-[#000000] projectscontainer">
      <div className='fixed flex flex-col gap-12 items-center justify-center h-screen max-lg:w-[8%] w-[10%] max-sm:hidden'>
        {slides.map((bullet, index) => (
          <img
            key={index}
            src={bullet.img}
            className={`bullet-${index + 1} w-10 max-xl:w-6 max-xl:h-6 h-10 rounded-full object-cover`}
          />
        ))}
      </div>
      {slides.map((slide, idx) => (
        <section
          key={idx}
          className="h-screen flex max-sm:flex-row snap-start"
        >
          <div className="w-[35%] max-lg:w-[50%]">
            <div className="flex leading-8 flex-col pl-20 xl:pl-25 justify-center h-full">
              <h2 className={`${slide.color} text-[1.5rem] max-sm:text-base font-light`}>{slide.category}</h2>
              <h1 className='text-[2rem] font-semibold max-sm:text-base whitespace-pre dark:text-amber-500'>{slide.name}</h1>
              <p className='text-[1rem] max-sm:text-sm dark:text-white'>{slide.detail}</p>
              <a href={slide.link} target='_blank'><motion.button
                  initial={{ opacity:0, y:-50 }}
                  whileInView={{ opacity:1, y:0}}
                  transition={{
                    
                    stiffness: 20,
                    delay: 0.2,
                    damping: 12,  //for smooth animation
                  }}
                  className='mt-3 bg-amber-500 hover:bg-amber-600 cursor-pointer text-black px-5 py-1 flex flex-row flex-items-center justify-center'>Explore Link</motion.button></a>
            </div>
          </div>
          <div className="w-[65%] max-lg:w-[50%]">
            <div
              ref={addToRef}
              className='mask'
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition:"90% 100%",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </section>
      ))}
    </div>
    </Element>
    </>
  );
};

export default Projects;