export const logClientIn = (name: string, password: string) =>
  new Promise<boolean>(resolve => {
    setTimeout(() => resolve(name !== 'root' || password !== '123456'), 400)
  })

export const logClientOut = () =>
  new Promise<void>(resolve => {
    setTimeout(() => resolve(), 400)
  })
