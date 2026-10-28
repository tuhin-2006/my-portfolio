type SectionHeadingProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ id, number, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-index"><span>{number}</span><span className="section-eyebrow">{eyebrow}</span></p>
      <h2 className="section-title" id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
