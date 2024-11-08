import React from 'react'
import { Title } from '../title'
import { useTranslations } from 'next-intl'
import { FilterCheckbox } from './checkbox'
import { Input } from '@/components/ui'
import { RangeSlider } from '../range-slider'

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
      <div className='mt-5 flex flex-col border-y border-y-neutral-100 py-6 pb-7'>
        <Title
          text={t('sidebarFilters.price')}
          size="sm"
          className="mb-5 font-bold"
        />
        <div className='flex gap-3'>
          <Input type='number' placeholder='0' min={0} max={3000} defaultValue={0} />
          <Input type='number' placeholder='30000' min={1} max={3000} defaultValue={3000} />
        </div>
      </div>
        <RangeSlider min={0} max={3000} step={10} value={[0, 3000]} />
    </div>
  )
}
