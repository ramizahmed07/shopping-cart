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
      <h3 className='form-title'>Create a product</h3>

      <ProductForm onSubmit={onSubmit} />
    </div>
  );
};

export default ProductCreate;
