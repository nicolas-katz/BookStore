import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StoreContextProvider } from './context/StoreContext'
import { HashRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </HashRouter>
  </React.StrictMode>
)
