import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    // console.log(props.product);
    // const { img, name, seller, price, stock } = props.product;

    // console.log(props.product.key);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='mx-3'>

                {/* <h5>{name}</h5><br /> */}

                {/* fixed routing */}
                {/* <h5><Link to='/product'>{name}</Link></h5><br /> */}

                {/* dynamically setting the route */}
                {/* <h5><Link to={'/' + key}>{name}</Link></h5><br />*/}

                <h5><Link to={'/product/' + key}>{name}</Link></h5><br />


                <p><small>by: {seller}</small></p>
                <p>${price}</p><br />
                <p><small>only {stock} left in stock order soon</small></p>


                {props.showAddToCart === true && <button className='btn btn-danger' onClick={() => { props.addToCart(props.product) }}>
                        add to cart
                    </button>
                }
            </div>
        </div>
    );
};

export default Product;