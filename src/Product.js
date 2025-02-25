import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch]= useStateValue();

    console.log('this is the basket', basket)
    const addToBasket=() => {
        
        
        dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
		
			}, 
        });    
        // console.log(item) 
    }
return (
    <div className='product'>
        <div className='product_info'>
<p>{title}</p>
<p className='product_price'>
    <small>$</small>
    <strong>{price}</strong>
</p>
<div className='product_rating'>
{Array(rating)
.fill()
.map(()=>(
    <p>🌟</p>
))}
</div>
</div>
<img src={image} alt=""/>
    <button onClick={addToBasket}>Add to Cart</button>
    </div>
)
    
}

export default Product