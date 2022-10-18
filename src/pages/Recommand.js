import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import ProductDetail from './ProductDetail'

const Recommand = ({ CAKE, GIFT, cart, setCart, setNcart }) => {
  return (
    <Routes>
      <Route path='/cake' element={<Product page={CAKE} url={'/recommand/cake/'} title={'한돈 케이크'} cart={cart} setCart={setCart} setNcart={setNcart} />} />
      <Route path='/gift' element={<Product page={GIFT} url={'/recommand/gift/'} title={'한돈 선물세트'} cart={cart} setCart={setCart} setNcart={setNcart} />} />
      <Route path='/cake/:id' element={<ProductDetail page={CAKE} cart={cart} setCart={setCart} setNcart={setNcart} />} />
      <Route path='/gift/:id' element={<ProductDetail page={GIFT} cart={cart} setCart={setCart} setNcart={setNcart} />} />
    </Routes>
  )

}

export default Recommand