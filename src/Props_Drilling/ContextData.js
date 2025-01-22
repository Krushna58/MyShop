import { createContext, useState } from "react";

export const ContextData= createContext();

function ContextDataProvider(props){

    let[name,setname]=useState('Krushan')
    return(
        <ContextData.Provider value={{name,setname}}>
      {props.children}
    </ContextData.Provider>
    )
}

export default ContextDataProvider