import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './components/context/StoreContext.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
      <App/>
      <ScrollToTop/>
  </StoreContextProvider> 
  </BrowserRouter>
)
