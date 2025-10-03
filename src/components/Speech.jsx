import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';

export const Speech = () => {
      const [isElementVisible, setIsElementVisible] = useState(false);
      const { ref, inView } = useInView({
            threshold: 0.2,
            triggerOnce: true,
      });
      useEffect(()=> {
            setIsElementVisible(inView)
}, [inView]);
  return (
      <div ref={ref}>
{isElementVisible && (
      <>
    <TypeAnimation
      sequence={[
        1000,
        'Building',
        1000, 
        
      ]}
      wrapper="span"
      speed={30}
      cursor={false}
      style={{ display: 'block', marginBottom: '4px'}}
      repeat={Infinity}
    />

<TypeAnimation
          sequence={[
            1500,
            'Web Experiences',
            1000,
            'Web Interfaces',
            1000,
            'Web Solutions',
            1000,
          ]}
          wrapper="span"
          speed={20}
          cursor={false}
          style={{ display: 'block', background: 'linear-gradient(to right, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
          repeat={Infinity}
        />
        </>
      )}
    </div>
  );
};


