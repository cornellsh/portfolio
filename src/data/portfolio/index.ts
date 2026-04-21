import { englishContent } from './en';
import { czechContent } from './cs';
import { ukrainianContent } from './ua';
import { russianContent } from './ru';
import type { PortfolioContent } from './types';

export type { LinkItem, SectionItem, ProjectItem, ExperienceItem, PortfolioContent } from './types';
export { englishContent, czechContent, ukrainianContent, russianContent };

export const locales = ['en', 'cs', 'ua', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { path: string; htmlLang: string; ogLocale: string; hrefLang: string }> = {
  en: { path: '/', htmlLang: 'en', ogLocale: 'en_US', hrefLang: 'en' },
  cs: { path: '/cs/', htmlLang: 'cs', ogLocale: 'cs_CZ', hrefLang: 'cs' },
  ua: { path: '/ua/', htmlLang: 'uk', ogLocale: 'uk_UA', hrefLang: 'uk' },
  ru: { path: '/ru/', htmlLang: 'ru', ogLocale: 'ru_RU', hrefLang: 'ru' },
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

export const siteUrl = 'https://cornell.sh';

export function getAlternateLinks(): Array<{ hrefLang: string; href: string }> {
  return locales.map((locale) => ({
    hrefLang: localeMeta[locale].hrefLang,
    href: `${siteUrl}${getLocalePath(locale)}`,
  }));
}

export function getOgAlternateLocales(currentLocale: Locale): string[] {
  return locales
    .filter((locale) => locale !== currentLocale)
    .map((locale) => localeMeta[locale].ogLocale);
}
