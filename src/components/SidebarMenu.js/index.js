import React, { useState, useContext, Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './index.css';
import { CardContext } from '../../context/CardContext';

const SidebarMenu = () => {
  const { cartData, removeProduct } = useContext(CardContext);
  const [isOpen, open] = useState(false);

  const toggleMenu = () => {
    open(!isOpen);
  };

  const total = cartData.map(product => product.quantity);
  const totalNumber = total.length > 0 && total.reduce((a, c) => a + c);
  const subTotal = cartData.map(product => product.cost * product.quantity);
  const subTotalNumber =
    subTotal.length > 0 && subTotal.reduce((a, c) => a + c);

  const popup = () => {
    if (subTotal.length !== 0) {
      alert(subTotalNumber);
    } else {
      alert('Add some products in the cart');
    }
  };

  return (
    <Fragment>
      <div
        onClick={toggleMenu}
        className={isOpen ? 'hamburger open' : 'hamburger'}
      >
        <span></span>
        <span></span>
        <span></span>
        {totalNumber > 0 && <span className='total'>{totalNumber}</span>}
      </div>
      <div
        className={isOpen ? 'sidebar-menu sidebar-menu-open' : 'sidebar-menu'}
      >
        <div className='sidebar-menu-header'>
          <div className='cart'>
            <i className='cart-icon icon ion-md-cart'>
              {totalNumber > 0 && <span className='total'>{totalNumber}</span>}
            </i>

            <span className='cart-text'>Cart</span>
          </div>
        </div>
        <div className='sidebar-menu-content'>
          <ListGroup className='list'>
            {cartData.length > 0 ? (
              cartData.map(product => (
                <ListGroupItem key={product.id} className='list-item'>
                  <img
                    src={product.imageUrl}
                    alt='product-img'
                    className='list-item-image'
                  />
                  <button
                    onClick={() => removeProduct(product.id)}
                    className='remove-btn'
                  >
                    X
                  </button>
                  <p className='list-item-details'>
                    <span className='list-item-title'>{product.title}</span>
                    <br />
                    <span className='list-item-size'>
                      Size:
                      <span className='list-item-size-number'>
                        {product.size}
                      </span>
                    </span>
                    <span className='list-item-cost'>$ {product.cost}</span>

                    <br />
                    <span className='list-item-quantity'>
                      Quantity:
                      <span className='list-item-quantity-number'>
                        {product.quantity}
                      </span>
                    </span>
                  </p>
                </ListGroupItem>
              ))
            ) : (
              <div className='no-products-text'>
                Add some products in the cart.
              </div>
            )}
          </ListGroup>
        </div>
        <div className='sidebar-menu-footer'>
          <div className='sub-total'>
            <span className='sub-total-text'>SUBTOTAL</span>
            <span className='sub-total-number'>
              $ {Math.round(subTotalNumber * 100) / 100}
            </span>
          </div>
          <button onClick={popup} className='checkout-btn'>
            CHECKOUT
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarMenu;
