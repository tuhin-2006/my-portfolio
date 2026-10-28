import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <SectionHeading id="projects-title" number="04" eyebrow="Selected work" title="Projects in focus." intro="A look at the projects and technologies behind them." />
        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual">
                {project.image ? (
                  <Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes="(max-width: 700px) 100vw, 50vw" className="project-image" />
                ) : (
                  <div className="project-preview" role="img" aria-label={`Screenshot unavailable for ${project.title}`}>
                    <div className="project-visual-grid" aria-hidden="true" />
                    <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span className="project-preview-label">PROJECT PREVIEW</span>
                  </div>
                )}
              </div>
              <div className="project-body">
                <p className="project-meta">FEATURED PROJECT / {String(index + 1).padStart(2, "0")}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tags.length > 0 && <ul className="skill-list" aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
                {project.contribution && <div className="project-detail"><h4>My contribution</h4><p>{project.contribution}</p></div>}
                {project.features && project.features.length > 0 && <div className="project-detail"><h4>Key features</h4><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>}
                {(project.liveUrl || project.sourceUrl) && (
                  <div className="project-links">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo (opens in a new tab)`}>Live demo <span aria-hidden="true">↗</span></a>}
                    {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub (opens in a new tab)`}>GitHub <span aria-hidden="true">↗</span></a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
