import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Add} from '../app/store'

const Product = ({ page, url, title }) => {
  const dispatch = useDispatch()


  return (
    <section className='Product'>
      <div className="container">
        <h2>{title}</h2>
        <div className='content'>
          {
            page.map((el, idx) => {
              return (
                <figure key={el.id}>
                  <Link to={url + el.id}>
                    <img src={process.env.PUBLIC_URL + el.img} alt="" />
                    <div className='first'>
                      <p className='name'>{el.name}</p>
                      <span>무료배송</span>
                    </div>
                    <div className="second">
                      {
                        el.sale
                          ? <p className='sale'>{el.sale}</p>
                          : <p className='sale'> 0% </p>
                      }
                      {
                        el.d_price
                          ? <p>{el.d_price}원</p>
                          : <p>{el.o_price}원</p>
                      }
                    </div>

                    {
                      el.d_price
                        ? <p className='o_price'>{el.o_price}원</p>
                        : <p className='o_price' style={{ height: "24.65px" }} ></p>
                    }
                  </Link>
                  <i className="xi-cart-o cart" onClick={() => {
                    dispatch(Add(el))
                    console.log(el)
                  }}></i>

                </figure>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Product