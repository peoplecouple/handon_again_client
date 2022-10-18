import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventDetail from './EventDetail'

const Event = ({ EVENT }) => {
  return (
    <section className='Event'>
      <h2>이벤트</h2>
      <Routes>
        <Route path='/' element={<EventDetail EVENT={EVENT} EVENT_t={EVENT} EVENT_on={EVENT.slice(0, 3)} EVENT_off={EVENT.slice(3, 7)} />} />
        <Route path='/on' element={<EventDetail EVENT={EVENT.slice(0, 3)} EVENT_t={EVENT} EVENT_on={EVENT.slice(0, 3)} EVENT_off={EVENT.slice(3, 7)} />} />
        <Route path='/off' element={<EventDetail EVENT={EVENT.slice(3, 7)} EVENT_t={EVENT} EVENT_on={EVENT.slice(0, 3)} EVENT_off={EVENT.slice(3, 7)} />} />
      </Routes>
    </section>

  )
}

export default Event