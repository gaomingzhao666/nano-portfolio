const formatDate = (date: Date): string => date.toISOString().slice(0, 10)

export const getFormattedDateNow = (): string => formatDate(new Date())

export const getFormattedDateNowPlusYears = (years: number): string => {
  const date = new Date()
  date.setFullYear(date.getFullYear() + years)
  return formatDate(date)
}
