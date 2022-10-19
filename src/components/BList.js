import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BList = ({ input, list, setList }) => {
  const GO = useNavigate()



  useEffect(() => {
    axios.get("https://handon-again.herokuapp.com/board")
      .then((res) => {
        const { data } = res;
        setList([...data])
      })
      .catch((error) => { console.log(error) })
  }, [input])



  return (
    <div>
      <div className='btn_box'>
        <button onClick={() => GO('/board/write')} className='btn'>작성하기</button>
      </div>
      {
        list.length !== 0 ?
          <table className='BoardTable'>
            <thead>
              <tr>
                <td className='no'>NO</td>
                <td className='tit'>제목</td>
                <td className='writer'>작성자</td>
                <td className='date'>작성일</td>
              </tr>
            </thead>
            <tbody>
              {
                list.map((el, idx) =>
                  <tr key={idx}>
                    <td className='no'>{el.BOARD_id}</td>
                    <td className='tit_con'><Link to={'/board/detail/' + el.BOARD_id}>{el.BOARD_TITLE}</Link></td>
                    <td className='writer'>{el.BOARD_WRITER}</td>
                    <td className='date'>{el.BOARD_DATE}</td>

                  </tr>
                ).reverse()
              }
            </tbody>

          </table>
          : <div className='nolist'>
            <span>작성된 게시물이 없습니다. 게시물을 등록하십시요.</span>
          </div>
      }

    </div>
  )
}

export default BList