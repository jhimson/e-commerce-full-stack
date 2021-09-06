/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  const history = useHistory();
  return (
    <div className="p-3 mx-3 my-3 border-2 rounded-lg w-72">
      <div className="card">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} className="h-48 w-72" />
        </Link>
      </div>

      {/* CARD BODY */}
      <div className="my-4 text-left card-body">
        {/* Product Title */}
        <Link to={`/product/${product._id}`}>
          <div className="card-title">
            <strong>{product.name}</strong>
          </div>
        </Link>

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
};

export default Product;
