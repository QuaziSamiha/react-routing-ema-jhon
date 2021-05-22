import React from 'react';

const Cart = (props) => {
    // console.log(props);
    // console.log(props.cart);

    const cart = props.cart;
    // console.log(cart);

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    // console.log(totalPrice);
    // debugger;
    const totalShipping = cart.reduce((total, product) => total + product.shipping, 0);
    const tax = totalPrice / 10;
    const grandTotal = totalPrice + totalShipping + tax;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className='m-2 p-2 position-fixed border border-secondary'>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p>Shipping: {formatNumber(totalShipping)}</p>
            <p>Tax: {formatNumber(tax)}</p>
            <h5 className='text-danger'>Grand Total: {formatNumber(grandTotal)}</h5>
            <br />
            
            {/* place order, clear state, show conditional image */}
            {
                props.children
            }
        </div>
    );
};

export default Cart;