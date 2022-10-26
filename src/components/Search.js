import React, { useState } from 'react'
import PropTypes from "prop-types";
import useGetOptions from '../hooks/useGetOptions';

const Search = ({onSubmit}) => {

  const [value, setValue] = useState('')
  const {data:options} = useGetOptions(value)

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  const handleSubmit= (e) => {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
      type={'search'}
      placeholder='Search...'
      value={value}
      onChange={handleChange}
      id='search-text'
      list='country'
      autoComplete={'off'}
      autoCorrect={'on'}
      >
      </input>
      <button id='search-button' onClick={handleSubmit}><i className='fa fa-search'></i></button>
      <datalist id="country">
        {options.map(option => 
<option value={option} key={option}></option>
          )}
</datalist>
    </form>
  )
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Search