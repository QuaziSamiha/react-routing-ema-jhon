import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

import { Link } from 'react-router-dom';

import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {

    const [products, setProducts] = useState(fakeData); // products = fakeData
    // console.log(products);

    const [cart, setCart] = useState([]);

    // sync state in multiple routes
    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        // console.log(productKeys);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            // console.log(existingKey, savedCart[existingKey]);
            product.quantity = savedCart[existingKey];
            return product;
        })
        // console.log(savedCart);
        // console.log(previousCart);
        setCart(previousCart);
    }, [])

    const handleAddToCart = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            // const count = sameProduct.quantity + 1;
            // sameProduct.quantity = sameProduct.quantity + 1;
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // const count = sameProduct.length;

        // const newCart = [...cart, product];
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd =>
                        <Product
                            showAddToCart={true}
                            key={pd.key}
                            product={pd}
                            addToCart={handleAddToCart}>
                        </Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* place order, clear state, show conditional image */}
                    <Link to='/review'>
                        <button className='btn btn-warning'>review your order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;