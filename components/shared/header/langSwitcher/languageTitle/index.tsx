import React from 'react'
// import georgianFlag from '@/assets/flags/ge.svg'
// import UsFlag from '@/assets/flags/us.svg'
import { ENUM_LANGUAGES } from '@/i18n.config'

type Props = {
  lang: ENUM_LANGUAGES
}

const flagsWithTitles = {
  ge: {
    title: 'ქართული',
    // flag: georgianFlag,
  },
  en: {
    title: 'English',
    // flag: UsFlag,
  },
}

const LanguageTitle = ({ lang }: Props) => {
  return (
    <>
      {flagsWithTitles[lang].title}
    </>
  )
}

export default LanguageTitle
