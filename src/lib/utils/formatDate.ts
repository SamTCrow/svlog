type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

/**
 * Formats the given date using the specified dateStyle and locales.
 *
 * @param {string} date - The date to be formatted
 * @param {DateStyle} [dateStyle='medium'] - The style of the date formatting
 * @param {string} [locales='en'] - The locales to be used for formatting
 * @return {string} The formatted date string
 */
export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const dateToFormat = new Date(date.replaceAll('-', '/'))
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return dateFormatter.format(dateToFormat)
}