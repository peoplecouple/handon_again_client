import { Link } from 'react-router-dom'
import { REC } from '../data/Data'
import { useDispatch } from "react-redux";
import { Add } from '../app/store'

const FrontProduct = () => {
  const dispatch = useDispatch()

  return (
    <section className='FrontProduct'>
      <div className="container">
        <div className="title">
          <h2>한돈몰 추천 상품</h2>
          <span><Link to="/recommand/cake">더보기 <i className='xi-angle-right'></i></Link></span>
        </div>


        <div className="content">
          {
            REC.map((el, idx) => {
              return (
                <figure key={el.id}>
                  <Link to={el.link}>
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
                        : <p className='o_price'></p>
                    }

                  </Link>
                  <i className="xi-cart-o cart" onClick={() => {
                    dispatch(Add(el))
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

export default FrontProduct