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
        'A product for Czech businesses looking for a more practical alternative to the official data box portal. It offers a cleaner dashboard, better message handling, and a workflow that fits day-to-day business operations.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'A full-stack admin panel for a game development company to manage products and subscriptions. Built for internal use, with a focus on keeping everyday operations clear, efficient, and easy to manage.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Internal Tools'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'A native licensing system for controlled software distribution, built around hardware-based authentication, backend verification, and a Windows client designed for stricter access control.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'A commercial automation product built for fast, real-time workflows across multiple accounts, where timing, coordination, and reliability were critical.',
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
