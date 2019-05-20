import React from 'react';
import './css/App.css';
import HeaderApp from './components/Header'
import BodyApp from './components/Body'
import FooterApp from './components/Footer'

function App() {
  return (
    <div className="container">
      <HeaderApp />
      <BodyApp />
      <FooterApp />
    </div>
  );
}

export default App;
