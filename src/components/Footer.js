import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="left">
          <h2>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/assets/img/logo_h.png"} alt="" />
            </Link>
          </h2>
        </div>
        <div className="center">
          <ul className="first">
            <li>법인명(상호) : (주)텐씨씨</li>
            <li>대표자(성명) : 박재성</li>
          </ul>
          <ul className="second">
            <li>주소 : 서울특별시 서초구 논현로 23 2층</li>
          </ul>
          <ul className="third">
            <li>사업자 등록번호 안내 : 211-88-35505 </li>
            <li>사업자정보확인 통신판매업 신고 제 2017-서울서초-0176호</li>
          </ul>
          <ul className="fourth">
            <li><a href="tel:1670-1045">전화 : 1670-1045 </a></li>
            <li>팩스 : 02-417-5712 </li>
          </ul>
          <ul className="fifth">
            <li> 호스팅제공 : 엔에이치엔고도(주)</li>
            <li> 개인정보보호책임자 : 이기범 <a href="mailTo:jeuikim@ten-cc.co.kr">jeuikim@ten-cc.co.kr</a> </li>
          </ul>
          <p>※ (주)텐씨씨는 한돈자조금 한돈 판매촉진 및 판로확대 협력사로 한돈몰 운영대행 업무를 맡고 있습니다.</p>
          <p>Copyright &copy; (c) mall.han-don.com. All rights reserved.</p>
        </div>
        <div className="right">
          <p><a href="tel:1670-1045">고객센터 <span>1670-1045</span></a></p>
          <div className="time">
            <p>평일 : 10:00 ~ 17:00</p>
            <p>점심 : 12:00 ~ 13:00</p>
          </div>
          <div className="family">
            <img src={process.env.PUBLIC_URL + "/assets/img/family01.png"} alt="" onClick={() => window.open('https://www.han-don.com/')} />
            <img src={process.env.PUBLIC_URL + "/assets/img/family02.png"} alt="" onClick={() => window.open('https://porkboard.han-don.com/')} />
            <img src={process.env.PUBLIC_URL + "/assets/img/family03.png"} alt="" onClick={() => window.open('https://handonin.han-don.com/')} />
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer