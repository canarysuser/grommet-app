import React, { useEffect, useState } from 'react'
import ProductModel from './ProductModel';


const initialProductState=new ProductModel(0,'',0,0);

function ProductDetailsFn(props) {
    const [counter, setCounter]= useState(1);
    const [item, setItem] = useState(initialProductState);

    //useEffect hook runs for every change that happens
    useEffect(()=>{
        console.log('useEffect() runs');
    });
    return (
        <div>
            Counter is {counter}
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
        </div>
    )
}

export default ProductDetailsFn