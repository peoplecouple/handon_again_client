import React from 'react'
import Marquee from 'react-fast-marquee'
import { BRANDS } from '../data/Data'
const Brands = () => {
  return (
    <section className='Brands'>
      <Marquee
      pauseOnHover={true}
      loop={0}>
        {
          BRANDS.map((el, idx) => {
            return (
              <figure key={el.id}>
                <img src={process.env.PUBLIC_URL + el.img} alt="" />
              </figure>
            )
          })
        }
      </Marquee>
    </section>
  )
}

export default Brands
