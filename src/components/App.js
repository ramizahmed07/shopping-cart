import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import ProductCreate from './ProductCreate';
import ProductEdit from './ProductEdit';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Layout} />
      <Route path='/new' component={ProductCreate} />
      <Route path='/edit/:id' component={ProductEdit} />
    </BrowserRouter>
  );
};

export default App;
