/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Rating from '../components/Rating';
import FlashMessage from '../components/FlashMessage';
import Spinner from '../components/Spinner';

// ! Actions
import { listProductDetails } from '../redux/actions/productActions';
//

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
    // console.log('test');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center h-screen">
        {error ? <FlashMessage type="danger" message={error} /> : null}
        <div className="flex justify-start w-9/12 m-4 ">
          <Link to="/">
            <button className="px-4 py-2 font-semibold uppercase bg-gray-100 border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-200">
              Go Back
            </button>
          </Link>
        </div>
        <div className="flex w-2/3 p-5 ">
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-12 gap-3">
              {/* PRODUCT IMAGE */}
              <div className="md:col-span-6 product-image">
                <div className="flex items-center justify-end">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-4/5"
                  />
                </div>
              </div>
              <div className="md:col-span-3 product-description">
                {/* PRODUCT NAME */}
                <div className="mb-5 product-name">
                  <h3 className="text-4xl">{product.name}</h3>
                </div>

                {/* PRODUCT RATING */}
                <div className="border-t-2 border-gray-200 product-rating">
                  <div className="my-3">
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </div>
                </div>

                {/* PRODUCT PRICE */}
                <div className="border-t-2 border-gray-200 product-rating">
                  <div className="my-3">
                    <span className="font-bold">Price:</span> ${product.price}
                  </div>
                </div>

                {/* PRODUCT DESCRIPTION */}
                <div className="border-t-2 border-gray-200 product-rating">
                  <div className="my-3">
                    <span className="font-bold">Description:</span>{' '}
                    {product.description}
                  </div>
                </div>
              </div>

              {/* PRODUCT PRICE */}
              <div className="grid md:col-span-3">
                <div className="card">
                  <div className="grid px-4 py-1 mb-1 border-2 border-gray-200 md:grid-cols-2">
                    <div className="font-semibold">Price: </div>
                    <div>
                      <strong>${product.price}</strong>{' '}
                    </div>
                  </div>

                  {/* PRODUCT STATUS */}
                  <div className="grid px-4 py-1 mb-1 border-2 border-gray-200 md:grid-cols-2">
                    <div className="font-semibold">Status: </div>
                    <div>
                      <strong>
                        {product.countInStock ? 'In Stock' : 'Out of Stock'}
                      </strong>{' '}
                    </div>
                  </div>
                  {product.countInStock > 0 && (
                    <div className="grid px-4 py-1 mb-1 border-2 border-gray-200 md:grid-cols-2">
                      <div className="font-semibold">Qty: </div>
                      <div>
                        <select
                          className="w-full focus:outline-none"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* ADD TO CART BUTTON */}
                  <div className="flex items-center justify-center w-full px-2 py-2 border-2 border-gray-200">
                    <button
                      className={`w-64 py-2 text-white bg-black rounded-md ${
                        product.countInStock === 0 &&
                        'cursor-not-allowed opacity-50'
                      }`}
                      onClick={addToCartHandler}
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
