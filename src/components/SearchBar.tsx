"use client"
import { SearchBarProps } from '@/types'
import React, { useState } from 'react'
import { Input } from './ui/input'


const SearchBar = ({searchQuery, setSearchQuery}: SearchBarProps) => {
    return (
        <form>
            <div className='md:w-1/2 mx-auto z-0'>
                <Input 
                    type='search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder='pizza...'
                />
                {/* <button type='submit' className='text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-slate-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>Search</button> */}
            </div>
        </form>
    )
}

export default SearchBar