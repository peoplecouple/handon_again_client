import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = ({ sInput, setSInput, setSearch }) => {
  const GO = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch({ search: sInput })
    GO('/search?search=' + sInput)
    setSInput("")
  }

  const handleInput = (e) => {
    setSInput(e.target.value)
  }

  return (
    <form action="">
      <input type="text" placeholder='검색어를 입력하세요' required onChange={handleInput} value={sInput || ""} />
      <button onClick={handleSearch}>
        <i className='xi-search'></i>
      </button>
    </form>
  )
}

export default SearchForm