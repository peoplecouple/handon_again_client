import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import ProductDetail from './ProductDetail'

const Part = ({ BELLY, NECK, RIB, cart, setCart, ncart, setNcart}) => {
  return (
    <Routes>
      <Route path='/belly' element={<Product page={BELLY} url={'/part/belly/'} title={'삼겹살'} cart={cart} setCart={setCart} ncart={ncart} setNcart={setNcart}/>} />
      <Route path='/neck' element={<Product page={NECK} url={'/part/neck/'} title={'목살'} cart={cart} setCart={setCart} ncart={ncart} setNcart={setNcart}/>} />
      <Route path='/rib' element={<Product page={RIB} url={'/part/rib/'} title={'갈비'} cart={cart} setCart=
        {setCart} ncart={ncart} setNcart={setNcart}/>} />

      <Route path='/belly/:id' element={<ProductDetail page={BELLY} cart={cart} setCart={setCart} ncart={ncart} setNcart={setNcart}/>} />
      <Route path='/neck/:id' element={<ProductDetail page={NECK} cart={cart} setCart={setCart} ncart={ncart} setNcart={setNcart}/>} />
      <Route path='/rib/:id' element={<ProductDetail page={RIB} cart={cart} setCart={setCart} ncart={ncart} setNcart={setNcart}/>} />
    </Routes>
  )
}

export default Part