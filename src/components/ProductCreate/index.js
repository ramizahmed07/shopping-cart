import React, { useContext } from 'react';

import ProductForm from '../ProductForm';
import { CardContext } from '../../context/CardContext';

const ProductCreate = ({ history }) => {
  const { createProduct } = useContext(CardContext);

  const onSubmit = formValues => {
    createProduct(formValues);
    history.push('/');
  };
  return (
    <div>
      <ProductForm onSubmit={onSubmit} />
    </div>
  );
};

export default ProductCreate;
