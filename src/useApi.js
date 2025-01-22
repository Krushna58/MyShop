import React, { useState } from 'react'
import {  useEffect } from 'react';



function useApi(url) {

    let[data,setdata]=useState(null);
    let [loading, setloading]=useState(false);

        useEffect(()=>{
        setloading(true)
        fetch(url).then((res)=>{
    
            res.json().then((json)=>{
                setdata(json);
                setloading(false)
            })
        })
    },[url])
    

  return {data,loading};
}

export default useApi
