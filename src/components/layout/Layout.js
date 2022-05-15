import React from 'react';
import Style from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={Style.main}>{props.children}</main>
    </>
  )
}

export default Layout