import React, { useMemo, useReducer, useState } from 'react'
import './Counter.css'

function Counter() {

    // let[count,changeCount]=useState(0);

    function reducer(state,action){

        if(action.type=='increment'){
            return state=state+1;
        }
        else if(action.type=='decrement'){
            return state=state-1;
        }
        else if(action.type=='reset'){
            return state=0;
        }
    }

   
    let initialState=0
    let[state,dispatch]=useReducer(reducer,initialState);



    function square(num){
        for(let i=0;i<10000;i++){

        }
        return num*num;
    }

    if(state==5){
        throw new Error("Error occured")
    }

    let num=5;

    useMemo(()=>{
        square(num);                       //first argument accept function 
    },[num])                              // second is dependance
  
  return (
    <div id='div1'>
        <h1>{state}</h1>

        {/* <h1>{count}</h1> */}
      {/* <button onClick={()=>{changeCount(count=count+1)}}>Increment</button>
      <button onClick={()=>{changeCount(count=count-1)}}>Decrement</button> */}

       <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
       <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
       <br></br>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>

    </div>
  )
}

export default Counter

