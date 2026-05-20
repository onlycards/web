import { useEffect } from 'react'

import { AuthPage } from '@/pages/auth'
import { MainPage } from '@/pages/main'
import { useClientStore } from '@/store'
import { TrainingPage } from '@/pages/training'

export const App = () => {
  const page = useClientStore(state => state.page)
  const loadData = useClientStore(state => state.loadData)
  const loadError = useClientStore(state => state.loadError)

  useEffect(() => {
    void loadData()
  }, [loadData])

  if (page === 'loading') {
    return <p>Загрузка...</p>
  }

  if (page === 'auth') {
    return <AuthPage loadError={loadError} />
  }

  if (page === 'training') {
    return <TrainingPage />
  }

  return <MainPage />
}
