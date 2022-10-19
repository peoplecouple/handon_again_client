import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const BDetail = () => {

  const GO = useNavigate()
  const { id } = useParams()
  const [match, setMatch] = useState({})

  useEffect(() => {
    axios.post('https://handon-again.herokuapp.com/board/detail/', { match_id: id })
      .then((res) => {
        setMatch({
          title: res.data[0].BOARD_TITLE,
          content: res.data[0].BOARD_CONTENT,
          writer: res.data[0].BOARD_WRITER,
          date: res.data[0].BOARD_DATE,
        })
      })
  }, [])


  const modifyHandler = () => {
    GO('/board/modify/' + id)
  }

  const goToList = () => {
    GO('/board/')
  }

  const deleteHandler = () => {
    axios.post("/board/delete", {
      match_id: id
    }).then((res) => { console.log(res) })
    GO('/board/')
  }


  return (
    <div className='detail_box'>
      <div className="content_box">

        <div className='tit'>{match.title}</div>
        <div className='writer'><span>작성자 : </span> <span>{match.writer}</span></div>
        <div className='date'><span>작성일 : </span> <span>{match.date}</span></div>
        <div className='content'>{match.content}</div>
      </div>
      <div className='btn_box'>
        <button onClick={goToList} className='btn'>목록보기</button>
        <button onClick={modifyHandler} className='btn'>수정하기</button>
        <button onClick={deleteHandler} className='btn'>삭제하기</button>
      </div>
    </div>
  )
}

export default BDetail