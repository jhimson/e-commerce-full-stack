/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import FlashMessage from '../components/FlashMessage';

//! ACTIONS!!!
import { listProducts } from '../redux/actions/productActions';
// !

const HomeScreen = () => {
  const dispatch = useDispatch();

  // ! GLOBAL STATE VARIABLES (Store)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  // ! ----------------------------------------------------------------->

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <Layout>
      <div className="flex flex-col items-center h-screen">
        {error ? <FlashMessage type="danger" message={error} /> : null}
        <div className="flex items-center justify-center w-full my-2">
          <h1 className="text-6xl">Latest Products</h1>
        </div>
        <div className="grid justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading ? (
              <Spinner />
            ) : (
              products.map((product) => (
                <Product product={product} key={product._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
