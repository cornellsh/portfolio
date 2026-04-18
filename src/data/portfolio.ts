export const locales = ['en', 'cs', 'ua', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { path: string; htmlLang: string; ogLocale: string; hrefLang: string }> = {
  en: { path: '/', htmlLang: 'en', ogLocale: 'en_US', hrefLang: 'en' },
  cs: { path: '/cs/', htmlLang: 'cs', ogLocale: 'cs_CZ', hrefLang: 'cs' },
  ua: { path: '/ua/', htmlLang: 'uk', ogLocale: 'uk_UA', hrefLang: 'uk' },
  ru: { path: '/ru/', htmlLang: 'ru', ogLocale: 'ru_RU', hrefLang: 'ru' },
};

export type LinkItem = {
  label: string;
  href: string;
  type: 'github' | 'cv' | 'email';
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
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
};

const englishContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Product Engineer',
    description:
      'A full-stack product engineer building software products, web tools, and internal systems.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Product Engineer',
    summary: 'Engineer by mind, builder at heart.',
    intro: [
      'I build full-stack software products, mainly SaaS tools and internal systems, from backend services to frontend interfaces.',
      'I started by building and selling my own software, where I handled development, distribution, and ongoing iteration. That work gave me early experience with shipping and maintaining real products used outside of personal projects.',
      'Today, I work as a full-stack engineer building web-based tools for real business use cases.',
    ],
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/cornellsh', type: 'github' },
    { label: 'Email', href: 'mailto:cornellshakh@proton.me', type: 'email' },
    { label: 'CV', href: '/Cornell_Shakh_CV.pdf', type: 'cv' },
  ],
  sections: [
    { id: 'intro', label: 'INTRO' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
  ],
  headings: {
    experience: 'Experience.',
    projects: 'Projects.',
    language: 'Language',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'A product for Czech businesses that need a more practical alternative to the official data box portal. It gives them a cleaner dashboard, better message handling, and a workflow that fits real business use.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'A full-stack admin panel for a game development company to manage products and subscriptions. Built for internal use, with a focus on keeping everyday operations clear and manageable.',
      stack: ['React', 'Flask', 'Subscriptions', 'Admin Tools'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'A native licensing system for controlled software distribution, built around hardware-based authentication, backend verification, and a Windows client designed for tighter access control.',
      stack: ['C++', 'Licensing', 'Authentication', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'A commercial automation product built for fast, real-time workflows across multiple accounts, where timing, coordination, and reliability mattered.',
      stack: ['C++', 'Automation', 'Real-Time Systems', 'Performance'],
      image: '/projects/stealth-sniper.svg',
      websiteHref: '#',
      links: [],
    },
  ],
  experience: [
    {
      role: 'Full-Stack Product Engineer',
      organization: 'Independent',
      period: '2024\u00A0\u2013\u00A0Present',
      summary:
        'Building and shipping full-stack products, from architecture and implementation to iteration after release.',
      stack: ['TypeScript', 'React', 'Python', 'SaaS'],
    },
    {
      role: 'Software Developer',
      organization: 'Independent',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Built and sold technical products independently, while also handling distribution, updates, and support.',
      stack: ['C++', 'Systems Programming', 'Networking', 'Automation'],
    },
    {
      role: 'Freelance Developer',
      organization: 'Independent',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Worked with clients on web and design projects, focusing on clear scope, fast turnaround, and practical delivery.',
      stack: ['Graphic Design', 'Web Development', 'Client Work'],
    },
  ],
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: englishContent,
  cs: englishContent,
  ua: englishContent,
  ru: englishContent,
};

export const defaultLocale: Locale = 'en';

export const getLocalePath = (locale: Locale) => localeMeta[locale].path;

export const getHtmlLang = (locale: Locale) => localeMeta[locale].htmlLang;

export const getOgLocale = (locale: Locale) => localeMeta[locale].ogLocale;

export const languageOptions = locales.map((locale) => ({
  value: locale,
  shortLabel: locale.toUpperCase(),
  label:
    locale === 'en'
      ? 'English'
      : locale === 'cs'
        ? 'Czech'
        : locale === 'ua'
          ? 'Ukrainian'
          : 'Russian',
}));

export const getPortfolioContent = (locale: Locale = defaultLocale) => portfolioContent[locale] ?? englishContent;
