import React from 'react';
import Product from '../components/Product';
import Layout from '../components/Layout';
import products from '../products';

const HomeScreen = () => (
  <Layout>
    <div className="flex flex-col h-screen items-center">
      <div className="my-2 w-full flex items-center justify-center">
        <h1 className="text-6xl">Latest Products</h1>
      </div>
      <div className="grid w-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default HomeScreen;
