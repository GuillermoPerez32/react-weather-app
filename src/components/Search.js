import React, { useState } from 'react'
import PropTypes from "prop-types";

const Search = ({onSubmit}) => {

  const [value, setValue] = useState('')

  const handleChange = (e) => {

    setValue(e.target.value)
  }
  
  const handleSubmit= (e) => {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <button id='search-button' onClick={handleSubmit}><i className='fa fa-search'></i></button>
      <input
      type={'text'}
      placeholder='Search...'
      value={value}
      onChange={handleChange}
      id='search-text'
      />
    </form>
  )
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Search