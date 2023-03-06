import React from 'react';
// import itens from '../helpers/itens';
import CardP from './CardP';

export default function ProductCard() {
  const mapItens = itens.map((it, i) => (
    <CardP key={ i } iten={ it } />
  ));
  return (
    <section>
      { mapItens }
    </section>
  );
}
