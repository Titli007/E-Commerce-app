import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./components/All";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cart from "./components/Cart.js";
import axios from "axios";
import { useState,useEffect } from "react";
import Product from "./components/Product";
import React from 'react'
import { useParams } from 'react-router-dom'

function App() {

  const [id, setId] = useState('')
  const params = useParams()
  const[allcart, setAllcart] = useState([])
  const[subtotal,setSubtotal] = useState(0)
  console.log(id)

  const setParams= (id) => {
    setId(id)
  }

  useEffect(() => {
    console.log("ID changed:", id);
  }, [id]);

  useEffect(() => {
    if(id){
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        console.log(res.data);
        const newCartData = res.data;
        console.log(newCartData)
        setAllcart([...allcart, newCartData]);
      })
      .catch(error => console.log(error));
  }}, [id]);


  useEffect(()=>{
    allcart.map((data)=>{
      return(
      setSubtotal(subtotal+data.price)
      )
    })
  },[allcart])



  return (
    
    <div className="App bg-blue-100">
      <Nav />
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<All category=""/>}/>
        <Route path="/electronics" element={<All category="electronics"/>}/>
        <Route path="/jewelery" element={<All category="jewelery" />}/>
        <Route path="/mens" element={<All category="men's clothing" />}/>
        <Route path="/womens" element={<All category="women's clothing" />}/>
        <Route path="/product/:id" element={<Product setId={setParams}/>}/>
        <Route path="/cart" element={<Cart allcart={allcart} subtotal={subtotal}/>}/>
        
      
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
