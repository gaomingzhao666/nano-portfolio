const date = new Date()

export const formatDate = (date: Date) => {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0') // Months are 0-indexed
	const day = date.getDate().toString().padStart(2, '0')

	// Format the date as YYYY-MM-DD
	return `${year}-${month}-${day}`
}

export const getFormattedTime = (): string => formatDate(date)
