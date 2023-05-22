import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // https://legacy.reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
