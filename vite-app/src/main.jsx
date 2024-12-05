import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Spoti from './Spotify.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

   
    <Spoti/>
    
  </StrictMode>,
)
