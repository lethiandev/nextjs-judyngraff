export function formatDate(date: Date | string | undefined, fallback = 'Present') {
  return date ? formatDateToString(date) : fallback
}

export function formatDateToString(date: Date | string) {
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })
}
