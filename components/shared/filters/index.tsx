import React from 'react'
import { Title } from '../title'
import { useTranslations } from 'next-intl'

const Filters = () => {
  const t = useTranslations()
  return (
    <div>
      <Title text={t('sidebarFilters.title')} />
    </div>
  )
}

export default Filters