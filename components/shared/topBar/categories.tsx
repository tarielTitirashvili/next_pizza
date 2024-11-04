import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {
  className?: string
  // activeIndex: number
}

export const categories = [
  {
    name: 'pizzas',
  },
  {
    name: 'Breakfast',
  },
  {
    name: 'Appetizers',
  },
  {
    name: 'Cocktails',
  },
  {
    name: 'Drinks',
  },
]

const activeIndex = 0

const Categories = (props: Props) => {
  const { className } = props
  const t = useTranslations()
  return (
    <div
      className={cn('inline-flex gap-2 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map((pizza, index) => {
        return (
          <a
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer',
              activeIndex === index &&
                'bg-white shadow-md shadow-gray-200 text-primary'
            )}
            key={pizza.name}
          >
            {t(`filters.${pizza.name}`)}
          </a>
        )
      })}
    </div>
  )
}

export default Categories
