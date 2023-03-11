import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../../context/DeliveryContext';

export default function CardP({ iten }) {
  const { totalProductsInCart, setTotalProductsInCart } = useContext(DeliveryContext);
  const [quantity, setQuantity] = useState(0);

  const changeQuant = (q) => {
    const updatedItem = {
      id: iten.id,
      name: iten.name,
      price: iten.price,
      urlImage: iten.urlImage,
      quantity: Number(q),
      totalIten: (Number(iten.price) * q).toFixed(2),
    };
    const filterProducts = totalProductsInCart.filter((p) => iten.id !== p.id);
    if (q > 0) {
      const updatedItems = [...filterProducts, updatedItem];
      setTotalProductsInCart(updatedItems);
    }
  };

  useEffect(() => {
    changeQuant(quantity);
  }, [quantity]);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div key={ iten.id } style={ { border: '1px solid tomato' } }>
      <div data-testid={ `customer_products__element-card-title-${iten.id}` }>
        {iten.name}
      </div>
      <div data-testid={ `customer_products__element-card-price-${iten.id}` }>
        {`R$ ${iten.price.replace(/\./, ',')}`}
      </div>
      <img
        src={ iten.urlImage }
        alt={ `Imagem de ${iten.name}` }
        data-testid={ `customer_products__img-card-bg-image-${iten.id}` }
        width="80px"
        height="100px"
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${iten.id}` }
        onClick={ handleIncrement }
      >
        +
      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${iten.id}` }
        onClick={ handleDecrement }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        min="0"
        data-testid={ `customer_products__input-card-quantity-${iten.id}` }
        onChange={ (e) => handleChange(e) }
      />
    </div>
  );
}

CardP.propTypes = {
  iten: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
