import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import CardListItem from './CardListItem';
import { CardContext } from '../context/CardContext';
import Sizes from './Sizes';

const App = () => {
  const { cards, length } = useContext(CardContext);
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        <Col className='header' sm='2'>
          <span className='size'>Sizes:</span>
        </Col>
        <Col className='header' sm='8'>
          <span className='products'>
            {length > 0 ? length : cards.length} Product(s) found
          </span>
        </Col>
        <Col className='header' sm='2'>
          <span className='order-by'>Order by</span>
        </Col>
      </Row>
      <Row noGutters>
        <Col sm='2'>
          <Sizes />
        </Col>
        <Col sm='10'>
          <CardListItem />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
