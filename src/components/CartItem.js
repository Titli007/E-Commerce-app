import React, { useEffect, useState } from 'reagict'



const CartItem = ({ data }) => {
    const [counter, setCounter] = useState(1)
    const [totalPrice, setTotalprice] = useState(data.price)
    const [total,setTotal] = useState([])

    useEffect(()=> {
        setTotalprice(totalPrice+data.price )
        // console.log(totalPrice)
        setTotal(...total+(totalPrice+total))
        console.log(total)
    },[data, counter])

    useEffect(()=>{
        setTotal(data.price+total)
        console.log(data.price)
        console.log(total)
    },[data,counter])

    return (
        <div className='bg-white p-8 rounded-md flex'>
            <img className='h-60 w-72 p-4' src={data.image} />
            <div>
                <p className='text-lg font-bold my-4'>{data.title}</p>
                <p className='text-lg font-semibold mb-4'>${totalPrice}</p>
                {counter > 1 ?
                    <>
                        <span className='bg-gray-300 py-1 px-3 rounded-md' onClick={() => setCounter(counter - 1)}>-</span>
                        <span className='m-2'>{counter}</span>
                        <span className='bg-gray-300 py-1 px-3 rounded-md' onClick={() => setCounter(counter + 1)}>+</span><br />
                    </>
                    :
                    <>
                        <span className='m-2'>{counter}</span>
                        <span className='bg-gray-300 py-1 px-3 rounded-md' onClick={() => setCounter(counter + 1)}>+</span><br />
                    </>
                }
            </div>
        </div>
    )
}

export default CartItem