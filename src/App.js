import React from 'react';
import CategoriesComponent from './components/Categories.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Products from './components/Products.js';
import SimpleCart from './components/SimpleCart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { If } from 'react-if';
// import { useSelector } from 'react-redux';

function App(props) {
  // const state = useSelector((state) => state);

  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <CategoriesComponent />
        <Products />
        <SimpleCart />
      </Route>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
