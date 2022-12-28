import React from 'react';
import './App.css';
import { Footer, Blog, Possibility, WhatGpt3, Header } from './containers';
import { CTA, Brand, Navbar, Features } from './components';
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
