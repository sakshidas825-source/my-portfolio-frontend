import Icon from './Icon.jsx'

export default function Footer({ name, github, linkedin, email }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-name">{name}</p>
      <p className="footer-copy">© {year} {name}. All rights reserved.</p>
      <div className="footer-social">
        <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Icon name="github" size={18} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Icon name="linkedin" size={18} />
        </a>
        <a href={`mailto:${email}`} aria-label="Email">
          <Icon name="mail" size={18} />
        </a>
      </div>

      <style>{`
        .footer {
          padding: 28px 6vw;
          border-top: 0.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-name {
          font-size: 13px;
          font-weight: 600;
          margin: 0;
        }
        .footer-copy {
          color: var(--text-muted);
          font-size: 12px;
          margin: 0;
        }
        .footer-social {
          display: flex;
          gap: 14px;
          color: var(--text-muted);
        }
        .footer-social a:hover { color: var(--text-primary); }
      `}</style>
    </footer>
  )
}
