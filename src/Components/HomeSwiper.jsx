'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Navigation,EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { faL } from '@fortawesome/free-solid-svg-icons';
import img_1 from '../../public/Images/clean_img.jpg'
import img_2 from '../../public/Images/img_2.jpg'
import Image from 'next/image';

const HomeSwiper = () => {
  return (
    <div className=''>
      <Swiper
        // autoplay = {{
        //   delay: 3500,
        //   // disableOnInteraction: false
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop
        className=" h-[508px] w-full"
      >
        <SwiperSlide className=''>
          <Image src={img_1} className=' lg:object-cover w-full lg:aspect-video lg:h-screen'></Image>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSwiper
