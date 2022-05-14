import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>  
      <MainHeader />
      <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>

        <Route path='/product'>
          <Product />
        </Route>
      </main>
    </>
  );
}

export default App;
