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
    summary: '',
    intro: [
      'Веду продукти від ідеї до робочого продукту.',
      'Починав у 2020 році з того, що сам розробляв і продавав свої програми. Саме тоді я зрозумів, що відбувається з продуктом після релізу, і в цьому й полягає більша частина роботи.',
      'Так само працюю й зараз: над веб-інструментами та AI-системами, зазвичай з нуля та відповідаючи за продукт повністю.',
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
    copyEmail: 'Скопіювати',
    openEmail: 'Відкрити поштовий застосунок',
  },
  projects: [
    {
      name: 'Dska',
      summary:
        'Продукт для чеських компаній, яким потрібна зручніша альтернатива офіційному порталу електронних держскриньок «Datová schránka». Дає зрозумілий інтерфейс, зручну роботу з повідомленнями та процеси, що краще вписуються в щоденну роботу бізнесу.',
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
        'Комерційний продукт для автоматизації швидких процесів у реальному часі одразу на кількох акаунтах, де критично важливими були таймінг, координація та стабільність.',
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
      period: '2024\u00A0\u2013\u00A0Дотепер',
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
