export default function About({ bio, skills }) {
  return (
    <section id="about" className="about">
      <h2 className="section-heading">About</h2>
      <p className="about-bio">{bio}</p>
      <div className="skills-row">
        {skills.map((skill) => (
          <span className="skill-pill" key={skill}>{skill}</span>
        ))}
      </div>

      <style>{`
        .about { padding: 0 6vw 56px; }
        .section-heading {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 16px;
        }
        .about-bio {
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 0 20px;
        }
        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-pill {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
          background: var(--bg-surface);
          border: 0.5px solid var(--border-strong);
          padding: 5px 12px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  )
}
