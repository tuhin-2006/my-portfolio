import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  const email = portfolio.email.trim();
  const links = portfolio.socialLinks.filter((link) => link.label.trim() && link.url.trim());

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-panel">
        <div className="contact-copy">
          <p className="section-index"><span>05</span><span className="section-eyebrow">Get in touch</span></p>
          <h2 className="section-title" id="contact-title">Let&apos;s build<br /><em>something good.</em></h2>
          <p>Have a project or an idea in mind? Let&apos;s start a conversation.</p>
        </div>
        <div className="contact-actions">
          {email && <div className="contact-group"><h3 className="contact-label">Email</h3><a className="contact-link" href={`mailto:${email}`}><span>{email}</span><span aria-hidden="true">↗</span></a></div>}
          {links.length > 0 && <div className="contact-group"><h3 className="contact-label">Find me online</h3><ul className="contact-socials">{links.map((link) => <li key={`${link.label}-${link.url}`}><a className="contact-link" href={link.url.trim()} target="_blank" rel="noopener noreferrer" aria-label={`${link.label.trim()} (opens in a new tab)`}><span>{link.label.trim()}</span><span aria-hidden="true">↗</span></a></li>)}</ul></div>}
        </div>
      </div>
    </section>
  );
}
