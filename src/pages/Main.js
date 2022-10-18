import React from 'react'
import Brands from '../components/Brands'
import EventBanner from '../components/EventBanner'
import FrontProduct from '../components/FrontProduct'
import MainSlide from '../components/MainSlide'

const Main = ({cart, setCart, setNcart}) => {
  return (
    <>
    <MainSlide/>
    <FrontProduct cart={cart} setCart={setCart} setNcart={setNcart}/>
    <EventBanner/>
    <Brands/>
    </>
  )
}

export default Main