import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Layout from './Layout';
import ProductCreate from './ProductCreate';
import ProductEdit from './ProductEdit';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={3000} classNames='fade'>
              <Switch location={location}>
                <Route path='/' exact component={Layout} />

                <div className='page'>
                  <Route path='/new' exact component={ProductCreate} />
                  <Route path='/edit/:id' exact component={ProductEdit} />
                </div>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
