import React from 'react'
import ReactDOM from 'react-dom/client'
import ProfileComponent from '../components/ProfileComponent'
import ContactComponent from '../components/ContactComponent'
import '../styles/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProfileComponent />
    <ContactComponent />
  </React.StrictMode>,
)
