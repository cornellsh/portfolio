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
    backToTop: string;
    copyEmail: string;
    openEmail: string;
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
};

const englishContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Engineer',
    description:
      'Full-stack engineer building web tools, internal systems, and AI-powered software with a strong focus on modern practices, current tooling, and real-world product work.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Engineer',
    summary: 'Engineer by mind, builder at heart.',
    intro: [
      'I build full-stack software products, mainly web tools and internal systems, from backend services to frontend interfaces.',
      'I started by building and selling my own software, handling development, distribution, and long-term iteration. That gave me early experience in shipping real products and taking responsibility for how they performed after release.',
      'Today, I work as a full-stack engineer building web tools and AI systems, with a strong focus on modern practices, current tooling, and real-world product work.',
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
    copyEmail: 'Copy email',
    openEmail: 'Open email app',
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

const czechContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Vývojář',
    description:
      'Full-stack vývojář stavějící webové nástroje, interní systémy a AI software s důrazem na moderní postupy, aktuální nástroje a reálnou práci na produktech.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Vývojář',
    summary: 'Inženýr myslí, builder srdcem.',
    intro: [
      'Stavím full-stack software, hlavně webové nástroje a interní systémy, od backendových služeb až po frontendová rozhraní.',
      'Začínal jsem vlastním softwarem, který jsem nejen vyvíjel, ale také prodával a dlouhodobě rozvíjel. Právě tam jsem brzy získal zkušenost s tím, co opravdu znamená vypustit produkt do světa a nést za něj odpovědnost i po vydání.',
      'Dnes pracuji jako full-stack vývojář na webových nástrojích a AI systémech, se silným důrazem na moderní postupy, aktuální nástroje a reálnou praxi v oboru.',
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
    copyEmail: 'Kopírovat e-mail',
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
      period: '2024\u00A0\u2013\u00A0současnost',
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

const ukrainianContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Розробник',
    description:
      'Full-stack розробник, який створює веб-інструменти, внутрішні системи та AI-продукти з сильним фокусом на сучасні підходи, актуальні інструменти та реальну практику в індустрії.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Розробник',
    summary: 'Інженер розумом, builder серцем.',
    intro: [
      'Я створюю full-stack продукти, насамперед веб-інструменти та внутрішні системи, від бекенд-сервісів до фронтенд-інтерфейсів.',
      'Починав із власного софту, який не лише розробляв, а й продавав та розвивав після релізу. Саме там я рано отримав реальний досвід запуску продуктів і відповідальності за те, як вони працюють після виходу.',
      'Зараз я працюю як full-stack розробник над веб-інструментами та AI-системами, з сильним фокусом на сучасні підходи, актуальні інструменти та реальну практику в індустрії.',
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
    backToTop: 'Назад угору',
    copyEmail: 'Скопіювати email',
    openEmail: 'Відкрити поштовий застосунок',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Продукт для чеських компаній, яким потрібна зручніша альтернатива офіційному порталу datová schránka. Дає зрозумілішу панель, кращу роботу з повідомленнями та workflow, який краще підходить для щоденних бізнес-процесів.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'Full-stack адмін-панель для компанії з розробки ігор для керування продуктами та підписками. Створена як внутрішній інструмент з акцентом на зрозумілі щоденні процеси, ефективність і простіший супровід.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Внутрішні інструменти'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'Нативна система ліцензування для контрольованого розповсюдження софту, побудована навколо апаратно-прив\'язаної автентифікації, бекенд-верифікації та Windows-клієнта, створеного для жорсткішого контролю доступу.',
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
      role: 'Full-Stack Product Engineer',
      organization: 'Independent',
      period: '2024\u00A0\u2013\u00A0дотепер',
      summary:
        'Проєктую, створюю й запускаю full-stack продукти: від архітектури та реалізації до подальших ітерацій після релізу.',
      stack: ['TypeScript', 'React', 'Python', 'Внутрішні системи'],
    },
    {
      role: 'Software Developer',
      organization: 'Independent',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Самостійно розробляв і продавав технічні продукти, паралельно займаючись дистрибуцією, оновленнями та підтримкою.',
      stack: ['C++', 'Системне програмування', 'LLVM', 'Автоматизація'],
    },
    {
      role: 'Freelance Developer',
      organization: 'Independent',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Працював над клієнтськими веб- і дизайн-проєктами, де були важливі чіткий обсяг робіт, швидке виконання та практичний результат.',
      stack: ['Веброзробка', 'Frontend', 'Реалізація UI'],
    },
  ],
};

const russianContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Разработчик',
    description:
      'Full-stack разработчик, создающий веб-инструменты, внутренние системы и AI-продукты с сильным фокусом на современные подходы, актуальные инструменты и реальную практику в индустрии.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Разработчик',
    summary: 'Инженер умом, builder сердцем.',
    intro: [
      'Я создаю full-stack продукты, в первую очередь веб-инструменты и внутренние системы, от backend-сервисов до frontend-интерфейсов.',
      'Начинал с собственного софта, который не только разрабатывал, но и продавал, развивал и поддерживал после релиза. Именно там я рано получил реальный опыт запуска продуктов и ответственности за то, как они работают после выхода.',
      'Сейчас я работаю как full-stack разработчик над веб-инструментами и AI-системами, с сильным фокусом на современные подходы, актуальные инструменты и реальную практику в индустрии.',
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
    backToTop: 'Наверх',
    copyEmail: 'Скопировать email',
    openEmail: 'Открыть почтовое приложение',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Продукт для чешских компаний, которым нужна более удобная альтернатива официальному порталу datová schránka. Он предлагает более понятный интерфейс, лучшую работу с сообщениями и workflow, лучше подходящий для повседневных бизнес-задач.',
      stack: ['NestJS', 'Next.js', 'Go', 'ISDS'],
      image: '/projects/dska.svg',
      websiteHref: 'https://dska.cz',
      links: [],
    },
    {
      name: 'Ombra',
      summary:
        'Full-stack админ-панель для компании по разработке игр для управления продуктами и подписками. Создана как внутренний инструмент с упором на понятные ежедневные процессы, эффективность и удобное сопровождение.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'Внутренние инструменты'],
      image: '/projects/ombra.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Skill',
      summary:
        'Нативная система лицензирования для контролируемого распространения софта, построенная вокруг аппаратно-привязанной аутентификации, backend-верификации и Windows-клиента, разработанного для более жёсткого контроля доступа.',
      stack: ['C++', 'LLVM', 'Licensing', 'Windows'],
      image: '/projects/skill-cx.svg',
      websiteHref: '#',
      links: [],
    },
    {
      name: 'Stealth Sniper',
      summary:
        'Коммерческий продукт для автоматизации быстрых workflow в реальном времени между несколькими аккаунтами, где критически важны были тайминг, координация и надёжность.',
      stack: ['C++', 'Автоматизация', 'Системы реального времени', 'Производительность'],
      image: '/projects/stealth-sniper.svg',
      websiteHref: '#',
      links: [],
    },
  ],
  experience: [
    {
      role: 'Full-Stack Product Engineer',
      organization: 'Independent',
      period: '2024\u00A0\u2013\u00A0настоящее время',
      summary:
        'Проектирую, создаю и довожу до релиза full-stack продукты: от архитектуры и реализации до дальнейших итераций после запуска.',
      stack: ['TypeScript', 'React', 'Python', 'Внутренние системы'],
    },
    {
      role: 'Software Developer',
      organization: 'Independent',
      period: '2022\u00A0\u2013\u00A02024',
      summary:
        'Самостоятельно разрабатывал и продавал технические продукты, параллельно занимаясь дистрибуцией, обновлениями и поддержкой.',
      stack: ['C++', 'Системное программирование', 'LLVM', 'Автоматизация'],
    },
    {
      role: 'Freelance Developer',
      organization: 'Independent',
      period: '2020\u00A0\u2013\u00A02022',
      summary:
        'Работал над клиентскими веб- и дизайн-проектами, где были важны понятный объём работ, быстрая реализация и практический результат.',
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

export const languageOptions = [
  { value: 'en' as Locale, label: 'English', shortLabel: 'EN' },
  { value: 'cs' as Locale, label: 'Čeština', shortLabel: 'CS' },
  { value: 'ua' as Locale, label: 'Українська', shortLabel: 'UA' },
  { value: 'ru' as Locale, label: 'Русский', shortLabel: 'RU' },
];

export function getLocalePath(locale: Locale): string {
  if (locale === defaultLocale) {
    return '/';
  }
  return localeMeta[locale].path;
}

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}

export function getHtmlLang(locale: Locale): string {
  return localeMeta[locale].htmlLang;
}

export function getOgLocale(locale: Locale): string {
  return localeMeta[locale].ogLocale;
}
