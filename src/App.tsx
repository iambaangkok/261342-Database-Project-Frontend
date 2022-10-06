import React from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    RouteMatch,
    useParams
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <div className="Container">
                <Router>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/products">
                            PRODUCT    
                        </Route>
                        <Route path="/orders">
                            ORDERS
                        </Route>
                        <Route path="/search">
                            SEARCH
                        </Route>
                        <Route path="/login">
                            ACCOUNT
                        </Route>
                        <Route path="/cart">
                            CART
                        </Route>
                        <Route path="/">
                            HOME
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
