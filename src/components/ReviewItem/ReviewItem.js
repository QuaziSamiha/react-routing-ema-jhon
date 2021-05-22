import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props);

    const { name, quantity, price } = props.product;
    return (
        <div className='review-item'>

            {/* <h2>this is review item</h2>
            <h4>review product</h4> */}

            <h5 className='text-primary'>{name}</h5>
            <p><small>{price}</small></p>
            <p>Quantity: {quantity}</p>
            <button
                className='btn btn-danger'
                onClick={() => { props.handleRemoveBtn(props.product.key) }}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;