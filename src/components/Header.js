import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PopNav from './PopNav.js'
import { useSelector } from 'react-redux'



const Header = ({ NAV }) => {
  const store = useSelector((state) => state)
  const [togglePop, setTogglePop] = useState(false)
  return (
    <>
      <header className='Header'>
        <div className="top">
          <div className="container">
            <h1>
              <Link to='/'>
                <img src={process.env.PUBLIC_URL + "/assets/img/logo_h.png"} alt="" />
              </Link>
            </h1>

            <form action="">
              <input type="search" placeholder='검색어를 입력하세요' required />
              <button>
                <i className='xi-search'></i>
              </button>
            </form>

            <div className="header_icons">
              <div className="left">
                <Link to="/">
                  <i className='xi-user-o'></i>
                  <span>마이한돈</span>
                </Link>
              </div>

              <div className="right">
                <Link to="/basket">
                  <i className='xi-cart-o'></i>
                  <span>장바구니</span>
                  <span className='cart_num'>{store.cart.length}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <div className="total_menu" onClick={() => { setTogglePop(!togglePop) }}>
              <i className={togglePop ? 'xi-close' : 'xi-bars'}></i> 전체 카테고리
            </div>
            <nav>
              <ul className='gnb'>
                {
                  NAV.map((el, idx) => {
                    return (
                      <li key={el.id} onClick={() => { setTogglePop(false) }}><NavLink to={el.link}>{el.menu}</NavLink>
                        {
                          el.submenu ?
                            <ul className='s_gnb'>
                              {
                                el.submenu.map((s_el, idx) => {
                                  return (
                                    <li key={s_el.id}><Link to={s_el.link}>{s_el.menu}</Link></li>
                                  )
                                })
                              }
                            </ul>
                            : ""
                        }

                      </li>
                    )
                  })
                }
              </ul>
            </nav>
            <div className="login_join">
              <span className="login"><Link to="/">로그인</Link></span>
              <span className="join"><Link to="/">회원가입</Link></span>
            </div>
          </div>
        </div>
      </header>
      <PopNav NAV={NAV} toggle={togglePop} setTogglePop={setTogglePop} />
    </>

  )
}

export default Header