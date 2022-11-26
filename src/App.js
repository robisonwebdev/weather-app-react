import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './styles/App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className='App'>
      <Header lightMode={lightMode} location={location} setLightMode={setLightMode} setLocation={setLocation} />
      <Main location={location} />
      <Footer />
    </div>
  );
};

export default App;
