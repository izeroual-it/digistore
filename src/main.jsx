import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import CurrencyProvider from './i18n/CurrencyProvider'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <CurrencyProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </CurrencyProvider>
    </LanguageProvider>
  </StrictMode>,
)
