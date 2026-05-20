import { FC } from 'react'

import { AuthPage } from '@/pages/auth'
import { MainPage } from '@/pages/main'
import { useCurrentPage } from '@/store'
import { TrainingPage } from '@/pages/training'

export const App: FC = () => {
  const page = useCurrentPage()

  return (
    <>
      {page === 'auth' ? (
        <AuthPage />
      ) : page === 'main' ? (
        <MainPage />
      ) : (
        <TrainingPage />
      )}
    </>
  )
}
