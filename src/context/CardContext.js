import React, { createContext, Component } from 'react';

export const CardContext = createContext();

class CardContextProvider extends Component {
  state = {
    sizes: [],
    length: null,
    loading: false,
    cartData: [],
    data: [
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 30.9,
        size: 's',
        id: 1,
        imageUrl: '/assets/1.jpg'
      },
      {
        title: 'Sphynx Tie Dye Wine T-Shirt ',
        cost: 15.9,
        size: 's',
        id: 2,
        imageUrl: '/assets/2.jpg'
      },
      {
        title: 'dfsdfsd dsfsd',
        cost: 56.0,
        size: 's',
        id: 3,
        imageUrl: 'assets/3.jpg'
      },
      {
        title: 'dfdsfd sfsfds sdf',
        cost: 10.9,
        size: 's',
        id: 4,
        imageUrl: '/assets/4.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 15.89,
        size: 'xl',
        imageUrl: '/assets/1.jpg',

        id: 5
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 6.6,
        size: 'xl',
        id: 6,
        imageUrl: '/assets/6.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 4.5,
        size: 'xl',
        id: 7,
        imageUrl: '/assets/7.jpeg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 27.3,
        size: 'l',
        id: 8,
        imageUrl: '/assets/2.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 19.2,
        size: 'l',
        id: 9,
        imageUrl: '/assets/1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 31.2,
        size: 'l',
        id: 10,
        imageUrl: '/assets/3.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 77.7,
        size: 'm',
        id: 11,
        imageUrl: '/assets/6.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 55.3,
        size: 'm',
        id: 12,
        imageUrl:
          'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 34.2,
        size: 'm',
        id: 13,
        imageUrl: '/assets/4.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 97.3,
        size: 'ml',
        id: 14,
        imageUrl: '/assets/5.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 150.3,
        size: 'ml',
        id: 15,
        imageUrl: '/assets/4.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 20.3,
        size: 'ml',
        id: 16,
        imageUrl: '/assets/3.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 34.3,
        size: 'xs',
        id: 17,
        imageUrl: '/assets/1.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 36.3,
        size: 'xs',
        id: 18,
        imageUrl: '/assets/5.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 55.3,
        size: 'xs',
        id: 19,
        imageUrl: '/assets/2.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 3.2,
        size: 'xs',
        id: 20,
        imageUrl: '/assets/6.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 8.3,
        size: 'xxl',
        id: 21,
        imageUrl: '/assets/3.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 5.3,
        size: 'xxl',
        id: 22,
        imageUrl: '/assets/2.jpg'
      },
      {
        title: 'Cat Tee Black T-Shirt',
        cost: 4.2,
        size: 'xxl',
        id: 23,
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
    this.state.data.forEach(card => {
      if (size.includes(card.size)) {
        length++;
      }
    });
    this.setState({
      sizes: size,
      length
    });
  };

  handleCartData = cardValues => {
    const { cartData } = this.state;
    const productInCart = cartData.length
      ? cartData.find(x => x.id === cardValues.id)
      : null;

    if (productInCart) {
      this.setState({
        cartData: cartData.map(product => {
          if (product.id === productInCart.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            };
          }
          return product;
        })
      });
    } else {
      this.setState({
        cartData: [...cartData, { ...cardValues, quantity: 1 }]
      });
    }
  };

  removeProduct = id => {
    const { cartData } = this.state;
    this.setState({
      cartData: cartData.filter(product => product.id !== id)
    });
  };

  createProduct = product => {
    product.id = this.state.data[this.state.data.length - 1].id + 1;
    this.setState({
      data: [product, ...this.state.data]
    });
  };

  render() {
    return (
      <CardContext.Provider
        value={{
          cards: this.state.data,
          setSizes: this.setSizes,
          sizes: this.state.sizes,
          length: this.state.length,
          setOrderedData: this.setOrderedData,
          handleCartData: this.handleCartData,
          cartData: this.state.cartData,
          createProduct: this.createProduct,
          removeProduct: this.removeProduct
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default CardContextProvider;
