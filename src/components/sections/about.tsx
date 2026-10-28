import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-inner about-grid">
        <div className="about-heading">
          <p className="section-index"><span>01</span><span className="section-eyebrow">About me</span></p>
          <h2 className="section-title" id="about-title">A little about<br /><span>the developer.</span></h2>
        </div>
        <div className="about-copy">
          <p>{portfolio.about}</p>
          {portfolio.focus && <div className="about-aside"><span className="aside-label">CURRENT FOCUS</span><span className="aside-value">{portfolio.focus}</span></div>}
          <a className="text-link" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
