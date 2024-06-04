import React from 'react'
import Logo from './Logo'
import { LuSearch } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to="/">
             <Logo w={90} h={50}/>
          </Link>
          </div>
          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-sm pl-2'>
            <input type='text' placeholder='search product here....' className='w-full outline-none ' />
            <div className='text-lg min-w-[50px] w-13 h-8 bg-black flex items-center justify-center rounded-r-full text-white'>
              <LuSearch/>
             </div>
          </div>
          <div className='flex item-center gap-5'>
           <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser/>
           </div>
           <div className='text-2xl relative'>
            <span>
              <FaShoppingCart/>
            </span>
            <div className='bg-red-600  text-white w-5 h-5 rounded-full p-1 items-center flex justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
           </div>

           <div>
            <Link to="/login" className='px-2 py-1 rounded-full  bg-black text-white hover:bg-red-700'>Login</Link>
           </div>
          </div>

      </div>
    </header>
  )
}

export default Header