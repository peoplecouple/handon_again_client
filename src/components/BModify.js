import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const BModify = ({ list, setList }) => {
  const GO = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get("https://handon-again.herokuapp.com/board").then((res) => {
      const { data } = res;
      setList([...data])
    })
  }, [])

  const matchedContent = list.filter(el => String(el.BOARD_id) === id)


  const [input, setInput] = useState({
    id: matchedContent[0].BOARD_id,
    writer: matchedContent[0].BOARD_WRITER,
    title: matchedContent[0].BOARD_TITLE,
    content: matchedContent[0].BOARD_CONTENT,
    date: matchedContent[0].BOARD_DATE
  })

  const Modify = () => {
    axios.post("https://handon-again.herokuapp.com/board/modify", {
      title: input.title,
      writer: input.writer,
      content: input.content,
      id: input.id
    }).then((res) => { console.log(res) })
    GO('/board/')
  }


  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const goToList = () => {
    GO('/board/')
  }

  return (
    <div className='write_box'>
      <div className='write_form'>
        <div className='input_box'>
          <input type="text" name="writer" placeholder='작성자' onChange={handleInput} value={input.writer} />
          <input type="text" name="title" placeholder='제목을 입력해 주세요' onChange={handleInput} value={input.title} />
        </div>
        <textarea type="text" name="content" placeholder='내용을 입력하세요' onChange={handleInput} value={input.content} />
      </div>

      <div className='btn_box'>
        <button onClick={Modify} className='btn'>수정하기</button>
        <button onClick={goToList} className='btn'>목록보기</button>
      </div>
    </div>
  )
}



export default BModify