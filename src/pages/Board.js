import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
// import { SetBoardList } from '../app/store'
import BDetail from '../components/BDetail'
import BList from '../components/BList'
import BModify from '../components/BModify'
import BWrite from '../components/BWrite'


const Board = () => {
  const [list, setList] = useState([])

  return (
    <section className='Board'>
      <h2>리뷰 게시판</h2>
      <div className="container">
        <Routes>
          <Route path="/" element={<BList list={list} setList={setList} />} />
          <Route path="/write" element={<BWrite />} />
          <Route path="/modify/:id" element={<BModify list={list} setList={setList} />} />
          <Route path="/detail/:id" element={<BDetail />} />
        </Routes>
      </div>

    </section>
  )
}

export default Board