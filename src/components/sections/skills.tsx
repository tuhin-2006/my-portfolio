import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-inner">
        <SectionHeading id="skills-title" number="02" eyebrow="My toolkit" title="Skills & technologies." intro="The tools and technologies I use across the stack." />
        <div className="skills-grid">
          {portfolio.skills.filter((group) => group.items.length > 0).map((group, index) => (
            <article className="skill-card" key={group.category}>
              <div className="skill-card-top"><span className="skill-number">0{index + 1} /</span><span className="skill-card-symbol" aria-hidden="true">✳</span></div>
              <h3 className="skill-label">{group.category}</h3>
              <ul className="skill-list">{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
