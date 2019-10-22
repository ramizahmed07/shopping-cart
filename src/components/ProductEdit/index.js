import React, { useContext, useEffect } from 'react';
import { CardContext } from '../../context/CardContext';
import ProductForm from '../ProductForm';

const ProductEdit = ({
  match: {
    params: { id }
  }
}) => {
  const { cards } = useContext(CardContext);

  useEffect(() => {
    const fetchedProduct = cards.find(x => x.id === parseInt(id));
  });
  const fetchedProduct = cards.find(x => x.id === parseInt(id));

  return (
    <div>
      <ProductForm
        fetchedProduct={{
          title: fetchedProduct.title,
          cost: fetchedProduct.cost,
          size: fetchedProduct.size,
          imageUrl: fetchedProduct.imageUrl
        }}
      />
    </div>
  );
};

export default ProductEdit;
