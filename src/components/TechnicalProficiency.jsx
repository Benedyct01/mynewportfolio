import React from 'react'
import StatInfoCard from './StatInfoCard'
import { STATS } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode, } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import img1 from '/blink.png'
import img2 from '/mvpstudio.png'
import img3 from '/thrivewell.png'
import img4 from '/nextgen.png'
import img5 from '/wish.png'

const TechnicalProficiency = () => {
  return (
    <>
    <section className='flex flex-row w-full px-10 md:px-3 md:gap-5'>
    <div className='flex flex-col sm:flex-row md:flex-col w-full md:w-[20%] gap-5 mt-3 md:mt-2'>
      {STATS.map((stat) => (
            <StatInfoCard key={stat.id} count={stat.count} label={stat.label} style={stat.style} />
      ))}
    </div>
    <div className="flex-1 lg:w-[100%] max-md:hidden">
      <Swiper

      style={{
        '--swiper-navigation-size':'19px',
        '--swiper-navigation-color':'bg-neutral-300',
        
        
      }}

        slidesPerView={'auto'}
        spaceBetween={30}
        autoplay={true}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='rounded-4xl bg-white'>
          <img style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          borderRadius: '32px',
        }}/>
        </SwiperSlide>
        <SwiperSlide className='rounded-4xl'>
          <img style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          borderRadius: '32px',
        }}/>
        </SwiperSlide>
        <SwiperSlide className='rounded-4xl'>
          <img style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          borderRadius: '32px',
        }}/>
        </SwiperSlide>
        <SwiperSlide className='rounded-4xl'>
          <img style={{
          backgroundImage: `url(${img4})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          borderRadius: '32px',
        }}/>
        </SwiperSlide>
        <SwiperSlide className='rounded-4xl'>
          <img style={{
          backgroundImage: `url(${img5})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          borderRadius: '32px',
        }}/>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
    </>
  )
}

export default TechnicalProficiency