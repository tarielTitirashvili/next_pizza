// app/_components/LocaleSwitcher.tsx
'use client'

import { ENUM_LANGUAGES, locales, usePathname, useRouter } from '../../../../i18n.config'
import LanguageTitle from './languageTitle'
import { MouseEvent } from 'react'
// import { test } from '../../../../../../../API/test'


export default function LanguageSwitcher({ lang }: { lang: ENUM_LANGUAGES }) {
  // `pathname` will contain the current
  // route without the locale e.g. `/about`...
  const pathname = usePathname()
  const router = useRouter()

  const changeLocale = (event : MouseEvent<HTMLButtonElement>) => {
    const newLocale = (event.currentTarget as HTMLButtonElement).value as ENUM_LANGUAGES
    //  test()
    // ...if the user chose Arabic ("ar-eg"),
    // router.replace() will prefix the pathname
    // with this `newLocale`, effectively changing
    // languages by navigating to `/ar-eg/about`.
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div
      id="demo-simple-select"
    >
      {locales.map((loc) => (
        <button key={loc} value={loc} className={`${lang === loc ? 'active' : ''}`} onClick={changeLocale}>
          <LanguageTitle lang={loc} />
        </button>
      ))}
    </div>
  )
}
