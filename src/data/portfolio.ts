// Portfolio content lives here so it can be updated without editing components.
export type Project = {
  title: string;
  description: string;
  tags: string[];
  // Add a screenshot to public/ and use its path here (for example, "/projects/fitlog.png").
  image?: string;
  contribution?: string;
  features?: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export const portfolio: {
  name: string;
  role: string;
  heroPhrases: string[];
  introduction: string;
  about: string;
  focus: string;
  skills: { category: string; items: string[] }[];
  journey: { label: string; title: string; description: string }[];
  projects: Project[];
  email: string;
  socialLinks: { label: string; url: string }[];
} = {
  name: "MD. Mostofa Rahman Tuhin",
  role: "Full Stack Developer",
  heroPhrases: ["MD. Mostofa Rahman Tuhin", "a Full Stack Developer", "building interactive websites"],
  introduction: "I build interactive web applications with React and Next.js, backed by Express.js, Hono, MongoDB and PostgreSQL.",
  about: "I'm MD. Mostofa Rahman Tuhin, a full stack developer working with modern frontend, backend, and database technologies.",
  // TODO: Add your current focus when you are ready to share it.
  focus: "",
  skills: [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Hono", "Express.js"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL"] },
    { category: "Tools & deployment", items: ["Docker", "GitHub", "Vercel"] },
  ],
  // TODO: Add verified work experience or learning milestones; no dates or roles are assumed.
  journey: [],
  projects: [
    {
      title: "FitLog",
      description: "A workout library and planning app for discovering exercises, building a workout plan, and tracking completed workouts.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://fit-log-06.vercel.app/",
      sourceUrl: "https://github.com/tuhin-2006/Fit-Log-06",
      image: "", // TODO: Add a screenshot under public/ and set its path.
      contribution: "", // TODO: Describe your contribution if you want it displayed.
      features: [], // TODO: Add the key features you want to highlight.
    },
    {
      title: "DevStack",
      description: "A web app for exploring technologies and creating and managing a personal technology stack.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://dev-stack-05-olive.vercel.app/",
      sourceUrl: "https://github.com/tuhin-2006/Dev-Stack-05",
      image: "", // TODO: Add a screenshot under public/ and set its path.
      contribution: "", // TODO: Describe your contribution if you want it displayed.
      features: [], // TODO: Add the key features you want to highlight.
    },
  ],
  // TODO: Add your email address if you want to display it.
  email: "",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/tuhin-2006" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mdmostofarahman/" },
    { label: "WhatsApp", url: "https://wa.me/8801560046487" },
  ],
};
