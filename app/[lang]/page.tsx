import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function Home() {
  const t = useTranslations()

  return (
    <div>
      <h1>Home</h1>
      <Button variant={'outline'}>
        {t('nav.cart')}
      </Button>
    </div>
  )
}
