import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    RouteMatch,
    useParams
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <div className="App">
            <div className="Container">
                <Router>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/products" element={
                            "PRODUCT"
                        }>
                        </Route>
                        <Route path="/orders" element={
                            "ORDERS"
                        }>
                        </Route>
                        <Route path="/search" element={
                            "SEARCH"
                        }>
                        </Route>
                        <Route path="/login" element={
                            <Login />
                        }>
                        </Route>
                        <Route path="/signup" element={
                            <Register />
                        }>
                        </Route>
                        <Route path="/cart" element={
                            "CART"
                        }>
                        </Route>
                        <Route path="/" element={
                            "HOME"
                        }>
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
