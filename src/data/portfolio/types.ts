export type LinkItem = {
  label: string;
  href: string;
  type: 'github' | 'resume' | 'email';
};

export type SectionItem = {
  id: string;
  label: string;
};

export type ProjectItem = {
  name: string;
  summary: string;
  stack: string[];
  image?: string;
  websiteHref: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  stack: string[];
};

export type PortfolioContent = {
  seo: {
    title: string;
    description: string;
    siteName: string;
  };
  profile: {
    name: string;
    role: string;
    summary: string;
    intro: string[];
  };
  links: LinkItem[];
  sections: SectionItem[];
  headings: {
    experience: string;
    projects: string;
    language: string;
    resumeCta: string;
    backToTop: string;
    copyEmail: string;
    openEmail: string;
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
};
