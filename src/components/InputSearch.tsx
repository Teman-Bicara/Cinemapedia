'use client'
import { MagnifyingGlass } from '@phosphor-icons/react'

const InputSearch = () => {
  return (
    <div className='relative text-color-primary'>
      <input
        type='text'
        className='border border-gray-300 p-2 pl-8 rounded-full'
        placeholder='Search'
      />
      <button className='absolute top-1 end-2'>
        <MagnifyingGlass size={32} />
      </button>
    </div>
  )
}

export default InputSearch
