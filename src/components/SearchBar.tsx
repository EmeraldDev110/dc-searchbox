'use client'

import { useState, useEffect, useCallback } from 'react'
import { debounce } from '@/utils/debounce'
import Image from 'next/image'
import clsx from 'clsx'

// Props for the SearchBar component
interface SearchBarProps {
  value: string                        // Controlled value from parent
  onSearch: (term: string) => void    // Triggered when user types
  status?: 'default' | 'loading' | 'error' // Optional UI status indicator
}

export default function SearchBar({ value, onSearch, status = 'default' }: SearchBarProps) {
  const [input, setInput] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  // Keep local input state in sync when parent updates `value`
  useEffect(() => {
    setInput(value)
  }, [value])

  // Debounced search callback for smoother UX during typing
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((val: string) => {
      onSearch(val)
    }, 500),
    [onSearch]
  )

  // Only trigger debounced search if user manually types (not on prop change)
  useEffect(() => {
    if (input !== value) {
      debouncedSearch(input)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  // Determine border color based on focus and status
  const borderClass = clsx({
    'border-[3px] border-primary': isFocused || status === 'loading',
    'border-[3px] border-error': status === 'error',
    'border-0': status === 'default' && !isFocused,
  })

  return (
    <div
      className={clsx(
        'flex items-center w-full h-[74px] px-6 gap-3 rounded-[12px] bg-gray transition-all',
        borderClass
      )}
    >
      {/* Search icon (SVG) */}
      <Image src="/icons/search.svg" alt="Search Icon" width={24} height={24} />

      {/* Search input field */}
      <input
        type="text"
        placeholder="Search what technologies we are using at DC..."
        className="w-full outline-none bg-transparent text-title placeholder-paragraph text-[20px] leading-[26px] font-medium"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}
