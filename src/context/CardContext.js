import React, { createContext, Component } from 'react';
import uuid from 'uuid';

export const CardContext = createContext();

class CardContextProvider extends Component {
  state = {
    sizes: [],
    length: null,
    loading: false,
    data: [
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 's',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/12064273040195392_1.jpg'
      },
      {
        title: 'Sphynx Tie Dye Wine T-Shirt ',
        cost: 10.9,
        size: 's',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/51498472915966370_1.jpg'
      },
      {
        title: 'dfsdfsd dsfsd',
        cost: 10.9,
        size: 's',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'dfdsfd sfsfds sdf',
        cost: 10.9,
        size: 's',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/11033926921508488_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'l',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'l',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'l',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'm',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'm',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'm',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'ml',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'ml',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'ml',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xxl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xxl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 10.9,
        size: 'xxl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      }
    ]
  };

  setSizes = size => {
    let length = 0;
    this.state.data.map(card => {
      for (let key in size) {
        if (card.size === size[key]) {
          length++;
        }
      }
    });
    this.setState({
      sizes: size,
      length
    });
  };

  render() {
    return (
      <CardContext.Provider
        value={{
          cards: this.state.data,
          setSizes: this.setSizes,
          sizes: this.state.sizes,
          length: this.state.length
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default CardContextProvider;
