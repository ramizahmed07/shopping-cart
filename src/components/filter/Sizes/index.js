import React, { Fragment, useContext, useState } from 'react';
import { Button } from 'reactstrap';

import './index.css';
import { CardContext } from '../../../context/CardContext';

const Sizes = ({ setLoading }) => {
  const { setSizes } = useContext(CardContext);
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = selected => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
    setSizes(cSelected);
  };

  return (
    <Fragment>
      <div>
        <label>
          <Button
            className='size-button'
            color='primary'
            onClick={() => onCheckboxBtnClick('xs')}
            active={cSelected.includes('xs')}
          ></Button>
          <span
            onClick={() => setLoading(true)}
            className={
              cSelected.includes('xs')
                ? 'checkbox-styles checked'
                : 'checkbox-styles'
            }
          >
            xs
          </span>
        </label>
        <label>
          <Button
            className='size-button'
            color='primary'
            onClick={() => onCheckboxBtnClick('s')}
            active={cSelected.includes('s')}
          ></Button>
          <span
            onClick={() => setLoading(true)}
            className={
              cSelected.includes('s')
                ? 'checkbox-styles checked'
                : 'checkbox-styles'
            }
          >
            s
          </span>
        </label>
        <label>
          <Button
            className='size-button'
            color='primary'
            onClick={() => onCheckboxBtnClick('m')}
            active={cSelected.includes('m')}
          ></Button>
          <span
            onClick={() => setLoading(true)}
            className={
              cSelected.includes('m')
                ? 'checkbox-styles checked'
                : 'checkbox-styles'
            }
          >
            m
          </span>
        </label>
        <label>
          <Button
            className='size-button'
            color='primary'
            onClick={() => onCheckboxBtnClick('ml')}
            active={cSelected.includes('ml')}
          ></Button>
          <span
            onClick={() => setLoading(true)}
            className={
              cSelected.includes('ml')
                ? 'checkbox-styles checked'
                : 'checkbox-styles'
            }
          >
            ml
          </span>
        </label>
        <label>
          <Button
            className='size-button'
            color='primary'
            onClick={() => onCheckboxBtnClick('l')}
            active={cSelected.includes('l')}
          ></Button>
          <span
            onClick={() => setLoading(true)}
            className={
              cSelected.includes('l')
                ? 'checkbox-styles checked'
                : 'checkbox-styles'
            }
          >
            l
          </span>
        </label>
        <label>
          <Button
            className='size-button'
            color='primary'
            onClick={() => onCheckboxBtnClick('xl')}
            active={cSelected.includes('xl')}
          ></Button>
          <span
            onClick={() => setLoading(true)}
            className={
              cSelected.includes('xl')
                ? 'checkbox-styles checked'
                : 'checkbox-styles'
            }
          >
            xl
          </span>
        </label>
        <label>
          <Button
            className='size-button'
            color='primary'
            onClick={() => onCheckboxBtnClick('xxl')}
            active={cSelected.includes('xxl')}
          ></Button>
          <span
            onClick={() => setLoading(true)}
            className={
              cSelected.includes('xxl')
                ? 'checkbox-styles checked'
                : 'checkbox-styles'
            }
          >
            xxl
          </span>
        </label>
      </div>
    </Fragment>
  );
};

export default Sizes;
