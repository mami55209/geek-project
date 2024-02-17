import React from 'react'
import "./css/searchbar.css";


export default function SearchBar({placeholder}) {
  return (

    <div className="as-search"> 
    <input type="search" placeholder={placeholder}/>
    <button  className="search-btn" type="submit">Search</button>
    </div>
  )
}
