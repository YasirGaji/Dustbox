import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <>  
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route> 

          <Route path='/welcome'>
            <Welcome />
          </Route>

          <Route path='/products' exact>
            <Product />
          </Route>

          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
