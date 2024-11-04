import React from 'react'
import LanguageSwitcher from './langSwitcher'
import { ENUM_LANGUAGES } from '@/i18n.config'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container } from '../container'
import Image from 'next/image'
import logo from '@/assets/logo.png'

type TProps = {
  className?: 'string'
}

const Header = (props: TProps) => {
  const { className } = props

  const lang = useLocale() as ENUM_LANGUAGES
  const t = useTranslations()
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between px-6 py-4'>
        <div>
          <Image src={logo} alt='pizza logo' width={40} height={40}/>
          <h1 className='text-2xl uppercase'>
            {t('header.pizza')}
          </h1>
          <h3 className='text-sm text-gray-400 leading-3'>
            {t('header.itCouldNotBeTastier')}
          </h3>
        </div>
        <div>
          <LanguageSwitcher lang={lang} />
        </div>
      </Container>
    </header>
  )
}

export default Header
