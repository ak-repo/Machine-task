import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashbord from './Dashbord'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashbord />
  </StrictMode>,
)
