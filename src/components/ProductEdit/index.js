import React, { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import ProductForm from '../ProductForm';

const ProductEdit = ({
  history,
  match: {
    params: { id }
  }
}) => {
  const productId = parseInt(id);
  const { editProduct, cards } = useContext(CardContext);

  const fetchedProduct = cards.find(x => x.id === productId);

  const onSubmit = formValues => {
    editProduct({ ...formValues, productId });
    history.push('/');
  };

  return (
    <div>
      <h3 className='form-title'>Edit a product</h3>

      <ProductForm
        onSubmit={onSubmit}
        fetchedProduct={{
          title: fetchedProduct && fetchedProduct.title,
          cost: fetchedProduct && fetchedProduct.cost,
          size: fetchedProduct && fetchedProduct.size,
          imageUrl: fetchedProduct && fetchedProduct.imageUrl
        }}
      />
    </div>
  );
};

export default ProductEdit;
