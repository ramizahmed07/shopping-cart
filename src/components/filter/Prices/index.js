import React, { useContext, useState, Fragment } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './index.css';
import { CardContext } from '../../../context/CardContext';

const Prices = () => {
  const { setOrderedData } = useContext(CardContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Fragment>
      <span className='order'>Order by</span>
      <Dropdown className='drop-down' isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className='drop-down-toggle' color='white' caret>
          Select
        </DropdownToggle>
        <DropdownMenu className='drop-down-menu'>
          <DropdownItem
            onClick={() => setOrderedData('ascending')}
            className='drop-down-item'
          >
            Lowest to highest
          </DropdownItem>
          <DropdownItem
            onClick={() => setOrderedData('descending')}
            className='drop-down-item'
          >
            Highest to lowest
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  );
};

export default Prices;
