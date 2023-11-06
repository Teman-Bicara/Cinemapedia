'use client'
import Link from 'next/link'
import InputSearch from './InputSearch'
import {
  List,
  House,
  MagnifyingGlass,
  User,
  Heart,
} from '@phosphor-icons/react'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <nav className='bg-color-secondary px-4 py-2'>
      {/* topbar */}
      <div className='hidden md:flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <Link href='/' className='text-white hover:text-color-accent'>
            Cinemapedia
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link href='/' className='text-white hover:text-color-accent'>
            Home
          </Link>
          <Link href='/favorite' className='text-white hover:text-color-accent'>
            Favorite
          </Link>
          <Link href='/about' className='text-white hover:text-color-accent'>
            About
          </Link>

          <InputSearch />

          <Link
            href='/auth/login'
            className='text-color-accent hover:opacity-80 border border-color-accent py-2 px-4 rounded-full'
          >
            Login
          </Link>
          <Link
            href='/auth/register'
            className='bg-color-accent text-color-primary hover:opacity-80 py-2 px-4 rounded-full'
          >
            Register
          </Link>
        </div>
      </div>
      {/* bottombar */}
      <div className='fixed inset-x-0 bottom-0 bg-color-secondary p-2 md:hidden block'>
        <div className='flex justify-around items-center'>
          <Link
            href='/'
            className='text-white hover:text-color-accent flex flex-col items-center'
          >
            <House size={32} />
            <span>Home</span>
          </Link>
          <Link
            href='/about'
            className='text-white hover:text-color-accent flex flex-col items-center'
          >
            <MagnifyingGlass size={32} />
            <span>Search</span>
          </Link>
          <Link
            href='/favorite'
            className='text-white hover:text-color-accent flex flex-col items-center'
          >
            <Heart size={32} />
            <span>Favorite</span>
          </Link>
          <Link
            href='/auth/register'
            className='text-white hover:text-color-accent flex flex-col items-center'
          >
            <User size={32} />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
