import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = () => {
  return (
    <div>
        
        <div className='my-2 mx-2 flex'>
            <HiOutlineMenuAlt4 className='text-black font-extrabold my-3 mx-2'/>
            <img height={10} width={50}
            src='https://www.hamropatro.com/images/hamropatro.png'></img>
            <h2 className='text-black font-serif  font-[16px] font-bold my-3 mx-4'> Hamro Patro</h2>
        </div>
        <ul className='flex space-x-6 justify-end mr-7 text-black -my-12 f'>
            <li>
                Remit
            </li>
             <li>
               Mart
            </li>
             <li>
                Gifts
            </li>
             <li>
                Recharge
            </li>
             <li>
               Bank Rates
            </li>
             <li>
               Jyotish
            </li>
             <li>
               Rashifal
            </li>
             <li>
               Podcasts
            </li>
             <li>
              News
            </li>
             <li>
              Blog
            </li>

        </ul>
    </div>
  )
}

export default Header