import React from 'react'
import { Link } from 'react-router-dom'

const EventDetail = ({ EVENT, EVENT_on, EVENT_off, EVENT_t }) => {


  return (
    <section className='Event'>
      <div className="container">
        <ul className='tab'>
          <li><Link to='/event/'>전체({EVENT_t.length})</Link></li>
          <li><Link to='/event/on'>진행중 이벤트({EVENT_on.length})</Link></li>
          <li><Link to='/event/off'>종료된 이벤트({EVENT_off.length})</Link></li>
        </ul>
        <div className='content'>
          {
            EVENT.map(el => {
              return (
                <Link to="">
                  <img src={process.env.PUBLIC_URL + el.img} alt="" key={el.id}/>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default EventDetail