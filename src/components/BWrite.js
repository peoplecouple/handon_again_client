import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const BWrite = ({ input, setInput }) => {
  const GO = useNavigate()

  const Write = () => {
    axios.post("https://handon-again.herokuapp.com/board/write", {
      title: input.title,
      writer: input.writer,
      content: input.content,
    }).then((res) => { console.log(res) }).catch((e) => console.error(e))

    GO("/board")
  }



  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

 

  //   dispatch(SetBoardList(input))
  //   id.current++
  //   setInput({
  //     writer: "",
  //     title: "",
  //     content: ""
  //   })
  //   GO("/board")
  // }

  return (
    <div className='write_box'>
      <div className='write_form'>
        <div className='input_box'>
          <input type="text" name="writer" placeholder='작성자' onChange={handleInput} value={input.writer || ""} />
          <input type="text" name="title" placeholder='제목을 입력해 주세요' onChange={handleInput} value={input.title || ""} />
        </div>
        <textarea type="text" name="content" placeholder='내용을 입력하세요' onChange={handleInput} value={input.content || ""} />
      </div>

      <div className='btn_box'>
        <button onClick={() => { Write() }} className='btn'>작성하기</button>
      </div>
    </div>


  )
}

export default BWrite