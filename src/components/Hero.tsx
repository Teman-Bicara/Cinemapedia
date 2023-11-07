'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const Hero = () => {
  const banners = [
    {
      title: 'Summer Blockbusters 2023',
      subtitle: 'Catch the latest movies this season',
      imageUrl: 'https://picsum.photos/1920/1080',
      alt: 'Banner 1',
    },
    {
      title: 'Critically Acclaimed Films',
      subtitle: 'Explore award-winning masterpieces',
      imageUrl: 'https://picsum.photos/1920/1080',
      alt: 'Banner 2',
    },
    // Add more banner objects as needed
  ]
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true} // Enable looping
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className='h-96 flex items-center justify-center mb-10'
            style={{
              backgroundImage: `url('${banner.imageUrl}')`,
              backgroundSize: 'cover',
            }}
          >
            <div className='text-white text-center'>
              <p className='text-lg md:text-xl font-bold uppercase'>
                {banner.title}
              </p>
              <p className='text-3xl md:text-5xl font-bold my-6'>
                {banner.subtitle}
              </p>
              <a
                href='#'
                className='bg-red-500 py-4 px-8 text-sm font-bold uppercase rounded hover:bg-red-600 transition duration-150 ease-in-out'
              >
                Explore Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero
