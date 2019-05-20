import React from 'react';
import './css/App.css';
import HeaderApp from './components/Header'
import BodyApp from './components/Body'

function App() {
  return (
    <div className="container">
      <HeaderApp />
      <BodyApp />
    </div>
  );
}

export default App;
