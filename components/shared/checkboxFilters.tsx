import React from 'react'
import { FilterCheckboxProps } from './filters/checkbox'
import { Input } from '../ui'
import { useTranslations } from 'next-intl'
// import { Checkbox } from '../ui'

type TProps = {
  title: React.ReactNode
  checkboxes?: FilterCheckboxProps[]
  defaultCheckboxes?: FilterCheckboxProps[]
  defaultCheckboxesLimit?: number
  onChange?: (values: string[]) => void
  className?: string
}

const CheckboxFilters = (props: TProps) => {
  const { checkboxes, title='' } = props
  const t = useTranslations()
  return (
    <div>
      {title}

      <div className='mb-5'>
        <Input type='string' placeholder={t('sidebarFilters.search')} />
      </div>
      {/* {checkboxes?.map((checkbox) => {
        return <>tariel</>
      })} */}
    </div>
  )
}

export default CheckboxFilters
