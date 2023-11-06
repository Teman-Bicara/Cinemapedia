'use client'
import Link from 'next/link'
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  TiktokLogo,
  GooglePlayLogo,
  AppleLogo,
} from '@phosphor-icons/react'

const Footer = () => {
  return (
    <footer className='w-screen bg-color-primary text-white'>
      <div className='max-w-6xl mx-auto px-4 py-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h5 className='text-lg font-bold mb-2'>Help Center</h5>
            <ul className='space-y-1'>
              <li>
                <Link href='#' className='hover:text-color-accent'>
                  About Cinemapedia
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-color-accent'>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-color-accent'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-color-accent'>
                  Suggestions & Critics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className='text-lg font-bold mb-2'>Newsletter</h5>
            <p className='mb-3'>
              If you want to stay connected with us, fill in your email below
            </p>
            <div className='flex flex-wrap space-x-2'>
              <input
                type='email'
                placeholder='Email'
                className='p-2 rounded-xl text-black flex-1 min-w-0'
              />
              <button className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl'>
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h5 className='text-lg font-bold mb-2'>Follow us on</h5>
            <div className='flex space-x-2'>
              <Link href='#' className='hover:text-color-accent'>
                <InstagramLogo size={32} />
              </Link>
              <Link href='#' className='hover:text-color-accent'>
                <FacebookLogo size={32} />
              </Link>
              <Link href='#' className='hover:text-color-accent'>
                <TwitterLogo size={32} />
              </Link>
              <Link href='#' className='hover:text-color-accent'>
                <TiktokLogo size={32} />
              </Link>
            </div>
          </div>

          <div>
            <h5 className='text-lg font-bold mb-2'>Bioskop Online Apps</h5>
            <div className='flex space-x-2 gap-4'>
              <Link
                href='#'
                className='hover:text-color-accent flex flex-row items-center gap-2'
              >
                <GooglePlayLogo size={32} />
                <span>Google Play</span>
              </Link>
              <Link
                href='#'
                className='hover:text-color-accent flex flex-row items-center gap-2'
              >
                <AppleLogo size={32} />
                <span>App Store</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='text-center text-sm mt-8 md:mt-16'>
          <p>
            © 2023 Cinemapedia and all related companies. Copyright is protected
            by law.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
