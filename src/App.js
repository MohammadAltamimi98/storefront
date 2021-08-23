import React from 'react';
import Categories from './components/categories/Categories.js';
// const Footer = require('./components/footer/Footer.jsx');
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Footer />
    </div>
  )
}

export default App;
