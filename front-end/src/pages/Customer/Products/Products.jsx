import React, { useState, useEffect } from 'react';
import getProducts from '../../../api/getProducts';
import ProductCard from '../../../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const allProducts = await getProducts();
    return setProducts(allProducts.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductCard products={ products } />
    </div>
  );
}
