import React, { useState } from 'react'
import { HiMiniXCircle } from 'react-icons/hi2'
import CartContents from '../Cart/CartContents'

const CardDrawer = ({  cartDraw, toggleCartDrawer }) => {


  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-black z-50 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${cartDraw ? 'translate-x-0' : 'translate-x-full'}`}>

    {/* Close button */}
    <div className='flex justify-end px-4 py-2'>
        <button><HiMiniXCircle onClick={toggleCartDrawer} className='w-6 h-6 text-gray-400 hover:text-rabbit-green' /></button>
    </div>
    
    {/* Cart content with scrollable area */}
    <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-bold mb-4'>Your Cart</h2>
        {/* Componets for Cart Contents */}
        <CartContents />
    </div>

    {/* Checkout button */}
    <div className='p-4 sticky bottom-0'>
        <button className='w-full font-semibold bg-rabbit-green hover:bg-rabbit-green/80 transition-colors duration-300 ease-in-out text-white py-2 rounded'>Checkout</button>
        <p className='text-center text-gray-400 text-xs mt-2'>Shhipping, taxes, and discounts calculated at checkout</p>
    </div>
    </div>
  )
}

export default CardDrawer