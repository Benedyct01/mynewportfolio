import React from 'react'
const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        scroller: container.current,
      });

      gsap.timeline ({
            scrollTrigger: {
      trigger: "container",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    },
        .to(".image-container img", {
      scale: 2,
      z: 250,
      transformOrigin: "center center",
     })
      .to(
        ".section.hero-section",
        {
          scale: 1.4,
          boxShadow: `100000px 0 0 0 rgba(0,0,0,0.5) inset`,
          transformOrigin: "center center",
        },
        "<"
      )
    .to(".image-container", {
      autoAlpha: 0,
    })
     .to([".section.hero-section", ".intro"], {
      height: 400,
     })
     .to(".about-section", {
      autoAlpha: 1,
     });
      });
    });
    return () => ctx.revert();
  }, []);

  

const Gsaptest2 = () => {
  return (
    <div>Gsaptest2</div>
  )
}

export default Gsaptest2