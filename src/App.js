import React from 'react';
import CategoriesComponent from './components/Categories.js';
// const Footer = require('./components/footer/Footer.jsx');
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Products from './components/Products.js';

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
