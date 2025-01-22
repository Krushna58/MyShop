import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextDataProvider from './Props_Drilling/ContextData';
import ThemeContextProvider from './Pages/ThemeContext';
// import { ContextData } from './Props_Drilling/ContextData';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    // <ContextData.Provider value={{name:"Krushna", email:"Krushna@gmail.com"}}>
    //     <App />
    // </ContextData.Provider>


    // <ContextDataProvider>
    //       <App />
    // </ContextDataProvider>

    <ThemeContextProvider>
        <App/>
    </ThemeContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
