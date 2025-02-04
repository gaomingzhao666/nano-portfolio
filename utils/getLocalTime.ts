export const getLocalTime = (databaseTime: string): string => {
  const date: Date = new Date(databaseTime)
  const localizedTime: string = date.toLocaleTimeString()
  const localizedDate: string = date.toLocaleDateString()

  return `${localizedDate} ${localizedTime}`
}
