import React from 'react';
import PropTypes from 'prop-types';
import CardP from './CardP';

export default function ProductCard({ products }) {
  const mapItens = products.map((it, i) => (
    <CardP key={ i } iten={ it } />
  ));
  return (
    <section>
      { mapItens }
    </section>
  );
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

// .shape({
//   id: PropTypes.number,
//   title: PropTypes.string,
//   price: PropTypes.number,
//   img: PropTypes.string,
// })
