import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StoreContextProvider } from './context/StoreContext'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
