import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import ProductDetail from './ProductDetail'

const Part = ({ MEAT }) => {
  const Belly = MEAT.filter(el => el.cate === 'belly')
  const Neck = MEAT.filter(el => el.cate === 'neck')
  const Rib = MEAT.filter(el => el.cate === 'rib')

  return (
    <Routes>
      <Route path='/belly' element={<Product page={Belly} url={'/part/belly/'} title={'삼겹살'} />} />
      <Route path='/neck' element={<Product page={Neck} url={'/part/neck/'} title={'목살'} />} />
      <Route path='/rib' element={<Product page={Rib} url={'/part/rib/'} title={'갈비'} />} />
      <Route path='/belly/:id' element={<ProductDetail page={Belly} />} />
      <Route path='/neck/:id' element={<ProductDetail page={Neck} />} />
      <Route path='/rib/:id' element={<ProductDetail page={Rib} />} />
    </Routes>
  )
}

export default Part