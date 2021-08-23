import React from 'react';
import CategoriesComponent from './components/categories/Categories.js';
// const Footer = require('./components/footer/Footer.jsx');
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';

function App() {
  return (
    <div>
      <Header />
      <CategoriesComponent />
      <Footer />
    </div>
  )
}

export default App;
