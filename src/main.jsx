import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/animation.css'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRouter from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AppRouter />
    <Footer />
  </React.StrictMode>,
)
