import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CardP({ iten }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div key={ iten.id }>
      <div data-testid={ `customer_products__element-card-title-${iten.id}` }>
        { iten.title }
      </div>
      <div data-testid={ `customer_products__element-card-price-${iten.id}` }>
        { `R$ ${iten.price}` }
      </div>
      <img
        src={ iten.img }
        alt={ `Imagem de ${iten.title}` }
        data-testid={ `customer_products__img-card-bg-image-${iten.id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${iten.id}` }
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${iten.id}` }
        onClick={ () => setQuantity(quantity - 1) }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${iten.id}` }
      />
    </div>
  );
}

CardP.propTypes = {
  iten: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
};
