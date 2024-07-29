import Image from 'next/image'
import React from 'react'
import { playfair } from '@/app/fonts'
import Link from 'next/link'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='py-5 bg-yellow-100 px-7'>
      <div className='mx-auto flex flex-col md:flex-row md:w-4/5'>
        <div className='flex flex-col flex-1 justify-center gap-4 text-center md:text-left'>
          <h1 className={`text-6xl xl:text-7xl ${playfair.className} font-bold`} >Discover the cook you like the most</h1>
          <p className='text-lg xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ipsum aliquid tempore sit corrupti minima.</p>

          <Button asChild className='md:w-fit'>
            <Link href="/recipes">Discover Recipes</Link>
          </Button>
        </div>
        <div className='flex-1'>
          <Image
            src='/reading.svg'
            alt='reading'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero