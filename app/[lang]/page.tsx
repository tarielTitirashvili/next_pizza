import { useTranslations } from 'next-intl'
import { Container, Title } from '@/components/shared'
import { TopBar } from '@/components/shared/topBar'

export default function Home() {
  const t = useTranslations()

  return (
    <>
      <Container className="px-5 pt-8">
        <Title
          text={t('filters.allPizzas')}
          size="lg"
          className="font-extrabold"
        />
      </Container>
      <TopBar />
    </>
  )
}
