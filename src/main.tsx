import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Home.css'
import './About.css'
import './Service.css'
import './Project.css'
import './Gallery.css'
import './Contact.css'
import './CompanyProfile.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
