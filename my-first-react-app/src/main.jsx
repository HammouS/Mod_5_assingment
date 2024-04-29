import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Institution from './Institution.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Institution name="Harvard University" date="2004-2209" details="Bachelors in COMPSCI"/>
    <Institution name="Stanford" date="2010-2014" details="Masters in Data Science"/>
  </React.StrictMode>,
);
