import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"

const MainSlide = () => {
  return (
    <div className='MainSlide'>
      <Slider
        className='Slide'
        arrows={false}
        autoplay={true}
        autoplaySpeed={3000}
        pauseOnFocus={false}
        pauseOnHover={false}
        dots={true}
      >
        <figure className='itm01'>
          <div className="container">
            <p>따라올 수 없는 차이</p>
            <p><span>한돈</span>만큼 좋은 선택이 있을까요?</p>
          </div>
        </figure>
        <figure className='itm02'>
          <div className="container">
            <p>깨끗하고 안전한 국산돼지고기</p>
            <p>다시 한번 다함께<span> 한돈</span></p>
          </div>
        </figure>
      </Slider>
    </div>
  )
}

export default MainSlide