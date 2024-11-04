import { useTranslations } from 'next-intl'
import { Container, Title } from '@/components/shared'
import Categories from '@/components/shared/categories'

export default function Home() {
  const t = useTranslations()

  return (
    <>
      <Container className='px-5 pt-8'>
        <Title text={t('filters.allPizzas')} size='lg' className='font-extrabold' />
        <Categories />
      </Container>
    </>
  )
}
