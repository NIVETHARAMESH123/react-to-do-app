import React, { useState } from 'react'


const Number = () => {
const [number, setNumber] = useState("1");

function handleNumberChange(){
     const int = Math.floor(Math.random()*101)
     setNumber(int)
}

  return (
    <div>
   <p> My lucky Number is {number}</p>
   <button onClick={handleNumberChange}>Change</button>
   </div>
  )
}

export default Number