import React, { useState } from 'react'

const Indexx = () => {
    const[count,setCount]=useState(0);


const increase=()=>{
    console.log("iam clicked");
    setCount(count+6);
    if(count>100){
      return setCount(0);
    }


}
console.log(document.title);



  return (
    <div>
        <div>increase{count}</div>
        <div>decrease</div>
        <button onClick={increase}>Count</button>
      
    </div>
  )
}

export default Indexx
