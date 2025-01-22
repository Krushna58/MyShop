import React, { useContext } from 'react'
import { ContextData } from './ContextData'

function ComponentC() {

  let {name,setname}=useContext(ContextData);
  return (
    <div>
      
      <h1>name: {name} </h1>
      <h2></h2>


    </div>
  )
}

export default ComponentC
