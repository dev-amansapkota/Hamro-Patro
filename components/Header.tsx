'use client'
import React, {  useState } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  

  return (
    <div>
      {isOpen && (
        <ul className=' absolute flex shadow-md flex-col border rounded-md text-black w-48 z-50 left-2 top-14 bg-gray-100 px-4 py-2 space-y-2'>
          <li>Remit</li>
          <li>Mart</li>
          <li>Gifts</li>
          <li>Recharge</li>
          <li>Bank Rates</li>
          <li>Jyotish</li>
          <li>Rashifal</li>
           <li>Podcast</li>
           <li>News</li>
           <li>Blog</li>
            <li>Gold/Silver</li>

        </ul>
      )}
        <div className='my-2 mx-2 flex '>
            <button onClick={()=>setIsOpen(!isOpen)}><HiOutlineMenuAlt4 className='text-black text-xl font-extrabold my-3 mx-2'/></button>
            <img height={10} width={50}
            src='https://www.hamropatro.com/images/hamropatro.png'></img>
            <h2 className='text-black font-bold my-3 mx-4'> HAMRO PATRO</h2>
        </div>
        <ul className='flex space-x-6 justify-end mr-7 text-black -my-12  cursor-pointer'>
            <li className='hover:text-red-700 hover:underline hover:underline-offset-12 '>
                Remit
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
               Mart
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
                Gifts
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
                Recharge
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
               Bank Rates
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
               Jyotish
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
               Rashifal
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
               Podcasts
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
              News
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
              Blog
            </li>
             <li className='hover:text-red-700 hover:underline hover:underline-offset-12'>
             Gold/Silver
            </li>

        </ul>
    </div>
  )
}

export default Header