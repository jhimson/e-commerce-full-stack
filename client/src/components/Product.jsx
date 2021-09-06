import React from 'react';
import Rating from './Rating';

const Product = ({ product }) => (
  <div className="p-3 mx-3 my-3 border-2 rounded-lg w-72">
    <div className="card">
      <a href={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="h-48 w-72" />
      </a>
    </div>

    {/* CARD BODY */}
    <div className="my-4 text-left card-body">
      {/* Product Title */}
      <a href={`/product/${product._id}`}>
        <div className="card-title">
          <strong>{product.name}</strong>
        </div>
      </a>

      {/* Product Rating */}
      <div className="my-3 rating">
        <Rating
          value={product.rating}
          text={`${product.numReviews} review(s)`}
        />
        {/* {product.rating} from {product.numReviews} reviews */}
      </div>

      {/* Product Price */}
      <div>
        <h3 className="text-xl font-bold">${product.price}</h3>
      </div>
    </div>
  </div>
);

export default Product;
