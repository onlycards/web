import { FC, useState, useEffect } from 'react'

import { AuthPage } from '@/pages/auth'
import { MainPage } from '@/pages/main'
import { TrainingPage } from '@/pages/training'
import { useFetchData, useCurrentPage } from '@/store'

export const App: FC = () => {
  const page = useCurrentPage()
  const fetchData = useFetchData()
  const [isDataFetched, setIsDataFetched] = useState(false)

  useEffect(() => {
    fetchData().then(() => setIsDataFetched(true))
  }, [fetchData])

  return (
    <>
      {isDataFetched &&
        (page === 'auth' ? (
          <AuthPage />
        ) : page === 'main' ? (
          <MainPage />
        ) : (
          <TrainingPage />
        ))}
    </>
  )
}
