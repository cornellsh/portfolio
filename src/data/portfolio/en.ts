import type { PortfolioContent } from './types';

export const englishContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Engineer',
    description:
      'Full-stack engineer building web tools, internal systems, and AI-powered software with modern practices and real-world product experience.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Engineer',
    summary: '',
    intro: [
      'I run products from idea to live.',
      'I started in 2020 selling my own software. That taught me what actually happens to a product after launch, which is where most of the real work is.',
      'I work the same way now on web tools and AI systems, usually starting from nothing and owning the whole thing.',
    ],
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/cornellsh', type: 'github' },
    { label: 'Email', href: 'mailto:cornellshakh@proton.me', type: 'email' },
    { label: 'Résumé', href: '/Cornell_Shakh_Resume.pdf', type: 'resume' },
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
    resumeCta: 'View résumé',
    backToTop: 'Back to top',
    copyEmail: 'Copy',
    openEmail: 'Open email app',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'A more usable alternative to the official Czech data box portal. It gives businesses a clearer dashboard, better message handling, and a workflow that fits the way they actually operate day to day.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'An internal admin panel I built for a game studio to manage their products and subscriptions. The aim was to keep everyday operations quick to handle and easy to stay on top of.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Internal Tools'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'A licensing system for software that needs tight distribution control. Licenses are tied to the hardware they run on and verified against a backend, with a Windows client built to keep access locked down.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'A commercial automation tool I built and sold that ran real-time tasks across many accounts at once. Timing and reliability mattered most, so much of the work went into keeping it fast and stable under heavy use.',
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
        'I design, build, and ship full-stack products, from architecture and implementation to post-launch iteration.',
      stack: ['TypeScript', 'React', 'Python', 'Internal Systems'],
    },
    {
      role: 'Software Developer',
      organization: 'Independent',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'I built and sold technical products independently, while also managing distribution, updates, and support.',
      stack: ['C++', 'System Programming', 'LLVM', 'Automation'],
    },
    {
      role: 'Freelance Developer',
      organization: 'Independent',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'I worked with clients on web and design projects, focusing on clear scope, fast delivery, and practical results.',
      stack: ['Web Development', 'Frontend', 'UI Implementation'],
    },
  ],
};
