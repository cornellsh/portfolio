import type { PortfolioContent } from './types';

export const czechContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Vývojář',
    description:
      'Full-stack vývojář stavějící webové nástroje, interní systémy a AI software s moderními postupy a reálnou praxí z produktové práce.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Vývojář',
    summary: '',
    intro: [
      'Vedu produkty od nápadu po nasazení: vymyslím, co stavět, postavím to, vydám a starám se o to dál.',
      'V roce 2020 jsem začal s vlastním softwarem, který jsem sám prodával. Naučilo mě to, co se s produktem opravdu děje po vydání, a tam je většina skutečné práce.',
      'Tak pracuji i teď, na webových nástrojích a AI systémech, většinou od nuly a celé v mých rukou.',
    ],
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/cornellsh', type: 'github' },
    { label: 'Email', href: 'mailto:cornellshakh@proton.me', type: 'email' },
    { label: 'Životopis', href: '/Cornell_Shakh_Resume.pdf', type: 'resume' },
  ],
  sections: [
    { id: 'intro', label: 'ÚVOD' },
    { id: 'experience', label: 'ZKUŠENOSTI' },
    { id: 'projects', label: 'PROJEKTY' },
  ],
  headings: {
    experience: 'Zkušenosti.',
    projects: 'Projekty.',
    language: 'Jazyk',
    resumeCta: 'Zobrazit životopis',
    backToTop: 'Zpět nahoru',
    copyEmail: 'Kopírovat',
    openEmail: 'Otevřít e-mailovou aplikaci',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Produkt pro české firmy, které hledají praktičtější alternativu k oficiálnímu portálu datových schránek. Nabízí přehlednější rozhraní, lepší práci se zprávami a workflow, které lépe odpovídá běžnému firemnímu provozu.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'Full-stack admin panel pro herní studio na správu produktů a předplatných. Vznikl jako interní nástroj s důrazem na přehledný každodenní provoz, efektivitu a snadnější správu.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Interní nástroje'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'Nativní licenční systém pro řízenou distribuci softwaru, postavený na hardwarově vázané autentizaci, backendovém ověřování a Windows klientovi navrženém pro přísnější kontrolu přístupu.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'Komerční automatizační produkt navržený pro rychlé workflow v reálném čase napříč více účty, kde byly klíčové načasování, koordinace a spolehlivost.',
      stack: ['C++', 'Automatizace', 'Systémy v reálném čase', 'Výkon'],
      image: '/projects/stealth-sniper.svg',
      websiteHref: '#',
      links: [],
    },
  ],
  experience: [
    {
      role: 'Full-Stack Product Engineer',
      organization: 'Independent',
      period: '2024\u00A0\u2013\u00A0Současnost',
      summary:
        'Navrhuji, stavím a dodávám full-stack produkty od architektury a implementace až po další iterace po vydání.',
      stack: ['TypeScript', 'React', 'Python', 'Interní systémy'],
    },
    {
      role: 'Software Developer',
      organization: 'Independent',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Samostatně jsem vyvíjel a prodával technické produkty a zároveň řešil distribuci, aktualizace i podporu.',
      stack: ['C++', 'Systémové programování', 'LLVM', 'Automatizace'],
    },
    {
      role: 'Freelance Developer',
      organization: 'Independent',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Pracoval jsem na klientských webových a designových projektech, kde byl důležitý jasný rozsah, rychlé dodání a praktický výsledek.',
      stack: ['Webový vývoj', 'Frontend', 'Implementace UI'],
    },
  ],
};
