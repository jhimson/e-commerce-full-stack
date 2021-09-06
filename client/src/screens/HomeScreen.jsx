import React from 'react';
import Product from '../components/Product';
import Layout from '../components/Layout';
import products from '../products';

const HomeScreen = () => (
  <Layout>
    <div className="flex flex-col items-center h-screen">
      <div className="flex items-center justify-center w-full my-2">
        <h1 className="text-6xl">Latest Products</h1>
      </div>
      <div className="grid justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default HomeScreen;
