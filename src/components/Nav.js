import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaBabyCarriage } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";


const Nav = () => {
  return (
    <>
        <div className='flex justify-between bg-green-700 pb-4 py-3 px-3'>
            <div>
                <IoHome />
            </div>
            <div className='flex '>
                <div className='flex px-5 items-center space-x-2'>
                    <span>{"cart()"}</span>
                    <FaBabyCarriage />
                </div>
                <div className='flex px-5 items-center space-x-2'>
                    <span>account</span>
                    
                    <MdAccountCircle />
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav