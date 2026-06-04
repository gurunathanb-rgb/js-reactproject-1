
import React from 'react' // Good practice to include
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
  </div>
); // Added the missing ); here
