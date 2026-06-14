import type { PortfolioContent } from './types';

export const russianContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Разработчик',
    description:
      'Full-stack разработчик, создающий веб-инструменты, внутренние системы и AI-продукты с фокусом на современные подходы и реальную практику в индустрии.',
    siteName: 'Cornell Shakh',
  },
  profile: {
    name: 'Cornell Shakh',
    role: 'Full-Stack Разработчик',
    summary: '',
    intro: [
      'Веду продукты от идеи до работающего продукта.',
      'Начинал в 2020 году с того, что сам разрабатывал и продавал свои программы. Тогда я и понял, что происходит с продуктом после релиза, и именно в этом состоит большая часть работы.',
      'Так же работаю и сейчас: над веб-инструментами и AI-системами, обычно с нуля и отвечая за продукт целиком.',
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
    copyEmail: 'Скопировать',
    openEmail: 'Открыть почтовое приложение',
    themeSystem: 'Системная',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Продукт для чешских компаний, которым нужна более удобная альтернатива официальному порталу электронных госящиков «Datová schránka». Даёт понятный интерфейс, удобную работу с сообщениями и процессы, которые лучше вписываются в повседневную работу бизнеса.',
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
        'Коммерческий продукт для автоматизации быстрых процессов в реальном времени сразу на нескольких аккаунтах, где критически важны были тайминг, координация и надёжность.',
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
      period: '2024\u00A0\u2013\u00A0Сейчас',
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
