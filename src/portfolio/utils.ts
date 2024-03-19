import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParamsToggle = (paramName: string) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const paramValue = searchParams.get(paramName) ?? null

  const change = (newValue: string | null) => {
    const toggledValue = paramValue === newValue ? null : newValue
    const query = updateSearchParams(searchParams, paramName, toggledValue)
    router.push(`${pathname}?${query}`, { scroll: false })
  }

  return { change, value: paramValue }
}

function updateSearchParams(source: URLSearchParams, key: string, value: string | null) {
  const query = new URLSearchParams(source)
  if (value === null) {
    query.delete(key)
  } else {
    query.set(key, value)
  }
  return query
}
