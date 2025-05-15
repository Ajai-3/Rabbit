import React, { useState } from 'react'
import { HiMiniXCircle } from 'react-icons/hi2'

const CardDrawer = ({  cartDraw, toggleCartDrawer }) => {


  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-black z-50 transform transition-transform duration-300 ease-in-out ${cartDraw ? 'translate-x-0' : 'translate-x-full'}`}>

    {/* Close button */}
    <div className='flex justify-end px-4 py-2'>
        <button><HiMiniXCircle onClick={toggleCartDrawer} className='w-6 h-6 text-gray-400 hover:text-rabbit-green' /></button>
    </div>
    <div>
     <p>hello</p>
    </div>
    </div>
  )
}

export default CardDrawer