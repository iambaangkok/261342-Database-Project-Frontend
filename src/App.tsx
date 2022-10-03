import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Navbar></Navbar>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        HELLO M
      </header>
    </div>
  );
}

export default App;
