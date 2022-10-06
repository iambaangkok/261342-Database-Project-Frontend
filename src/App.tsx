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
import Login from './page/Login';
import Register from './page/Register';

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
                            <Login/>
                        </Route>
                        <Route path="/signup">
                            <Register/>
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
