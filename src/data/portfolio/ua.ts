import type { PortfolioContent } from './types';

export const ukrainianContent: PortfolioContent = {
  seo: {
    title: 'Cornell Shakh | Full-Stack Розробник',
    description:
      'Full-stack розробник, який створює веб-інструменти, внутрішні системи та AI-продукти з фокусом на сучасні підходи та реальну практику в індустрії.',
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
