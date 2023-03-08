import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

export default function DeliveryProvider({ children }) {
  const [totalProductsInCart, setTotalProductsInCart] = useState([]);

  useMemo(() => (
    { totalProductsInCart, setTotalProductsInCart }), [totalProductsInCart]);

  return (
    <DeliveryContext.Provider value={ context }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = { children: PropTypes.node.isRequired };
