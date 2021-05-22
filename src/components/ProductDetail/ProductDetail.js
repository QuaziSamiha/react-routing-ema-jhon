import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {

    const { productKey } = useParams();

    const product = fakeData.find(pd => pd.key === productKey);
    // console.log(product);
    return (
        <div>
            {/* <h4>this is product detail</h4> */}

            {/* <h3>{productKey} detail is coming soon....</h3>
            <Product product={product}></Product> */}

            <h3 className='text-danger'>Your Product Detail:</h3>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;