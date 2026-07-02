export default function Stats({ stats }) {
  return (
    <section className="stats" aria-label="Career stats">
      {stats.map((stat, i) => (
        <div className="stats-item" key={i}>
          <p className="stats-value">{stat.value}</p>
          <p className="stats-label">{stat.label}</p>
        </div>
      ))}

      <style>{`
        .stats {
          display: grid;
          grid-template-columns: repeat(${stats.length}, 1fr);
          margin: 0 6vw 56px;
          border: 0.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .stats-item {
          background: var(--bg-card-strip);
          padding: 20px 12px;
          text-align: center;
          border-right: 0.5px solid var(--border);
        }
        .stats-item:last-child { border-right: none; }
        .stats-value {
          color: var(--accent);
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }
        .stats-label {
          color: var(--text-muted);
          font-size: 12px;
          margin: 4px 0 0;
        }
        @media (max-width: 480px) {
          .stats-value { font-size: 18px; }
          .stats-label { font-size: 10px; }
        }
      `}</style>
    </section>
  )
}
