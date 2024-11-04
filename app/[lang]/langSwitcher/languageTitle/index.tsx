import React from 'react'
import georgianFlag from '@/assets/flags/ge.svg'
import UsFlag from '@/assets/flags/us.svg'
import { ENUM_LANGUAGES } from '@/i18n.config'
import Image from 'next/image'

type Props = {
  lang: ENUM_LANGUAGES
}

const flagsWithTitles = {
  ge: {
    title: 'ქართული',
    flag: georgianFlag,
  },
  en: {
    title: 'English',
    flag: UsFlag,
  },
}

const LanguageTitle = ({ lang }: Props) => {
  return (
    <div>
      <Image className='w-10 h-10' src={flagsWithTitles[lang].flag} alt="flag" />
      {flagsWithTitles[lang].title}
    </div>
  )
}

export default LanguageTitle
