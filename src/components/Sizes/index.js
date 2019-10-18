import React, { Fragment, useContext } from 'react';
import { CardContext } from '../../context/CardContext';

const Sizes = () => {
  const { setSizes } = useContext(CardContext);
  const handleChange = e => {
    if (e.target.checked) {
      setSizes(e.target.value);
    }
  };

  return (
    <Fragment>
      <div>
        <label>
          <input type='checkbox' value='xs' onChange={e => handleChange(e)} />
          <span>xs</span>
        </label>
        <label>
          <input type='checkbox' value='s' onChange={e => handleChange(e)} />
          <span>s</span>
        </label>
        <label>
          <input type='checkbox' value='m' onChange={e => handleChange(e)} />
          <span>m</span>
        </label>
        <label>
          <input type='checkbox' value='ml' onChange={e => handleChange(e)} />
          <span>ml</span>
        </label>
        <label>
          <input type='checkbox' value='l' onChange={e => handleChange(e)} />
          <span>l</span>
        </label>
        <label>
          <input type='checkbox' value='xl' onChange={e => handleChange(e)} />
          <span>xl</span>
        </label>
        <label>
          <input type='checkbox' value='xxl' onChange={e => handleChange(e)} />
          <span>xxl</span>
        </label>
      </div>
    </Fragment>
  );
};

export default Sizes;
