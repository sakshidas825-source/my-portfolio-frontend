import { useState } from 'react'

export default function Navbar({ name = 'Your Name' }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#top" className="navbar-brand">{name}</a>

      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-links ${open ? 'is-open' : ''}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 6vw;
          border-bottom: 0.5px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(11, 14, 20, 0.85);
          backdrop-filter: blur(8px);
          z-index: 50;
        }
        .navbar-brand {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .navbar-links {
          display: flex;
          gap: 28px;
        }
        .navbar-links a {
          font-size: 14px;
          color: var(--text-muted);
          transition: color 0.15s ease;
        }
        .navbar-links a:hover {
          color: var(--text-primary);
        }
        .navbar-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          padding: 6px;
        }
        .navbar-toggle span {
          width: 20px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
        }
        @media (max-width: 720px) {
          .navbar-toggle { display: flex; }
          .navbar-links {
            position: fixed;
            top: 61px;
            left: 0;
            right: 0;
            background: var(--bg-surface);
            border-bottom: 0.5px solid var(--border);
            flex-direction: column;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease;
          }
          .navbar-links.is-open {
            max-height: 240px;
          }
          .navbar-links a {
            padding: 16px 6vw;
            border-bottom: 0.5px solid var(--border);
          }
        }
      `}</style>
    </nav>
  )
}
