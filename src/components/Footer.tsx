import { playfair } from '@/app/fonts'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-3 bg-black text-white'>
        <div className='w-4/5 mx-auto flex justify-between items-center'>
          <h1 className={`${playfair.className} text-xl`}> CookBook</h1>
          <p>&copy;2024</p>
        </div>
    </div>
  )
}

export default Footer