import React, { useState /* useContext */ } from 'react';
import PropTypes from 'prop-types';
// import DeliveryContext from '../context/DeliveryContext';

export default function CardP({ iten }) {
  // const { totalProductsInCart, setTotalProductsInCart } = useContext(DeliveryContext);
  const [quantity, setQuantity] = useState(0);

  // const updatedProducts = () => {
  //   const productUpdated = totalProductsInCart.map((product) => {
  //     if (product.id === iten.id) {
  //       return { ...product, quantity };
  //     }
  //     return product;
  //   });
  //   return setTotalProductsInCart(productUpdated);
  // };

  // const sumQuant = () => {
  //   setQuantity(quantity + 1);
  //   if (totalProductsInCart.some((product) => product.id === iten.id)) {
  //     return updatedProducts();
  //   }
  //   const updatedArray = [
  //     ...totalProductsInCart,
  //     { id: iten.id, name: iten.name, price: iten.price, quantity }];
  //   setTotalProductsInCart(updatedArray);
  // };

  // const subtractQuant = () => {
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1);
  //   }
  //   if (totalProductsInCart.some((product) => product.id === iten.id)) {
  //     return updatedProducts();
  //   }
  //   const updatedArray = [
  //     ...totalProductsInCart,
  //     { id: iten.id, name: iten.name, price: iten.price, quantity }];
  //   setTotalProductsInCart(updatedArray);
  // };

  return (
    <div key={ iten.id }>
      <div data-testid={ `customer_products__element-card-title-${iten.id}` }>
        { iten.name }
      </div>
      <div data-testid={ `customer_products__element-card-price-${iten.id}` }>
        { `R$ ${iten.price.replace(/\./, ',')}` }
      </div>
      <img
        src={ iten.url_image }
        alt={ `Imagem de ${iten.name}` }
        data-testid={ `customer_products__img-card-bg-image-${iten.id}` }
        width="80px"
        height="100px"
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${iten.id}` }
        onClick={ () => sumQuant() }
      >
        +
      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${iten.id}` }
        onClick={ () => subtractQuant() }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${iten.id}` }
        onChange={ (event) => { setQuantity(event.target.value); } }
      />
    </div>
  );
}

CardP.propTypes = {
  iten: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};
