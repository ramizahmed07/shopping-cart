import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import CardListItem from './CardListItem';
import { CardContext } from '../context/CardContext';
import Sizes from './filter/Sizes';
import Prices from './filter/Prices';
import SidebarMenu from './SidebarMenu.js';

const App = () => {
  const { cards, length } = useContext(CardContext);
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <SidebarMenu />

      <Container style={{ marginTop: '100px' }}>
        <Row>
          <Col className='header' sm='2'>
            <span className='size'>Sizes:</span>
          </Col>
          <Col style={{ textAlign: 'left' }} className='header' sm='5'>
            <span className='products'>
              {length > 0 ? length : cards.length} Product(s) found
            </span>
          </Col>
          <Col style={{ textAlign: 'right' }} className='header' sm='5'>
            <span className='order-by'>
              <Prices setLoading={setLoading} />
            </span>
          </Col>
        </Row>
        <Row noGutters>
          <Col sm='2'>
            <Sizes setLoading={setLoading} />
          </Col>
          <Col sm='10'>
            <CardListItem loading={loading} setLoading={setLoading} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
