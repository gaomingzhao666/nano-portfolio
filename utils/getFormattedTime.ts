const date = new Date()

const formattedDateNow = (date: Date): string => {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0') // Months are 0-indexed
	const day = date.getDate().toString().padStart(2, '0')

	// Format the date as YYYY-MM-DD
	return `${year}-${month}-${day}`
}
const formattedDateNowPlusYears = (date: Date, years: number): string => {
	const year = date.getFullYear() + years
	const month = (date.getMonth() + 1).toString().padStart(2, '0') // Months are 0-indexed
	const day = date.getDate().toString().padStart(2, '0')

	// Format the date as YYYY-MM-DD
	return `${year}-${month}-${day}`
}

export const getFormattedDateNow = (): string => formattedDateNow(date)
export const getFormattedDateNowPlusYears = (years: number): string =>
	formattedDateNowPlusYears(date, years)
