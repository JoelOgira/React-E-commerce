import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
        <Route path='*' element={<App/>}/>
      </Routes>
      <ReactQueryDevtools position='bottom-left' initialIsOpen='true' />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
)
