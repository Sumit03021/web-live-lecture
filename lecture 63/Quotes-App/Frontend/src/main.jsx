import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <Router>
    <App />
    </Router>
  </Fragment>,
)
