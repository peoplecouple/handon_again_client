import React from 'react'
import { Link } from 'react-router-dom'

const PopNav = ({ NAV, toggle, setTogglePop }) => {
  return (
    <div className={'PopNav' + (toggle ? " on" : "")}>
      <ul className='gnb'>
        {
          NAV.map((el, idx) => {
            return (
              <li key={el.id} onClick={() => { setTogglePop(false) }}><Link to={el.link}>{el.menu}</Link>
                {el.submenu ?
                  <ul className='p_sgnb'>
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
    </div>
  )
}

export default PopNav

