import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    RouteMatch,
    useParams,
    useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
    return (
        <div className="App">
            <div className="AppContainer">
                <Router>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/products" element={
                            <Products/>
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
                            <Cart />
                        }>
                        </Route>
                        <Route path="/" element={
                            <Home />
                        }>
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
