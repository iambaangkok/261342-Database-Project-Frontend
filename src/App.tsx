import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar variant="solid-black"></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        HELLO M
      </header>
    </div>
  );
}

export default App;
