import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { ContextData } from './ContextData'

function ComponentB() {

  let {name,setname}=useContext(ContextData);
  return (
    <div>

      <button onClick={()=>{setname("Bhosale")}}>name change</button>

    <ComponentC  />
      
    </div>
  )
}

export default ComponentB
