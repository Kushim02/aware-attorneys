import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = "475550421635-669nl5hv0lgormikgo4nu572kb69puln.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
           <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
