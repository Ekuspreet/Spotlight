// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'
import UserProvider from './Contexts/UserProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <UserProvider>
      <App />
      </UserProvider>
      </BrowserRouter>
  
)