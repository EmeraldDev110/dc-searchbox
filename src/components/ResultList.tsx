'use client'

import { Tool } from '@/types'
import ResultItem from './ResultItem'
import Loading from './Loading'
import Image from 'next/image'

interface ResultListProps {
  data: Tool[]
  loading: boolean
  error: boolean
}

export default function ResultList({ data, loading, error }: ResultListProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Loading />
      </div>
    )
  }

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

  return (
    <div className="max-h-[300px] overflow-y-auto divide-y divide-gray">
      {data.map((tool) => (
          <ResultItem tool={tool} key={tool.title}/>
      ))}
    </div>
  )
}
