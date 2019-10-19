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
        cost: 30.9,
        size: 's',
        id: uuid(),
        imageUrl: '/assets/1.jpg'
      },
      {
        title: 'Sphynx Tie Dye Wine T-Shirt ',
        cost: 15.9,
        size: 's',
        id: uuid(),
        imageUrl: '/assets/2.jpg'
      },
      {
        title: 'dfsdfsd dsfsd',
        cost: 56.0,
        size: 's',
        id: uuid(),
        imageUrl: 'assets/3.jpg'
      },
      {
        title: 'dfdsfd sfsfds sdf',
        cost: 10.9,
        size: 's',
        id: uuid(),
        imageUrl: '/assets/4.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 15.89,
        size: 'xl',
        imageUrl: '/assets/1.jpg',

        id: uuid()
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 6.6,
        size: 'xl',
        id: uuid(),
        imageUrl: '/assets/6.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 4.5,
        size: 'xl',
        id: uuid(),
        imageUrl: '/assets/7.jpeg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 27.3,
        size: 'l',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 19.2,
        size: 'l',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 31.2,
        size: 'l',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 77.7,
        size: 'm',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 55.3,
        size: 'm',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 34.2,
        size: 'm',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 97.3,
        size: 'ml',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 150.3,
        size: 'ml',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 20.3,
        size: 'ml',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 34.3,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 36.3,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 55.3,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 3.2,
        size: 'xs',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 8.3,
        size: 'xxl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 5.3,
        size: 'xxl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 4.2,
        size: 'xxl',
        id: uuid(),
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      }
    ]
  };

  setOrderedData = type => {
    if (type === 'ascending') {
      this.setState({
        data: this.state.data.sort((a, b) => a.cost - b.cost)
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => b.cost - a.cost)
      });
    }
  };

  setSizes = size => {
    let length = 0;
    this.state.data.map(card => {
      if (size.includes(card.size)) {
        length++;
      }
    });
    this.setState({
      sizes: size,
      length
    });
  };

  render() {
    console.log(this.state.data);
    return (
      <CardContext.Provider
        value={{
          cards: this.state.data,
          setSizes: this.setSizes,
          sizes: this.state.sizes,
          length: this.state.length,
          setOrderedData: this.setOrderedData
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default CardContextProvider;
