import React from 'react'
import { Link } from 'react-router-dom'

const EventBanner = () => {
  return (
    <section className='EventBanner'>
      <div className="container">
        <Link to='/'><img src={process.env.PUBLIC_URL + "/assets/img/event_banner01.jpg"} alt="" /></Link>
        <Link to='/'><img src={process.env.PUBLIC_URL + "/assets/img/event_banner02.jpg"} alt="" /></Link>
      </div>
    </section>
  )
}

export default EventBanner