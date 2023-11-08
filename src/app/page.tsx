import Hero from '@/components/Hero'
import MovieList from '@/components/MovieList'

const Page = () => {
  return (
    <div className='bg-color-primary'>
      <Hero />
      <section>
        <h2 className='text-xl font-bold text-white'>Top Movie</h2>
        <MovieList />
      </section>
      <section className='mt-4'>
        <h2 className='text-xl font-bold text-white'>Recommendation Movie</h2>
        <MovieList />
      </section>
    </div>
  )
}

export default Page
