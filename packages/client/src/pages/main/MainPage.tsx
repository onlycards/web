import { FC } from 'react'

import { useNonNullClientData } from '@/store'

export const MainPage: FC = () => {
  const clientData = useNonNullClientData()

  return (
    <div className="main-page">
      <div>{clientData.name}</div>
      <div>{clientData.id}</div>
    </div>
  )
}
