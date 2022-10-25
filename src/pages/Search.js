import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Add } from '../app/store'

const Search = ({ MEAT, searchRe }) => {
  if (searchRe === "") { 
    searchRe = "검색불가"
  }
  console.log(searchRe)
  const searchList =  MEAT.filter(el => el.name.includes(searchRe))
  const dispatch = useDispatch()

  return (
    <section className='searchList Product'>
      <div className='container'>
        <h2>검색 결과</h2>
        <span className='snum'>찾은 상품 : {searchList.length}개</span>

        {searchList.length !== 0 ?
          <div className='content'>
            {searchList.map((el, idx) => {
              return (
                <figure key={el.id}>
                  <Link to={
                    el.id <= 12 ? `/recommand/${el.cate}/` + el.id
                      : `/part/${el.cate}/` + el.id
                  }>
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
            })}
          </div>
          : <div className='none'>검색 결과가 없습니다.</div>
        }
      </div>
    </section>
  )
}

export default Search