'use client'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'

const MovieList = () => {
  const movies = [
    {
      title: 'Eternal Voyagers',
      id: 1,
      description:
        'A group of astronauts embarks on a perilous mission to explore the outer reaches of the galaxy.',
      rating: 8.5,
    },
    {
      title: 'The Last Alchemist',
      id: 2,
      description:
        'In a world losing hope, one alchemist discovers the secret to eternal life.',
      rating: 7.9,
    },
    {
      title: 'Whispers in the Dark',
      id: 3,
      description:
        'A suspenseful tale of a detective whose life changes after answering a mysterious phone call.',
      rating: 7.2,
    },
    {
      title: 'Rise of the Phoenix',
      id: 4,
      description: "A warrior's journey to bring peace to her war-torn land.",
      rating: 8.8,
    },
    {
      title: 'Beneath the Blue',
      id: 5,
      description:
        'An oceanographer discovers an underwater civilization on the brink of collapse.',
      rating: 7.6,
    },
    {
      title: 'Shadows of Yesterday',
      id: 6,
      description:
        'A historical drama that weaves through the intricacies of time.',
      rating: 7.4,
    },
    {
      title: 'Quantum Threads',
      id: 7,
      description:
        'A scientist creates a device that intertwines parallel universes, with unexpected consequences.',
      rating: 8.3,
    },
    {
      title: "The Artist's Vision",
      id: 8,
      description:
        'The life of a misunderstood painter who changed the art world forever.',
      rating: 7.5,
    },
    {
      title: 'Echoes of Silence',
      id: 9,
      description:
        'A silent film star struggles to find her voice in a newly talking-film industry.',
      rating: 8.1,
    },
    {
      title: 'Cybernetic Heart',
      id: 10,
      description:
        'In a tech-dominated future, a robot learns what it means to feel human emotions.',
      rating: 8.0,
    },
  ]

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link
            href={`/movie/${movie.id}`}
            className='flex flex-col items-center mb-10 p-4 hover:scale-[1.05] hover:transition-all'
          >
            <Image
              src='https://placehold.co/100x100.png'
              alt='Movie poster'
              width={100}
              height={100}
              className='w-full h-auto'
            />
            <div className='text-center mt-2'>
              <h3 className='text-md font-bold text-white hover:text-color-accent'>
                {movie.title}
              </h3>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MovieList
