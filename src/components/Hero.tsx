'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Link from 'next/link'

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
  ]
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className='flex items-center justify-center h-full md:h-96 mb-10 rounded-xl mt-4 mx-5 bg-cover bg-center'
            style={{ backgroundImage: `url('${banner.imageUrl}')` }}
          >
            <div className='text-white text-center p-4 md:p-8'>
              <p className='text-md md:text-lg lg:text-xl font-bold uppercase'>
                {banner.title}
              </p>
              <p className='text-xl md:text-2xl lg:text-4xl font-bold my-4 md:my-6'>
                {banner.subtitle}
              </p>
              <Link
                href='/'
                className='inline-block bg-red-500 py-2 md:py-3 px-4 md:px-6 text-xs md:text-sm font-bold uppercase rounded hover:bg-red-600 transition duration-150 ease-in-out'
              >
                Explore Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero
