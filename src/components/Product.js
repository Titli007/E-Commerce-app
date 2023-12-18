import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Product = ({setId}) => {

const [productData, setProductData] = useState(null)
const params = useParams()
const navigate = useNavigate()

setId(params.id)
useEffect( ()=>{

    axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(res=>{setProductData(res.data)})
    .catch(error=>console.log(error))
},[params.id])

  return (
    <div className='flex border-2'>
        {productData?
        <>
            <img className='border-2 bg-white p-10' src={productData.image} height={200} width={250}/>

            <div className='p-5 bg-white'>
              <p className=' font-bold text-xl my-3'>{productData.title}</p>
              <p className=' text-md my-2'>{productData.description}</p>
              <p className='text-lg my-2 font-semibold'>${productData.price}</p>
              <div>
                <button className='bg-green-700 py-2 px-4 my-3 rounded-md' onClick={ () => navigate('/cart')}>add to cart</button>
                <button className='bg-green-700 py-2 px-4 my-3 rounded-md mx-4' onClick={ () => navigate('/cart')}>buy now</button>
              </div>
            </div>
        </>
        :<p>no data</p>
    }
    </div>
  )}

export default Product