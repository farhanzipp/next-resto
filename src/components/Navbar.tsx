'use client'
import { playfair } from '@/app/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const routes = [
  { title: 'Home', href: '/'},
  { title: 'Recipes', href: '/recipes'},
  { title: 'Contact', href: '/contact'},
]

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full py-5 bg-white'>
      <div className='px-5 md:w-4/5 mx-auto flex justify-between items-center'>
      <Link href="/">
        <h1 className={`text-4xl font-bold ${playfair.className}`}>CookBook</h1>
      </Link>
      <nav className={`absolute w-full left-0 top-20 md:w-fit md:top-0 md:relative md:block ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
        <div className='className="mx-5 md:mx-0 flex flex-col gap-4 p-4 md:p-0 font-medium bg-secondary md:flex-row md:border-0 md:bg-transparent'>
        {
          routes.map((route) => (
            <Link key={route.title} href={route.href}>
              <p className={`text-lg hover:text-blue-600 duration-150 ${pathname == route.href ? "active" : ""}`}>{route.title}</p>
            </Link>
          ))
        }
        </div>
      </nav>

      <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="justify-center text-sm text-gray-500 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <svg className="w-5 h-5 duration-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6 duration-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        </div>
    </div>
  )
}

export default Navbar