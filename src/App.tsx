import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Login from './page/Login';


function App() {
  return (
    <div className="App">
      <div className="Container">
        <Navbar></Navbar>
      </div>
      
      <Routes>
        <Route path="/" element={
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            HELLO M
          </header>
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
