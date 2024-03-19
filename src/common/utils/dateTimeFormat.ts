export const dateTimeFormat = (date: string, format: string = 'ru-Ru') => {
  try {
    const dateFormat = new Date(date)

    return new Intl.DateTimeFormat(format).format(dateFormat)
  } catch (e) {
    return 'Invalid date'
  }
}
