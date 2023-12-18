import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const All = (props) => {

const [AllData, setAllData] = useState(null)
const navigate= useNavigate()

useEffect( () => {
    if(props.category === ""){
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{setAllData(res.data)})
        .catch(error => console.log(error))
    }else{
      axios.get(`https://fakestoreapi.com/products/category/${props.category}`)
      .then(res=>{setAllData(res.data)})
      .catch(error => console.log(error))
    }
    
}, [props.category])

useEffect(()=>{
console.log(id)
},[id])

  return (
    <div className='w-full rounded-md grid grid-cols-3 p-20 gap-4'>
      
      {AllData?
        AllData.map((data) => {
          return(
            <div className='w-full bg-white p-10'>
              <div onClick={ () => navigate(`/product/${data.id}`)}>
                <img className='h-60 p-3' src={data.image}/>
                <p className='line-clamp-1 font-bold text-xl my-3'>{data.title}</p>
                <p className='line-clamp-1 text-md my-2'>{data.description}</p>
                <p className='text-lg my-2 font-semibold'>${data.price}</p>
              </div>
              <button className='bg-green-700 py-2 px-4 my-3 rounded-md '>add to cart</button>
          
            </div>
          )
        }):<p>no data</p>
      }
    </div>
  )
}

export default All