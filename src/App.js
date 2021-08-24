import React from 'react';
import CategoriesComponent from './components/categories/Categories.js';
// const Footer = require('./components/footer/Footer.jsx');
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Products from './components/Products/Products.js';

function App(props) {
  return (
    <div>
      <Header />
      <CategoriesComponent />
      <Products />
      <Footer />
    </div>
  )
}

export default App;
