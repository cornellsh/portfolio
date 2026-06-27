import type { PortfolioContent } from './types';

export const czechContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Vývojář',
    description:
      'Full-stack vývojář, který staví webové nástroje, interní systémy a AI software s moderními postupy a reálnou zkušeností s produkty.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Vývojář',
    summary: '',
    intro: [
      'Vedu produkty od prvního nápadu až po reálné nasazení.',
      'Začal jsem v roce 2020 s vlastním softwarem, který jsem sám prodával. Tehdy jsem pochopil, co se s produktem děje po vydání, a právě tam je většina skutečné práce.',
      'Stejně pracuji i dnes na webových nástrojích a AI systémech, většinou od nuly a s odpovědností za celý produkt.',
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
    themeSystem: 'Systém',
    themeLight: 'Světlý',
    themeDark: 'Tmavý',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Použitelnější alternativa k oficiálnímu portálu datových schránek. Firmám dává přehlednější rozhraní, lepší práci se zprávami a postup, který odpovídá tomu, jak reálně fungují den za dnem.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'Interní admin panel, který jsem postavil pro herní studio na správu produktů a předplatných. Cílem bylo, aby běžná každodenní agenda šla rychle od ruky a dala se snadno udržet pod kontrolou.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Interní nástroje'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'Licenční systém pro software, který vyžaduje přísnou kontrolu distribuce. Licence jsou vázané na konkrétní hardware a ověřují se proti backendu, s Windows klientem postaveným tak, aby držel přístup pod kontrolou.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'Komerční automatizační nástroj, který jsem postavil a prodával a který běžel v reálném čase na více účtech najednou. Nejvíc záleželo na načasování a spolehlivosti, takže velká část práce šla do toho, aby byl rychlý a stabilní i při zátěži.',
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
        'Navrhuji, stavím a dodávám full-stack produkty od architektury a implementace až po jejich další rozvoj po spuštění.',
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
