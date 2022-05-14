import React from 'react';
import { Route } from 'react-router-dom';

export default function Welcome() {
  return (

    <>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <h3>Wagwan New User</h3>
      </Route>
    </>
  )
}
