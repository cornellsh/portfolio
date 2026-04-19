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
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
};

const englishContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Engineer',
    description:
      'Full-stack engineer building web tools, internal systems, and AI-powered software with a strong focus on current methods, tooling, and industry practice.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Engineer',
    summary: 'Engineer by mind, builder at heart.',
    intro: [
      'I build full-stack software products, mainly web tools and internal systems, from backend services to frontend interfaces.',
      'I started by building and selling my own software, where I handled development, distribution, and ongoing iteration. That work gave me early experience with shipping and maintaining real products used outside of personal projects.',
      'Today, I work as a full-stack engineer building web-based tools and AI systems, with a strong focus on current methods, tooling, and industry practice.',
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
    resumeCta: 'View my résumé',
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
      stack: ['React', 'Flask', 'SQLAlchemy', 'Internal Tools'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'A native licensing system for controlled software distribution, built around hardware-based authentication, backend verification, and a Windows client designed for tighter access control.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
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
      stack: ['TypeScript', 'React', 'Python', 'Internal Systems'],
    },
    {
      role: 'Software Developer',
      organization: 'Independent',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Built and sold technical products independently, while also handling distribution, updates, and support.',
      stack: ['C++', 'Systems Programming', 'LLVM', 'Automation'],
    },
    {
      role: 'Freelance Developer',
      organization: 'Independent',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Worked with clients on web and design projects, focusing on clear scope, fast turnaround, and practical delivery.',
      stack: ['Web Development', 'Frontend', 'UI Implementation'],
    },
  ],
};

const czechContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-stack vývojář',
    description:
      'Full-stack vývojář, který staví webové nástroje, interní systémy a software s využitím AI, se silným důrazem na aktuální postupy, nástroje a dění v oboru.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-stack vývojář',
    summary: 'Inženýr v mysli, builder v srdci.',
    intro: [
      'Stavím full-stack software, hlavně webové nástroje a interní systémy, od backendových služeb až po frontend.',
      'Začínal jsem na vlastním softwaru, který jsem nejen vyvíjel, ale také prodával a dlouhodobě udržoval. Právě tam jsem si brzy vyzkoušel, co opravdu znamená produkt vypustit do světa a nést za něj odpovědnost i po vydání.',
      'Dnes pracuji jako full-stack vývojář na webových nástrojích a AI systémech, se silným důrazem na aktuální postupy, nástroje a dění v oboru.',
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
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Produkt pro české firmy, které potřebují praktičtější alternativu k oficiální datové schránce. Nabízí přehlednější rozhraní, lepší práci se zprávami a workflow, které víc odpovídá běžnému firemnímu provozu.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'Full-stack admin panel pro herní studio na správu produktů a předplatných. Vznikl jako interní nástroj s důrazem na přehledný každodenní provoz a snadnější údržbu.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Interní nástroje'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'Nativní licenční systém pro řízenou distribuci softwaru, postavený kolem hardwarově vázané autentizace, backendového ověřování a Windows klienta pro přísnější kontrolu přístupu.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'Komerční automatizační produkt navržený pro rychlé workflow v reálném čase napříč více účty, kde hrálo velkou roli načasování, koordinace a spolehlivost.',
      stack: ['C++', 'Automatizace', 'Systémy v reálném čase', 'Výkon'],
      image: '/projects/stealth-sniper.svg',
      websiteHref: '#',
      links: [],
    },
  ],
  experience: [
    {
      role: 'Full-stack vývojář',
      organization: 'Samostatně',
      period: '2024\u00A0\u2013\u00A0současnost',
      summary:
        'Navrhuji a dodávám full-stack produkty od architektury a implementace až po další iterace po vydání.',
      stack: ['TypeScript', 'React', 'Python', 'Interní systémy'],
    },
    {
      role: 'Vývojář softwaru',
      organization: 'Samostatně',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Samostatně jsem vyvíjel a prodával technické produkty a zároveň řešil distribuci, aktualizace i podporu.',
      stack: ['C++', 'Systémové programování', 'LLVM', 'Automatizace'],
    },
    {
      role: 'Freelance vývojář',
      organization: 'Samostatně',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Pracoval jsem na klientských webových a designových projektech, kde byl důležitý jasný rozsah, rychlé dodání a praktický výsledek.',
      stack: ['Webový vývoj', 'Frontend', 'Implementace UI'],
    },
  ],
};

const ukrainianContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-stack розробник',
    description:
      'Full-stack розробник, який створює веб-інструменти, внутрішні системи та AI-продукти, з сильним фокусом на актуальні підходи, інструменти й те, куди рухається індустрія.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-stack розробник',
    summary: 'Інженер розумом, будівник серцем.',
    intro: [
      'Я створюю full-stack продукти, насамперед веб-інструменти та внутрішні системи, від бекенд-сервісів до фронтенду.',
      'Починав із власного софту, який не лише розробляв, а й продавав та підтримував після релізу. Саме там я досить рано зрозумів, що таке справжня відповідальність за продукт, а не лише за код.',
      'Зараз я працюю як full-stack розробник над веб-інструментами та AI-системами, з сильним фокусом на актуальні підходи, інструменти й те, що реально відбувається в індустрії.',
    ],
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/cornellsh', type: 'github' },
    { label: 'Email', href: 'mailto:cornellshakh@proton.me', type: 'email' },
    { label: 'Резюме', href: '/Cornell_Shakh_Resume.pdf', type: 'resume' },
  ],
  sections: [
    { id: 'intro', label: 'ВСТУП' },
    { id: 'experience', label: 'ДОСВІД' },
    { id: 'projects', label: 'ПРОЄКТИ' },
  ],
  headings: {
    experience: 'Досвід.',
    projects: 'Проєкти.',
    language: 'Мова',
    resumeCta: 'Переглянути резюме',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Продукт для чеських компаній, яким потрібна зручніша альтернатива офіційному порталу datová schránka. Дає зрозумілішу панель, кращу роботу з повідомленнями та workflow, який краще підходить для щоденної бізнес-роботи.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'Full-stack адмін-панель для компанії з розробки ігор для керування продуктами та підписками. Робилася як внутрішній інструмент з акцентом на зрозумілі щоденні процеси та простіший супровід.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Внутрішні інструменти'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'Нативна система ліцензування для контрольованого розповсюдження софту, побудована навколо апаратно-прив’язаної автентифікації, бекенд-верифікації та Windows-клієнта для жорсткішого контролю доступу.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'Комерційний продукт для автоматизації швидких workflow у реальному часі між кількома акаунтами, де критично важливими були таймінг, координація та стабільність.',
      stack: ['C++', 'Автоматизація', 'Системи реального часу', 'Продуктивність'],
      image: '/projects/stealth-sniper.svg',
      websiteHref: '#',
      links: [],
    },
  ],
  experience: [
    {
      role: 'Full-stack розробник',
      organization: 'Незалежно',
      period: '2024\u00A0\u2013\u00A0дотепер',
      summary:
        'Створюю і запускаю full-stack продукти: від архітектури та реалізації до подальших ітерацій після релізу.',
      stack: ['TypeScript', 'React', 'Python', 'Внутрішні системи'],
    },
    {
      role: 'Розробник ПЗ',
      organization: 'Самостійно',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Самостійно розробляв і продавав технічні продукти, паралельно займаючись дистрибуцією, оновленнями та підтримкою.',
      stack: ['C++', 'Системне програмування', 'LLVM', 'Автоматизація'],
    },
    {
      role: 'Фриланс-розробник',
      organization: 'Самостійно',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Працював із клієнтськими веб- і дизайн-проєктами, де були важливі чіткий обсяг робіт, швидка реалізація та практичний результат.',
      stack: ['Веброзробка', 'Frontend', 'Реалізація UI'],
    },
  ],
};

const russianContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-stack разработчик',
    description:
      'Full-stack разработчик, который делает веб-инструменты, внутренние системы и AI-продукты, с сильным фокусом на актуальные подходы, инструменты и то, что происходит в индустрии.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-stack разработчик',
    summary: 'Инженер умом, строитель сердцем.',
    intro: [
      'Я создаю full-stack продукты, в первую очередь веб-инструменты и внутренние системы, от backend-сервисов до frontend.',
      'Начинал со своего собственного софта, который не только писал, но и продавал, обновлял и поддерживал после релиза. Именно там я довольно рано понял, что значит по-настоящему отвечать за продукт, а не только за код.',
      'Сейчас я работаю как full-stack разработчик над веб-инструментами и AI-системами, с сильным фокусом на актуальные подходы, инструменты и то, что действительно происходит в индустрии.',
    ],
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/cornellsh', type: 'github' },
    { label: 'Email', href: 'mailto:cornellshakh@proton.me', type: 'email' },
    { label: 'Резюме', href: '/Cornell_Shakh_Resume.pdf', type: 'resume' },
  ],
  sections: [
    { id: 'intro', label: 'ВВЕДЕНИЕ' },
    { id: 'experience', label: 'ОПЫТ' },
    { id: 'projects', label: 'ПРОЕКТЫ' },
  ],
  headings: {
    experience: 'Опыт.',
    projects: 'Проекты.',
    language: 'Язык',
    resumeCta: 'Открыть резюме',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Продукт для чешских компаний, которым нужна более удобная альтернатива официальному порталу datová schránka. Он даёт более понятный интерфейс, лучшую работу с сообщениями и workflow, который лучше подходит для повседневных бизнес-задач.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'Full-stack админ-панель для компании по разработке игр для управления продуктами и подписками. Делалась как внутренний инструмент с упором на понятные ежедневные процессы и удобное сопровождение.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Внутренние инструменты'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'Нативная система лицензирования для контролируемого распространения софта, построенная вокруг аппаратно-привязанной аутентификации, backend-верификации и Windows-клиента для более жёсткого контроля доступа.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'Коммерческий продукт для автоматизации быстрых workflow в реальном времени между несколькими аккаунтами, где решающими были тайминг, координация и надёжность.',
      stack: ['C++', 'Автоматизация', 'Системы реального времени', 'Производительность'],
      image: '/projects/stealth-sniper.svg',
      websiteHref: '#',
      links: [],
    },
  ],
  experience: [
    {
      role: 'Full-stack разработчик',
      organization: 'Независимо',
      period: '2024\u00A0\u2013\u00A0н.в.',
      summary:
        'Проектирую и довожу до релиза full-stack продукты: от архитектуры и реализации до следующих итераций после запуска.',
      stack: ['TypeScript', 'React', 'Python', 'Внутренние системы'],
    },
    {
      role: 'Разработчик ПО',
      organization: 'Самостоятельно',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Самостоятельно разрабатывал и продавал технические продукты, параллельно занимаясь дистрибуцией, обновлениями и поддержкой.',
      stack: ['C++', 'Системное программирование', 'LLVM', 'Автоматизация'],
    },
    {
      role: 'Фриланс-разработчик',
      organization: 'Самостоятельно',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Работал над клиентскими веб- и дизайн-проектами, где были важны понятный объём работ, быстрый темп и практический результат.',
      stack: ['Веб-разработка', 'Frontend', 'Реализация UI'],
    },
  ],
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: englishContent,
  cs: czechContent,
  ua: ukrainianContent,
  ru: russianContent,
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
