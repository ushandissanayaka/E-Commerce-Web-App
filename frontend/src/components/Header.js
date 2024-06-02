import React from 'react'
import Logo from './Logo'
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Logo w={90} h={50}/>
          </div>
          <div className='flex items-center w-full justify-between max-w-sm'>
            <input type='text' placeholder='search product here....' className='w-full'/>
            <div className='text-lg min-w-[50px] w-13 h-8 bg-black flex items-center justify-center rounded-r-full text-white'>
              <LuSearch/>
             </div>
          </div>
          <div>
            user icons and card
          </div>

      </div>
    </header>
  )
}

export default Header