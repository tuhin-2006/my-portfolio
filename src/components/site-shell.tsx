import {
  SiDocker,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import { portfolio } from "@/data/portfolio";
import { MobileNav } from "@/components/mobile-nav";
import { HeroTypewriter } from "@/components/hero-typewriter";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <a className="brand" href="#home" aria-label={`${portfolio.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            <svg className="brand-monogram" viewBox="0 0 40 40" fill="none">
              <path d="M10 13h20M20 13v15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M10 19v9M30 19v9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity=".5" />
              <circle cx="28" cy="29" r="1.5" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-copy">
            <span className="brand-name">{portfolio.name}</span>
            <span className="brand-role">{portfolio.role}</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>{item.label}</a>
          ))}
          <a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>

        <MobileNav items={navigation} />
      </div>
    </header>
  );
}

export function Hero() {
  const socialLinks = portfolio.socialLinks.filter((link) => link.label.trim() && link.url.trim());

  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker"><span aria-hidden="true" /> FULL STACK DEVELOPER / PORTFOLIO</p>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-greeting">Hi, I&apos;m</span>
          <span className="sr-only">{portfolio.name}, {portfolio.role}</span>
          <HeroTypewriter phrases={portfolio.heroPhrases} />
          <noscript>
            <style>{".hero-typewriter-animated { display: none; }"}</style>
            <span className="hero-typewriter" aria-hidden="true">{portfolio.heroPhrases[0]}</span>
          </noscript>
        </h1>
        <p className="hero-description">{portfolio.introduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        {socialLinks.length > 0 && (
          <nav className="hero-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                href={link.url.trim()}
                key={`${link.label}-${link.url}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label.trim()} (opens in a new tab)`}
              >
                {link.label.trim()} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        )}
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="dimension-aura" />
        <div className="dimension-grid" />
        <div className="dimension-scene">
          <div className="dimension-ring dimension-ring-outer" />
          <div className="dimension-ring dimension-ring-inner" />
          <div className="dimension-frame dimension-frame-back" />
          <div className="dimension-frame dimension-frame-front">
            <div className="dimension-frame-content">
              <span className="dimension-tag">FULL-STACK DEVELOPER</span>
              <svg className="dimension-symbol" viewBox="0 0 88 64" fill="none">
                <path d="M28 16 11 32l17 16M60 16l17 16-17 16M51 9 37 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="dimension-caption">BUILDING FOR THE WEB</span>
            </div>
          </div>
          <div className="dimension-orbit-line" />
        </div>
        <div className="tech-orbit">
          <span className="tech-icon tech-icon-1"><SiReact /></span>
          <span className="tech-icon tech-icon-2"><SiNextdotjs /></span>
          <span className="tech-icon tech-icon-3"><SiJavascript /></span>
          <span className="tech-icon tech-icon-4"><SiMongodb /></span>
          <span className="tech-icon tech-icon-5"><SiDocker /></span>
          <span className="tech-icon tech-icon-6"><SiPostgresql /></span>
        </div>
      </div>
      <div className="hero-bottom"><span>BUILDING FOR THE WEB</span><a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home">TUHIN<span>.</span></a>
        <p className="footer-copy">{portfolio.name} <span> / </span> {portfolio.role}</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="footer-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
