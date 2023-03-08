import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';

export default function CardP({ iten }) {
  const { totalProductsInCart, setTotalProductsInCart } = useContext(DeliveryContext);
  const [quantity, setQuantity] = useState(0);

  const changeQuant = (q) => {
    const updatedItem = {
      id: iten.id,
      name: iten.name,
      price: iten.price,
      url_image: iten.url_image,
      quantity: Number(q),
      totalIten: (Number(iten.price) * q).toFixed(2),
    };
    const filterProducts = totalProductsInCart.filter((p) => iten.id !== p.id);
    const updatedItems = [
      ...filterProducts,
      updatedItem,
    ];
    setTotalProductsInCart(updatedItems);
  };

  const subtractQuant = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const changeManual = (value) => {
    if (value === 0) {
      const itens = [...totalProductsInCart];
      delete itens[iten.id];
      return setTotalProductsInCart(itens);
    }
    const updatedItem = {
      id: iten.id,
      name: iten.name,
      price: iten.price,
      url_image: iten.url_image,
      quantity: Number(value),
      totalIten: (Number(iten.price) * Number(value)).toFixed(2),
    };
    const filterProducts = totalProductsInCart.filter((p) => iten.id !== p.id);
    const updatedItems = [
      ...filterProducts,
      updatedItem,
    ];
    setTotalProductsInCart(updatedItems);
  };

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
        onClick={ () => { setQuantity(quantity + 1); changeQuant(quantity + 1); } }
      >
        +
      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${iten.id}` }
        onClick={ () => { subtractQuant(); changeQuant(quantity + 1); } }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        min="0"
        data-testid={ `customer_products__input-card-quantity-${iten.id}` }
        onChange={ (event) => {
          changeManual(event.target.value);
          setQuantity(event.target.value);
        } }
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
