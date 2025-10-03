import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const GsapTest = () => {
  const container = useRef();
  const panel = useRef([]);
  panel.current = [];

  const slides = [
    { title: "Day 1", place: "NAYAPAUL", color: "text-red-600", img: "/Skyscraper.jpg" },
    { title: "Day 2", place: "GHOREPANI", color: "text-[#e9ab32]", img: "/skyscrapper2.jpg" },
    { title: "Day 3", place: "POONHILL", color: "text-[#598fe1]", img: "/skyscrapper3.jpg" },
  ];

  const addToRef = (el) => {
    if (el && !panel.current.includes(el)) {
      panel.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume reverse",
        scroller: container.current,
      });

      panel.current.forEach((panelEl, index) => {
        // Pin the section until it's fully in view
        ScrollTrigger.create({
          trigger: panelEl.parentElement.parentElement, // section element
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          onLeave: () => {
            // Start GSAP animation when pinning ends (section is fully scrolled)
            gsap.to(panelEl, {
              backgroundPosition: "-100px",
              duration: 3,
            });
            gsap.to(`.bullet-${index + 1}`, {
              scale: 1.8,
              duration: 1,
            });
          },
          onEnterBack: () => {
            // Optionally reverse animation when scrolling back up
            gsap.to(panelEl, {
              backgroundPosition: "center",
              duration: 3,
            });
            gsap.to(`.bullet-${index + 1}`, {
              scale: 1,
              duration: 1,
            });
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="bg-[#f2f2f2] dark:bg-[#000000] projectscontainer">
      <div className='fixed flex flex-col gap-12 items-center justify-center h-screen w-[10%]'>
        {slides.map((bullet, index) => (
          <img
            key={bullet.title}
            src={bullet.img}
            className={`bullet-${index + 1} w-12 h-12 rounded-full object-cover`}
            alt=""
          />
        ))}
      </div>
      {slides.map((slide) => (
        <section
          key={slide.title}
          className="h-screen flex snap-start"
        >
          <div className="w-[35%]">
            <div className="flex leading-8 flex-col items-center justify-center h-full">
              <h2 className={`${slide.color} text-[1.5rem] font-bold`}>{slide.title}</h2>
              <h1 className='text-[2rem]'>{slide.place}</h1>
            </div>
          </div>
          <div className="w-[65%]">
            <div
              ref={addToRef}
              className='mask'
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default GsapTest;