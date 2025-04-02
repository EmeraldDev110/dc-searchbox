'use client'

import { useState, useEffect, useCallback } from 'react'
import { debounce } from '@/utils/debounce'
import Image from 'next/image'
import clsx from 'clsx'

interface SearchBarProps {
  value: string
  onSearch: (term: string) => void
  status?: 'default' | 'loading' | 'error'
}

export default function SearchBar({ value, onSearch, status = 'default' }: SearchBarProps) {
  const [input, setInput] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  // Keep internal input in sync with external value
  useEffect(() => {
    setInput(value)
  }, [value])

  // Debounced search function for user typing
  const debouncedSearch = useCallback(
    debounce((val: string) => {
      onSearch(val)
    }, 500),
    [onSearch]
  )

  // Only call onSearch through debounce if user typed (not from props)
  useEffect(() => {
    if (input !== value) {
      debouncedSearch(input)
    }
  }, [input])

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
      <Image src="/icons/search.svg" alt="Search Icon" width={24} height={24} />
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
