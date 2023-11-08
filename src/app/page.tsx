import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MovieList from '@/components/MovieList'

const Page = () => {
  return (
    <div className='bg-color-primary gap-4'>
      <Hero />
      <section>
        <Header title='Trending Now' linkHref='/' linkTitle='See All' />
        <MovieList />
      </section>
      <section>
        <Header title='Recommendations' linkHref='/' linkTitle='See All' />
        <MovieList />
      </section>
    </div>
  )
}

export default Page
