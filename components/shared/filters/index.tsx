import React from 'react'
import { Title } from '../title'
import { useTranslations } from 'next-intl'
import { FilterCheckbox } from './checkbox'

export const Filters = () => {
  const t = useTranslations()
  return (
    <div>
      <Title
        text={t('sidebarFilters.title')}
        size="sm"
        className="mb-5 font-bold"
      />
      <div className='flex flex-col gap-2'>
        <FilterCheckbox text={t('sidebarFilters.editable')} value='0'/>
        <FilterCheckbox text={t('sidebarFilters.new')} value='1'/>
      </div>
    </div>
  )
}
