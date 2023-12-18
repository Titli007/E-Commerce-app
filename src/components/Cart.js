import React from 'react'

import { useState, useEffect } from 'react'
import CartItem from './CartItem'

const Cart = (props) => {

  // console.log(props.allcart)
  // const params = useParams()

  const [carttotal, setCarttotal] = useState([])
  // const[totalprice, setTotalprice] = useState(0)
  // const [id, setId] = useState(props.id)
  // // const [cartdata,setCartdata] = useState();
  // console.log(props.id)

  // useEffect(() => {
  //   console.log('jguguy')
  //   axios.get(`https://fakestoreapi.com/products/${props.id}`)
  //     .then(res => {
  //       console.log(res.data);
  //       const newCartData = res.data;
  //       console.log(newCartData)
  //       setAllcart([...allcart, newCartData]);
  //     })
  //     .catch(error => console.log(error));
  // }, [id]);

  // useEffect(()=> {
  //   let prices = props.allcart.map(data=>Number(data.price))
  //   console.log(prices)
  //   let updatePrices= (prices[prices.length-1])*counter
  //   console.log(updatePrices)
  //   setCarttotal([...carttotal,updatePrices])
  //   console.log(carttotal)
  // },[props.allcart, counter])

  // console.log(total)

  return (
    <div className='p-8 m-8 border-2'>
      {props.allcart.length > 0 ?
        props.allcart.map((data, index) => {

          return <CartItem data={data} updateTotal={props.updateTotal}/>

        }) : <p>cart is empty</p>

      }
      <button className='py-3 bg-green-300 px-5 my-4 rounded-md'>check out</button>
      <p>subtotal:{props.subtotal}</p>
      {/* <p>totalprice:{total}</p> */}
    </div>
  )
}

export default Cart;