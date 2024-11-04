import { cn } from '@/lib/utils'
import { ArrowUpDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

type TProps = {
  className?: string
}

const SortDropdown = (props: TProps) => {
  const { className } = props
  const t = useTranslations()
  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className)}>
      <ArrowUpDown size={16}/>
      <b>{t('filters.sort')}</b>
      <b className='text-primary'>{t('filters.popular')}</b>
    </div>
  )
}

export default SortDropdown