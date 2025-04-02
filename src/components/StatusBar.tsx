'use client'

interface StatusBarProps {
  loading: boolean
  error: boolean
  resultCount: number
}

export default function StatusBar({ loading, error, resultCount }: StatusBarProps) {
  let message = ''

  if (loading) {
    message = 'Searching ...'
  } else if (error) {
    message = 'Something went wrong but this is not your fault :)'
  } else if (resultCount === 0) {
    message = 'No result'
  } else {
    message = `${resultCount} result${resultCount > 1 ? 's' : ''}`
  }

  return (
    <div
      className={`w-full h-[50px] pt-4 pl-6 text-base font-medium align-middle border-t border-gray ${
        error ? 'text-error' : 'text-paragraph'
      }`}
    >
      {message}
    </div>
  )
}
