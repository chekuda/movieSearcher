import React from 'react'

import './SearchBar.scss'

const SearchBar = ({ onChange, val = '' }) =>
  <input
    className="search-bar"
    value={val}
    onChange={onChange}
  >
  </input>

export default SearchBar