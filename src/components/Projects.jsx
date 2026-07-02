import ProjectCard from './ProjectCard.jsx'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <h2 className="section-heading">Featured projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <style>{`
        .projects { padding: 0 6vw 56px; }
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
      `}</style>
    </section>
  )
}
