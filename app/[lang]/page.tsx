import { useTranslations } from 'next-intl'
import { Title } from '@/components/shared'
import { TopBar } from '@/components/shared/topBar'

export default function Home() {
  const t = useTranslations()

  return (
    <>
      <div className="px-5 pt-8">
        <Title
          text={t('filters.allPizzas')}
          size="lg"
          className="font-extrabold"
        />
      </div>
      <TopBar />
    </>
  )
}
