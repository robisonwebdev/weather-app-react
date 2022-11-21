import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './styles/App.css';

const App = () => {
    const [lightMode, setLightMode] = true;

  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
