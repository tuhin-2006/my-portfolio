import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-inner experience-grid">
        <SectionHeading id="experience-title" number="03" eyebrow="Experience & development" title="The journey." intro="A closer look at the work behind my development journey." />
        <div className="journey-list">
          {portfolio.journey.length > 0 ? portfolio.journey.map((item, index) => (
            <article className="journey-row" key={`${item.title}-${index}`}>
              <div className="journey-marker"><span aria-hidden="true" /><span className="journey-label">{item.label}</span></div>
              <div className="journey-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          )) : portfolio.projects.map((project, index) => (
            <article className="journey-row" key={project.title}>
              <div className="journey-marker"><span aria-hidden="true" /><span className="journey-label">PROJECT / {String(index + 1).padStart(2, "0")}</span></div>
              <div className="journey-copy"><h3>{project.title}</h3><p>{project.description}</p><a className="text-link" href="#projects">Explore project <span aria-hidden="true">↗</span></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
