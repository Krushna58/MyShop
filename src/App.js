import logo from './logo.svg';
import './App.css';
import ProductsList from './ProductsList';
import NavBar from './Pages/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Form from './Form/Form';
import Form2 from './Form/Form2';
import Form3 from './Form/Form3';
import ComponentA from './Props_Drilling/ComponentA';
import Counter from './Counter/Counter';
import ErrorBoundary from './Counter/ErrorBoundary';




function App() {
  return (
    <div className="App">
      
      {/* <ProductsList/> */}


      {/* <BrowserRouter>
      <NavBar/>
      </BrowserRouter> */}


    <ErrorBoundary>
    <Counter/>
    </ErrorBoundary>

    <ErrorBoundary>
    <Counter/>
    </ErrorBoundary>
     



{/* <Form/> */}

{/* <Form2/> */}

{/* <Form3/> */}

{/* <ComponentA  />           */}
                                                                              {/* name={"Krushna"} email={"Krushna@gmail.com"} */}
    
    </div>
  );
}

export default App;
