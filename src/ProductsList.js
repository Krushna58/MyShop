import React, { useEffect, useState } from 'react'
import './Products.css';
import useApi from './useApi';
import Spinner from 'react-bootstrap/Spinner';
import Loading from './Loading';

function ProductsList() {

    // let[products,setproducts]=useState([])

    let[url,seturl]=useState('https://dummyjson.com/products');

    let {data,loading}=useApi(url);
    let products= data? data.products : [];

//     useEffect(()=>{

//     fetch(url).then((res)=>{

//         res.json().then((data)=>{
//             setproducts(data.products);
//         })
//     })
// },[url])

    // console.log(products);
  return (
    <div>
        <h1>E-Commerce Application</h1>
        <button onClick={()=>{seturl('https://dummyjson.com/products')}}>All</button>
        <button onClick={()=>{seturl('https://dummyjson.com/products/category/beauty')}}>Beauty</button>
        <button onClick={()=> {seturl('https://dummyjson.com/products/category/fragrances')}}>Fragrance</button>
        <button onClick={()=>{seturl('https://dummyjson.com/products/category/furniture')}}>Furniture</button>

        {
            loading ? <Loading/>:
            products.map((item)=>{
                return <div className='product'>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h2>{item.price}</h2>
                    <h2>{item.category}</h2>
                    <img src={item.images}></img>
                     </div>

            })
        }
      
    </div>
  )
}

export default ProductsList
