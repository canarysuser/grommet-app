import React, { useEffect, useState } from 'react'
import ProductModel from './ProductModel';


const initialProductState = new ProductModel(0, '', 0, 0);

function ProductDetailsFn(props) {
    const [counter, setCounter] = useState(1);
    const [item, setItem] = useState(initialProductState);

    //useEffect hook runs for every change that happens
    useEffect(() => {
        //console.log('useEffect() runs');
            if (props.selectedItem) {
                if (props.selectedItem.productId !== item.productId)
                    setItem({ ...props.selectedItem });
            }
        
        
        
    });
    return (
        <div>
            Counter is {counter}
            <button type="button" onClick={(e) => setCounter(counter + 1)}>Increment</button>
            <hr />
            {JSON.stringify(item)}
        </div>
    )
}

export default ProductDetailsFn