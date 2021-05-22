import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import './Review.css';
import happyImage from '../../images/giphy.gif';

const Review = () => {

    const [cart, setCart] = useState([]);

    // place order, clear state, show conditional image  
    const [orderedPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        // console.log('order placed');
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    // console.log(cart);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])

    // place order, clear state, show conditional image  
    let thankYou;
    if (orderedPlaced) {
        thankYou = <img src={happyImage} alt="" />
    }
    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        product={pd}
                        handleRemoveBtn={removeProduct}
                    >
                    </ReviewItem>)
                }
                {/* place order, clear state, show conditional image */}
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* place order, clear state, show conditional image */}
                    <button onClick={handlePlaceOrder} className='btn btn-primary'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;