import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo'
import '@fontsource-variable/bodoni-moda'
import App from './App.jsx'
import './styles.css'

document.documentElement.style.setProperty(
  '--grain-image',
  `url("${import.meta.env.BASE_URL}images/paper-grain.png")`,
)

document.documentElement.classList.add('js')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
