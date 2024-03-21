import React, { useState } from 'react'
// import Movies from './Movies';
// import './Movie.css'

const Search = () => {
  const[mvalue,setMvalue]=useState("titanic");
  // const value =document.getElementById("value");
 
  return (
    <div>
       <div className="search">
        <input type="text" id="value" placeholder="Enter hare"
        value={mvalue}
        onChange={(e)=>{setMvalue(e.target.value)}} />
       </div>
    </div>
  )
}

export default Search
