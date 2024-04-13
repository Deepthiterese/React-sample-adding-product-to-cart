import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import bag from '../images/bag.avif'; 


function Main() {
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
       
  <img src={bag} alt="Bag" />
            
      <h1>Add to your cart
        
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>

        <p>Product:{count}</p></h1>

    </div>
  );
}

export default Main;