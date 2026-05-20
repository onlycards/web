import { useState, useEffect, ChangeEvent, useActionState } from 'react'

import { useLogIn, useFetchData } from '@/store'

export const useAuthPage = () => {
  const logIn = useLogIn()
  const fetchData = useFetchData()
  const [name, setName] = useState('')
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [isErrorVisible, setIsErrorVisible] = useState(false)

  useEffect(() => {
    fetchData().then(result => {
      if (!result) {
        setIsDataFetched(true)
      }
    })
  }, [fetchData])

  const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setName(target.value)

  const handleFormFocus = () => setIsErrorVisible(false)

  const loginAction = async (_prevState: string, formData: FormData) => {
    const result = await logIn(
      formData.get('name') as string,
      formData.get('password') as string,
    )

    setIsErrorVisible(true)

    return result ? '' : 'Ошибка при попытке входа'
  }

  const [error, submitAction, isPending] = useActionState(loginAction, '')
  const errorText = isErrorVisible ? error : ''

  return {
    name,
    errorText,
    submitAction,
    handleFormFocus,
    handleNameChange,
    disabled: isPending,
    isPageVisible: isDataFetched,
  }
}
