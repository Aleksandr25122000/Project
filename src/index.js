import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./normalize.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="App">
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>
)