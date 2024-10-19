import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigation } from './components/Navigation/Navigation'
import { Layout } from './components/Layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />

  </StrictMode>,
)
