import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext'
import { SidebarProvider } from './contexts/SidebarContext'
import { CartProvider } from './contexts/CartContext'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Routes>
              <Route path='*' element={<App />} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>,
)
