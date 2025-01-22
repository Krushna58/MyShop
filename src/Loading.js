import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'


function Loading() {
  return (
    <div>
        <h1>Loading</h1>
        <Spinner animation="grow"/>
      
    </div>
  )
}

export default Loading
