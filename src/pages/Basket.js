import { useSelector, useDispatch } from 'react-redux'
import { Delete } from '../app/store'


const Basket = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state)
  const price = []
  let total = 0

  return (
    <section className='Basket'>
      <div className="container">
        <div className="top">
          <h2>장바구니</h2>
          <img src={process.env.PUBLIC_URL + "/assets/img/order.jpg"} alt="" />
        </div>
        <div className="content">
          {
            store.cart.length !== 0
              ?
              <div>
                {
                  store.cart.map((el, idx) => {
                    return (
                      <ul key={idx}>
                        <li className='num'><input type="checkbox" /></li>
                        <li className='image'><img src={process.env.PUBLIC_URL + el.img} alt="" /></li>
                        <li className='name'>{el.name}</li>
                        {
                          el.d_price
                            ? <li className='price'>{el.d_price}원</li>
                            : <li className='price'>{el.o_price}원</li>
                        }
                        <li className='del'>배송비 {el.delivery}</li>
                        <li className='btn'>
                          <button>주문하기</button>
                          <button>수정하기</button>
                          <button onClick={() => {
                            dispatch(Delete(el.name))
                          }}>삭제하기</button>
                        </li>
                      </ul>
                    )
                  })
                }
                <div className='total_price'>
                  총 합계 금액
                  {
                    store.cart.map((el, idx) => {
                      price.push(el.d_price ? el.d_price : el.o_price)
                      total = total + Number(price[idx])
                    })
                  }
                  <span>{total}원</span>
                </div>
              </div>
              :
              <div className='none' >
                <div>장바구니에 담겨 있는 상품이 없습니다.</div>
              </div>
          }
        </div>

      </div>
    </section >
  )
}

export default Basket