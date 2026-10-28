import { AboutSection } from "./sections/about";
import { SkillsSection } from "./sections/skills";
import { ExperienceSection } from "./sections/experience";
import { ProjectsSection } from "./sections/projects";
import { ContactSection } from "./sections/contact";

// Preserve the original composite export for any existing imports.
export function PortfolioSections() {
  return (
    <>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
