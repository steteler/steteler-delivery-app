import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CardP({ iten }) {
  const [quantity, setQuantity] = useState(0);

  const subtractQuant = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuantity({ quantity: value });
  };

  return (
    <div key={ iten.id }>
      <div data-testid={ `customer_products__element-card-title-${iten.id}` }>
        { iten.name }
      </div>
      <div data-testid={ `customer_products__element-card-price-${iten.id}` }>
        { iten.price.replace(/\./, ',') }
      </div>
      <img
        src={ iten.url_image }
        alt={ `Imagem de ${iten.name}` }
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
        onClick={ () => subtractQuant() }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${iten.id}` }
        onChange={ () => handleChange() }
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
