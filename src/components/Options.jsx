import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

const Option = () => {
  return (
    <div className='text-black mx-10 p-5 space-x-10 flex'>
        <NavLink className='flex items-center'>Starters<SlArrowRight/></NavLink>
        <NavLink className='flex items-center'>Main Course <SlArrowRight/></NavLink>
        <NavLink className='flex items-center'>Drinks <SlArrowRight/></NavLink>
        <NavLink className='flex items-center'>Beer <SlArrowRight/></NavLink>
        <NavLink className='flex items-center'>MOMO <SlArrowRight/></NavLink>
        <NavLink className='flex items-center'>Traditional <SlArrowRight/></NavLink>
        <NavLink className='flex items-center'>Thakali Set <SlArrowRight/></NavLink>
    </div>
  )
}

export default Option