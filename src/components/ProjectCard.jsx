import Icon from './Icon.jsx'

export default function ProjectCard({ title, description, icon, tags, liveUrl, githubUrl }) {
  const href = liveUrl && liveUrl !== '#' ? liveUrl : githubUrl

  return (
    <a
      className="project-card"
      href={href || '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
    >
      <div className="project-icon">
        <Icon name={icon} size={22} color="var(--accent)" />
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <Icon name="external-link" size={16} color="var(--text-muted)" />

      <style>{`
        .project-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--bg-surface);
          border: 0.5px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 16px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .project-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-2px);
        }
        .project-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .project-body { flex: 1; min-width: 0; }
        .project-title {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 4px;
        }
        .project-description {
          color: var(--text-muted);
          font-size: 12px;
          line-height: 1.5;
          margin: 0 0 10px;
        }
        .project-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .project-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          background: var(--bg-surface-2);
          padding: 2px 8px;
          border-radius: 5px;
        }
        @media (max-width: 480px) {
          .project-card { flex-wrap: wrap; }
        }
      `}</style>
    </a>
  )
}
