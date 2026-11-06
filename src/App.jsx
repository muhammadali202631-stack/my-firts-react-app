
import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['Home', 'Services', 'Projects', 'About', 'Contact']

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <a href="#" className="nav-logo">
            <span className="logo-icon">N</span>
            <span>
              NEXORA<span className="dot">.</span>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {links.map((link, index) => (
              <a
                href={`#${link.toLowerCase()}`}
                key={link}
                className={index === 0 ? 'active-link' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="#login" className="login-btn">
              Login
            </a>

            <a href="#start" className="start-btn">
              Get Started <span>↗</span>
            </a>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>
      </nav>
    </>
  )
}

export default App
