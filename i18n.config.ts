import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export enum ENUM_LANGUAGES {
  GEORGIAN = 'ge',
  ENGLISH = 'en',
}

export const locales: ENUM_LANGUAGES[] = [
  ENUM_LANGUAGES.GEORGIAN,
  ENUM_LANGUAGES.ENGLISH,
] as const
export type Locale = (typeof locales)[number]

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
})
