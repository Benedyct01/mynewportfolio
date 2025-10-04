import React from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup';

const StatInfoCard = ({count, label, style}) => {
      const {ref, inView} = useInView({
            triggerOnce: true,
            threshold: 0.8,
      });
  return (
    <div 
    ref={ref}
    className='flex gap-3 md:gap-5 bg-amber-500 rounded-[14px] p-5 md:p-2 m-2 mx-auto max-sm:mb-2 w-full'>
      <h4 className={`text-4xl md:text-xl lg:text-3xl font-bold text-white dark:text-[#310e3a] p-2 max-sm:pl-4 ${style || ""}`}>{inView ? (
          <CountUp end={parseInt(count)} duration={5} />
        ) : (
          count // Fallback to static count if not in view
        )}</h4>
      <p className='text-sm md:text-[14px] max-sm:pl-2  text-[#310e3a] mt-2 font-semibold leading-6 md:whitespace-pre-line'>{label}</p>
    </div>
  )
}

export default StatInfoCard