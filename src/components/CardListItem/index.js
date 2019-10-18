import React, { useContext, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

import './index.css';
import { CardContext } from '../../context/CardContext';

const CardListItem = () => {
  const { cards, sizes } = useContext(CardContext);

  return (
    <Fragment>
      <Container>
        <Row noGutters>
          {cards &&
            cards.map(card => {
              if (sizes.length > 0) {
                if (sizes.includes(card.size)) {
                  return (
                    <Col sm='3' key={card.id}>
                      <Card>
                        <CardImg
                          className='card-img'
                          top
                          src={card.imageUrl}
                          alt='Card image cap'
                        />
                        <CardBody className='card-body'>
                          <CardTitle className='card-title'>
                            {card.title}
                          </CardTitle>
                          <CardSubtitle className='card-subtitle'></CardSubtitle>
                          <CardText className='card-txt'>
                            $ {card.cost}
                          </CardText>
                          <button className='card-btn'>Add to cart</button>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                }
              } else {
                return (
                  <Col sm='3' key={card.id}>
                    <Card>
                      <CardImg
                        className='card-img'
                        top
                        src={card.imageUrl}
                        alt='Card image cap'
                      />
                      <CardBody className='card-body'>
                        <CardTitle className='card-title'>
                          {card.title}
                        </CardTitle>
                        <CardSubtitle className='card-subtitle'></CardSubtitle>
                        <CardText className='card-txt'>$ {card.cost}</CardText>
                        <button className='card-btn'>Add to cart</button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              }
            })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default CardListItem;
