import React, { useState, useContext, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Spinner } from 'reactstrap';
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

const CardListItem = ({ loading, setLoading }) => {
  const { cards, sizes } = useContext(CardContext);

  const fetchData = () => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      return (
        <Spinner
          style={{
            display: 'block',
            margin: '200px auto',
            width: '3rem',
            height: '3rem'
          }}
        />
      );
    } else {
      return (
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
                          <CardText className='card-txt'>
                            $ {card.cost}
                          </CardText>
                          <button className='card-btn'>Add to cart</button>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                }
              })}
          </Row>
        </Container>
      );
    }
  };

  return <Fragment>{fetchData()}</Fragment>;
};

export default CardListItem;
