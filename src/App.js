import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main.js'
import Recommand from './pages/Recommand.js'
import Part from './pages/Part.js'
import Event from './pages/Event.js'
import './css/common.css'
import { NAV, BELLY, GIFT, CAKE, NECK, RIB, EVENT } from './data/Data'
import Basket from './pages/Basket.js'
import Board from './pages/Board.js'


const App = () => {


  return (
    <>
      <Header NAV={NAV} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recommand/*' element={<Recommand GIFT={GIFT} CAKE={CAKE} />} />
        <Route path='/part/*' element={<Part BELLY={BELLY} NECK={NECK} RIB={RIB} />} />
        <Route path='/event/*' element={<Event EVENT={EVENT} />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/board/*' element={<Board />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App