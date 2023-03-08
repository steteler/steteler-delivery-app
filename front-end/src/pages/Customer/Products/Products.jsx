import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../../../api/getProducts';
import ProductCard from '../../../components/ProductCard';
import DeliveryContext from '../../../context/DeliveryContext';

export default function Products() {
  const { totalProductsInCart } = useContext(DeliveryContext);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const allProducts = await getProducts();
    return setProducts(allProducts.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(totalProductsInCart.map((i) => i.totalIten));
  console.log(totalProductsInCart.map((i) => i.quantity));

  const total = totalProductsInCart.map((i) => i.totalIten)
    .reduce((acc, currValue) => acc + Number(currValue), 0);

  const isDisabled = total === 0;

  return (
    <div>
      <h1>Products</h1>
      <ProductCard products={ products } />
      <Link to="/customer/checkout">
        <button
          type="button"
          disabled={ isDisabled }
          data-testid="customer_products__button-cart"
        >
          <div data-testid="customer_products__checkout-bottom-value" />
          { `Ver Carrinho: R$ ${total.toFixed(2).replace(/\./, ',')}` }
        </button>
      </Link>
    </div>
  );
}
