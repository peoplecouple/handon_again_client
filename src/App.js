import React, { useState } from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import Main from './pages/Main.js'
import Recommand from './pages/Recommand.js'
import Part from './pages/Part.js'
import Event from './pages/Event.js'
import './css/common.css'
import { NAV, EVENT, MEAT } from './data/Data'
import Basket from './pages/Basket.js'
import Board from './pages/Board.js'
import Search from './pages/Search.js'


const App = () => {
  const [sInput, setSInput] = useState();
  const [search, setSearch] = useSearchParams();
  const searchRe = search.get('search');

  return (
    <>
      <Header NAV={NAV} MEAT={MEAT} sInput={sInput} setSInput={setSInput}  setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search' element={<Search MEAT={MEAT} searchRe={searchRe} />} />
        <Route path='/recommand/*' element={<Recommand MEAT={MEAT} />} />
        <Route path='/part/*' element={<Part MEAT={MEAT} />} />
        <Route path='/event/*' element={<Event EVENT={EVENT} />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/board/*' element={<Board />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App