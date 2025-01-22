import { createContext, useState } from "react";

export const ThemeContext = createContext();


function ThemeContextProvider(props){

    let [theme,setTheme]=useState('light')

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
