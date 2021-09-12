import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import "./App.css";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Leave from './components/leave';
import Final from './components/final';

ReactDOM.render(
    <div>
        <Navbar />
        <App />
        <Login />
        <Leave />
        <Final />
    </div>, 
    document.getElementById('root'));


