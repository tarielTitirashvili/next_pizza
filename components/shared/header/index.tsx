import React from 'react'
import LanguageSwitcher from './langSwitcher'
import { ENUM_LANGUAGES } from '@/i18n.config'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container } from '../container'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { ArrowRight, User } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'

type TProps = {
  className?: 'string'
}

export const Header = (props: TProps) => {
  const { className } = props

  const lang = useLocale() as ENUM_LANGUAGES
  const t = useTranslations()
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between px-6 py-4">
        {/* left side */}
        <div>
          <Image src={logo} alt="pizza logo" width={40} height={40} />
          <h1 className="text-2xl uppercase">{t('header.pizza')}</h1>
          <h3 className="text-sm text-gray-400 leading-3">
            {t('header.itCouldNotBeTastier')}
          </h3>
        </div>
        {/* right side */}
        <div className="flex gap-4">
          <LanguageSwitcher lang={lang} />
          <Button className="flex items-center gap-1" variant={'outline'}>
            <User size={16} />
            {t('header.login')}
          </Button>
          <Button variant={'default'} className={'group relative'}>
            <div>
              <p>12.5 $</p>
            </div>
            <span className="h-full w-[1px] bg-white/30 mx-3" />
            <div className="flex gap-2 transition duration-300 group-hover:opacity-0">
              <ShoppingCart size={16} />
              <p>3</p>
            </div>
            <ArrowRight
              size={20}
              className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Button>
        </div>
      </Container>
    </header>
  )
}
