import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  linkHref?: string
  linkTitle?: string
}
const Header: React.FC<Props> = ({ title, linkHref, linkTitle }) => {
  return (
    <div
      className='flex justify-between items-center
      p-4'
    >
      <h1 className='text-2xl font-bold text-color-accent'>{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className='md:text-xl text-sm underline hover:text-color-accent text-white hover:transition-all cursor-pointer text-secondary'
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}

export default Header
