import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Add} from '../app/store'


const ProductDetail = ({ page }) => {
  const dispatch = useDispatch()

  const [num, setNum] = useState(1)
  const { id } = useParams()
  const matchProduct = page.find(el => Number(id) === el.id)

  return (
    <section className='ProductDetail'>
      <div className="container">
        <div className="left">
          <img src={process.env.PUBLIC_URL + matchProduct.img} alt="" />
        </div>
        <div className="right">
          <div className='title'>
            <span>{matchProduct.name}</span>
            <span><i className='xi-share-alt-o'></i></span>
          </div>
          <div className='info'>
            <ul className='left'>
              <li>정가</li>
              <li>판매가</li>
              <li>구매대상</li>
              <li>구성품목</li>
              <li>이력번호</li>
              <li>보관방법</li>
              <li className='last'>배송비</li>
            </ul>
            <ul className='right'>
              <li>{matchProduct.o_price}원</li>
              {
                matchProduct.d_price ? <li className='this'>{matchProduct.d_price}원</li> : <li className='this'>{matchProduct.o_price}원</li>
              }
              <li>{matchProduct.buyer}</li>
              <li>{matchProduct.content}</li>
              <li>{matchProduct.number}</li>
              <li>{matchProduct.store}</li>
              <li className='last'>{matchProduct.delivery}</li>
            </ul>
          </div>
          <div className='price'>
            <span className='name'>{matchProduct.name}</span>
            <span className='num'>
              <input id='number' type='number' defaultValue='1' min='1' max='100' onChange={(e) => { setNum(e.target.value) }} />
            </span>
            {
              matchProduct.d_price
                ? <span>{matchProduct.d_price}원 * {num}개</span>
                : <span>{matchProduct.o_price}원 * {num}개</span>
            }
          </div>
          <div className='total_price'>
            총 합계금액
            {
              matchProduct.d_price
                ? <span>{matchProduct.d_price * num}원</span>
                : <span>{matchProduct.o_price * num}원</span>
            }
          </div>
          <ul className='btns'>
            <li className='cart_btn' onClick={() => {
              dispatch(Add(matchProduct))
            }}><Link to="">장바구니</Link></li>
            <li className='like_btn'><Link to="">찜하기</Link></li>
            <li className='buy_btn'><Link to="">구매하기</Link></li>
          </ul>
        </div>
      </div>
      <div className="bottom_container">
        <div className="delivery">
          <img src={process.env.PUBLIC_URL + "/assets/img/delivery.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/assets/img/icepack.jpg"} alt="" />
        </div>
      </div>


    </section>
  )
}

export default ProductDetail