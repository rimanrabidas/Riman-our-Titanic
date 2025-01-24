import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/Header.css'
import './components/Footer.css'
import './components/layout/UI/Card.css'
import './components/layout/UI/MovieDeteils.css'
import './pages/About.css'
import './pages/Contact.css'
import './pages/Home.css'
import './pages/Login.css'
import './pages/Movie.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
