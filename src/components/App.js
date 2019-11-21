import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Spinner } from "reactstrap";

const Layout = lazy(() => import("./Layout"));
const ProductCreate = lazy(() => import("./ProductCreate"));
const ProductEdit = lazy(() => import("./ProductEdit"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spinner
            style={{
              display: "block",
              margin: "350px auto",
              width: "3rem",
              height: "3rem"
            }}
          />
        }
      >
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={700} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact component={Layout} />

                  <Route path="/new" exact component={ProductCreate} />
                  <Route path="/edit/:id" exact component={ProductEdit} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
