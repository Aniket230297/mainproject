import React from 'react'
import './style.css';


function Search({search, onChangeSearch}) {
 

  return (
    <div className='search-flex'>
      <span>0</span>
      <input placeholder='Search' className='searchbox' value={search}
      onChange={(e)=>onChangeSearch(e.target.value)}/>
    </div>
  )
}

export default Search;