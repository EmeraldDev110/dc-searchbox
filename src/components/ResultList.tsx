'use client'

import { Tool } from '@/types'
import ResultItem from './ResultItem'
import Loading from './Loading'
import Image from 'next/image'

interface ResultListProps {
  data: Tool[]         // Array of search results to render
  loading: boolean     // True while fetching data
  error: boolean       // True if API call fails
}

export default function ResultList({ data, loading, error }: ResultListProps) {
  // Show spinner while results are being fetched
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Loading />
      </div>
    )
  }

  // Show error illustration if the request failed
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Image
          src="/images/error-state.png"
          alt="Error state"
          width={247}
          height={213}
          className="mb-4"
        />
      </div>
    )
  }

  // Show empty state illustration if no results were returned
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Image
          src="/images/empty-state.png"
          alt="No results"
          width={247}
          height={213}
          className="mb-4"
        />
      </div>
    )
  }

  // Render list of result items with scroll and dividers
  return (
    <div className="max-h-[300px] overflow-y-auto divide-y divide-gray p-2">
      {data.map((tool) => (
        <ResultItem tool={tool} key={tool.title} />
      ))}
    </div>
  )
}
