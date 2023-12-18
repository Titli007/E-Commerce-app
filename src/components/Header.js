import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()
  return (
    <div className='flex justify-center bg-white pt-4 pb-4'>
        <p className='px-5 py-3 mx-3 bg-green-300 rounded-md' onClick={ () => navigate('/')}>All</p>
        <p className='px-5 py-3 mx-3 bg-green-300 rounded-md' onClick={ () => navigate('/electronics')}>Electronics</p>
        <p className='px-5 py-3 mx-3 bg-green-300 rounded-md' onClick={ () => navigate('/jewelery')}>Jewelery</p>
        <p className='px-5 py-3 mx-3 bg-green-300 rounded-md' onClick={ () => navigate('/mens')}>Men's Clothing</p>
        <p className='px-5 py-3 mx-3 bg-green-300 rounded-md' onClick={ () => navigate('/womens')}>Women's Clothing</p>
    </div>
  )
}

export default Header