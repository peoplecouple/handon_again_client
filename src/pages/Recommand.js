import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import ProductDetail from './ProductDetail'

const Recommand = ({ MEAT }) => {
  const Cake = MEAT.filter(el => el.cate === 'cake')
  const Gift = MEAT.filter(el => el.cate === 'gift')
  return (
    <Routes>
      <Route path='/cake' element={<Product page={Cake} url={'/recommand/cake/'} title={'한돈 케이크'}  />} />
      <Route path='/gift' element={<Product page={Gift} url={'/recommand/gift/'} title={'한돈 선물세트'}  />} />
      <Route path='/cake/:id' element={<ProductDetail page={Cake} />} />
      <Route path='/gift/:id' element={<ProductDetail page={Gift} />} />
    </Routes>
  )

}

export default Recommand