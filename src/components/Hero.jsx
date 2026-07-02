export default function Hero({ name, title, bio, photoUrl, resumeUrl }) {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Hello, I'm</p>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="hero-bio">{bio}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View projects</a>
          <a href={resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-photo">
          {photoUrl ? (
            <img src={photoUrl} alt={name} />
          ) : (
            <span className="hero-photo-placeholder">{name.charAt(0)}</span>
          )}
        </div>
      </div>

      <style>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 64px 6vw 48px;
          flex-wrap: wrap-reverse;
        }
        .hero-text { flex: 1; min-width: 280px; max-width: 520px; }
        .hero-eyebrow {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 13px;
          margin: 0 0 10px;
        }
        .hero-name {
          font-size: clamp(28px, 5vw, 40px);
          font-weight: 700;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }
        .hero-title {
          color: var(--text-secondary);
          font-size: 17px;
          margin: 0 0 18px;
        }
        .hero-bio {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.7;
          margin: 0 0 26px;
          max-width: 420px;
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn {
          font-size: 14px;
          padding: 11px 22px;
          border-radius: var(--radius-md);
          font-weight: 500;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn-primary {
          background: var(--accent);
          color: var(--accent-text);
          border: none;
        }
        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 0.5px solid var(--border-strong);
        }
        .hero-photo-wrap {
          position: relative;
          width: 160px;
          height: 160px;
          flex-shrink: 0;
        }
        .hero-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle, var(--accent-dim), transparent 70%);
          pointer-events: none;
        }
        .hero-photo {
          position: relative;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-surface-2);
        }
        .hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-photo-placeholder {
          font-size: 48px;
          font-weight: 600;
          color: var(--text-muted);
        }
        @media (max-width: 560px) {
          .hero { padding: 48px 6vw 36px; }
        }
      `}</style>
    </section>
  )
}
