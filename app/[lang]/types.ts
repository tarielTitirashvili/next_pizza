import { ENUM_LANGUAGES } from '@/i18n.config'

export type TPropsLayout = {
  children: React.ReactNode
  params: { lang: ENUM_LANGUAGES }
}
